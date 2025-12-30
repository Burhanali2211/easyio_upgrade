import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendTelegramNotification } from '@/lib/telegram';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

function formatApplicationMessage(data: {
  name: string;
  email: string;
  position: string;
  portfolio_url?: string;
  message?: string;
}): string {
  return `
🔔 <b>New Job Application</b>

💼 <b>Position:</b> ${escapeHtml(data.position)}

👤 <b>Name:</b> ${escapeHtml(data.name)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
${data.portfolio_url ? `🔗 <b>Portfolio:</b> ${escapeHtml(data.portfolio_url)}\n` : ''}
${data.message ? `💬 <b>Message:</b>\n${escapeHtml(data.message)}\n` : ''}
⏰ <i>Received: ${new Date().toLocaleString()}</i>
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, position, portfolio_url, message } = body;

    if (!name || !email || !position) {
      return NextResponse.json(
        { error: 'Name, email, and position are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('job_applications')
      .insert([{ name, email, position, portfolio_url, message }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    // Send Telegram notification (non-blocking - don't fail the request if Telegram fails)
    if (data && process.env.TELEGRAM_CHAT_ID) {
      try {
        const formattedMessage = formatApplicationMessage({
          name,
          email,
          position,
          portfolio_url,
          message,
        });
        
        const result = await sendTelegramNotification(process.env.TELEGRAM_CHAT_ID, formattedMessage);
        
        if (!result.success && result.error) {
          console.error('Telegram notification failed:', result.error);
          // If it's a "chat not found" error, provide helpful message
          if (result.error.includes('chat not found')) {
            console.error('💡 TROUBLESHOOTING: Make sure you have sent at least one message to your bot first!');
          }
        }
      } catch (telegramError: any) {
        // Log but don't fail the request
        console.error('Telegram notification failed:', telegramError?.message || telegramError);
      }
    }

    return NextResponse.json(
      { success: true, data },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
  }
}
