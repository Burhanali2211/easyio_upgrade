# Telegram Integration Setup Guide

This guide will help you set up Telegram notifications for your admin dashboard.

## Overview

The Telegram integration allows you to receive instant notifications on Telegram whenever:
- A user submits a contact form message
- Someone applies for a job position

All messages are also saved in the Supabase database and can be viewed in the admin dashboard under the "Messages" tab.

## Setup Instructions

### Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Start a conversation with BotFather
3. Send the command: `/newbot`
4. Follow the prompts to:
   - Choose a name for your bot (e.g., "EasyIO Admin Bot")
   - Choose a username for your bot (must end with "bot", e.g., "easyio_admin_bot")
5. BotFather will give you a **bot token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)
6. **Save this token** - you'll need it in Step 3

### Step 2: Get Your Chat ID

You need to get your Telegram chat ID to receive notifications. There are two methods:

#### Method 1: Using @userinfobot
1. Search for **@userinfobot** on Telegram
2. Start a conversation with it
3. It will reply with your user ID (a number like `123456789`)
4. **Save this number** - this is your chat ID

#### Method 2: Using @getidsbot
1. Search for **@getidsbot** on Telegram
2. Start a conversation with it
3. It will reply with your chat ID
4. **Save this number** - this is your chat ID

### Step 3: Configure Environment Variables

1. Open your `.env` file in the project root
2. Add the following lines with your actual values:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_from_step_1
TELEGRAM_CHAT_ID=your_chat_id_from_step_2
```

Example:
```env
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

### Step 4: Restart Your Development Server

After adding the environment variables:

1. Stop your current development server (Ctrl+C)
2. Restart it with: `npm run dev`
3. The Telegram integration will now be active

## Testing

To test if everything is working:

1. Go to your website's contact page
2. Submit a test message
3. Check your Telegram - you should receive a notification immediately
4. Check the admin dashboard - the message should appear in the "Messages" tab

## Features

### Admin Dashboard
- View all contact form submissions in the "Messages" tab
- See user name, email, company, message type, and full message content
- Delete messages directly from the dashboard
- Messages are sorted by most recent first

### Telegram Notifications
- Instant notifications when messages are received
- Formatted messages with all relevant information
- Different message types are clearly labeled:
  - 📧 General Inquiry
  - 🤝 Collaboration Request
  - 🏢 Enterprise Solution
  - 💼 Job Application

## Security Notes

- The Telegram bot token and chat ID are stored in environment variables (never commit these to version control)
- Messages are saved to Supabase database before sending Telegram notifications
- If Telegram fails, the message is still saved (non-blocking)
- Only admin users can view messages in the dashboard

## Troubleshooting

### Not receiving Telegram notifications?

1. **Check environment variables**: Make sure `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set correctly in your `.env` file
2. **Verify bot token**: Make sure you copied the full token from BotFather
3. **Verify chat ID**: Make sure you're using your personal chat ID, not a group chat ID
4. **Check server logs**: Look for any error messages in your terminal/console
5. **Start a conversation**: Make sure you've sent at least one message to your bot first

### Messages not appearing in admin dashboard?

1. **Check database**: Verify that messages are being saved to the `contact_submissions` table in Supabase
2. **Check authentication**: Make sure you're logged in as an admin user
3. **Refresh the page**: Try refreshing the admin dashboard

## Support

If you encounter any issues, check:
- Server console logs for error messages
- Supabase dashboard to verify data is being saved
- Telegram bot status (make sure the bot is active)

