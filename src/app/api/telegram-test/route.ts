import { NextRequest, NextResponse } from 'next/server';
import { sendTelegramNotification } from '@/lib/telegram';

export async function GET(request: NextRequest) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken) {
      return NextResponse.json({
        success: false,
        error: 'TELEGRAM_BOT_TOKEN is not set in environment variables',
      }, { status: 400 });
    }

    if (!chatId) {
      return NextResponse.json({
        success: false,
        error: 'TELEGRAM_CHAT_ID is not set in environment variables',
      }, { status: 400 });
    }

    // Send a test message
    const testMessage = `
🧪 <b>Telegram Bot Test</b>

✅ Your bot is configured correctly!

📋 <b>Configuration:</b>
• Bot Token: ${botToken.substring(0, 10)}...${botToken.substring(botToken.length - 5)}
• Chat ID: ${chatId}

⏰ <i>Test sent at: ${new Date().toLocaleString()}</i>

If you received this message, your Telegram integration is working! 🎉
    `.trim();

    const result = await sendTelegramNotification(chatId, testMessage);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Test message sent successfully! Check your Telegram.',
        chatId,
      });
    } else {
      return NextResponse.json({
        success: false,
        error: result.error || 'Failed to send test message',
        troubleshooting: {
          step1: 'Make sure you have sent at least one message to your bot first',
          step2: 'Verify your chat ID is correct (get it from @userinfobot)',
          step3: 'Check that your bot token is correct',
          step4: 'Restart your development server after changing .env variables',
        },
      }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || 'Unknown error occurred',
    }, { status: 500 });
  }
}

