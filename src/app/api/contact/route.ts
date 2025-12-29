import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendTelegramNotification, formatContactMessage } from '@/lib/telegram';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, type } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, company, message, type: type || 'general' }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      );
    }

    // Send Telegram notification (non-blocking - don't fail the request if Telegram fails)
    if (data && process.env.TELEGRAM_CHAT_ID) {
      try {
        const formattedMessage = formatContactMessage({
          name,
          email,
          company,
          message,
          type: type || 'general',
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
