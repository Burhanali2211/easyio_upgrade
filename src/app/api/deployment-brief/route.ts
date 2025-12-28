import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendTelegramNotification, formatDeploymentBriefMessage } from '@/lib/telegram';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      company_name, 
      contact_name, 
      email, 
      team_size, 
      training_needs, 
      project_timeline, 
      additional_info 
    } = body;

    if (!company_name || !contact_name || !email) {
      return NextResponse.json(
        { error: 'Company name, contact name, and email are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('deployment_briefs')
      .insert([{ 
        company_name, 
        contact_name, 
        email, 
        team_size, 
        training_needs, 
        project_timeline, 
        additional_info 
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit deployment brief' },
        { status: 500 }
      );
    }

    // Send Telegram notification
    if (data && process.env.TELEGRAM_CHAT_ID) {
      try {
        const formattedMessage = formatDeploymentBriefMessage({
          company_name,
          contact_name,
          email,
          team_size,
          training_needs,
          project_timeline,
          additional_info,
        });
        
        await sendTelegramNotification(process.env.TELEGRAM_CHAT_ID, formattedMessage);
      } catch (telegramError) {
        console.error('Telegram notification failed:', telegramError);
      }
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
