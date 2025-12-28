import TelegramBot from 'node-telegram-bot-api';

// Initialize Telegram bot (using polling is not needed for just sending messages)
let bot: TelegramBot | null = null;

export function getTelegramBot(): TelegramBot | null {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  
  if (!token) {
    console.warn('TELEGRAM_BOT_TOKEN is not set. Telegram notifications will be disabled.');
    return null;
  }

  if (!bot) {
    // Create bot instance without polling (we only send messages)
    bot = new TelegramBot(token, { polling: false });
  }

  return bot;
}

export async function sendTelegramNotification(
  chatId: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const bot = getTelegramBot();
    
    if (!bot) {
      const error = 'TELEGRAM_BOT_TOKEN is not set. Telegram notifications will be disabled.';
      console.warn(error);
      return { success: false, error };
    }

    if (!chatId) {
      const error = 'TELEGRAM_CHAT_ID is not set. Cannot send notification.';
      console.warn(error);
      return { success: false, error };
    }

    await bot.sendMessage(chatId, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    });

    return { success: true };
  } catch (error: any) {
    let errorMessage = error.message || 'Unknown error';
    
    // Provide helpful error messages
    if (error.response?.body?.description) {
      const description = error.response.body.description;
      
      if (description.includes('chat not found') || description.includes('chat_id is empty')) {
        errorMessage = `Chat not found. Please make sure you have sent at least one message to your bot first. Chat ID: ${chatId}`;
      } else if (description.includes('Unauthorized')) {
        errorMessage = 'Invalid bot token. Please check your TELEGRAM_BOT_TOKEN.';
      } else {
        errorMessage = description;
      }
    }
    
    console.error('Failed to send Telegram notification:', errorMessage);
    return { success: false, error: errorMessage };
  }
}

export function formatContactMessage(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
  type?: string;
}): string {
  const typeLabels: Record<string, string> = {
    general: '📧 General Inquiry',
    collaboration: '🤝 Collaboration Request',
    enterprise: '🏢 Enterprise Solution',
  };

  const typeLabel = typeLabels[data.type || 'general'] || '📧 Message';

  return `
🔔 <b>New Contact Form Submission</b>

${typeLabel}

👤 <b>Name:</b> ${escapeHtml(data.name)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
${data.company ? `🏢 <b>Company:</b> ${escapeHtml(data.company)}\n` : ''}
💬 <b>Message:</b>
${escapeHtml(data.message)}

  ⏰ <i>Received: ${new Date().toLocaleString()}</i>
  `.trim();
}

export function formatDeploymentBriefMessage(data: {
  company_name: string;
  contact_name: string;
  email: string;
  team_size?: string;
  training_needs?: string;
  project_timeline?: string;
  additional_info?: string;
}): string {
  return `
🚀 <b>New Deployment Brief Request</b>

🏢 <b>Company:</b> ${escapeHtml(data.company_name)}
👤 <b>Contact:</b> ${escapeHtml(data.contact_name)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
👥 <b>Team Size:</b> ${escapeHtml(data.team_size || 'Not specified')}
🗓️ <b>Timeline:</b> ${escapeHtml(data.project_timeline || 'Not specified')}

📝 <b>Training Needs:</b>
${escapeHtml(data.training_needs || 'Not specified')}

ℹ️ <b>Additional Info:</b>
${escapeHtml(data.additional_info || 'Not specified')}

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

