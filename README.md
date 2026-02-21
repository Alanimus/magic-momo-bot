# Magic Momo Bot 🎱

A sassy Discord bot that acts as a Magic 8 Ball with attitude. This bot features a bitchy bird personality trapped inside a Magic 8 Ball, providing sarcastic and humorous responses to your yes/no questions.

## Features

- **Magic 8 Ball functionality** with traditional responses
- **Sassy bird personality** - dry humor, sarcasm, and mystical flair
- **Multiple command prefixes**: `!8bird`, `.8bird`, `!8ball`, `.8ball`
- **AI-powered responses** using OpenAI GPT-3.5-turbo
- **Built-in keepalive server** for deployment platforms
- **Random bird noises** (Chirp! Squawk!) for extra personality

## Prerequisites

- Node.js (v16 or higher)
- Discord Bot Token
- OpenAI API Key

## Installation

1. **Clone or download** this repository to your local machine

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following:
   ```
   DISCORD_TOKEN=your_discord_bot_token_here
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Getting Required Tokens

### Discord Bot Token
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to the "Bot" section and click "Add Bot"
4. Enable the following intents:
   - Server Members Intent
   - Message Content Intent
5. Copy the bot token

### OpenAI API Key
1. Go to the [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys
4. Create a new API key and copy it

## Running the Bot

### Locally
```bash
npm start
```

The bot will start and log in as your Discord user. It also runs a web server on port 3000 for keepalive purposes.

### Deployment
The bot includes a built-in Express server running on port 3000 for keepalive functionality, making it suitable for deployment on platforms like Heroku, Replit, or other hosting services.

## Usage

Once the bot is running and invited to your server, use any of these commands:

- `!8bird Will I get the job?`
- `.8bird Should I ask them out?`
- `!8ball Am I making the right choice?`
- `.8ball Will it rain tomorrow?`

The bot will respond with a sassy, bird-themed Magic 8 Ball answer!

## Bot Personality

The bot is designed to be:
- **Sarcastic and dry-humored**
- **Sometimes mean-spirited** (in a fun way)
- **Random and unpredictable**
- **Prone to bird noises** (Chirp! Squawk!)
- **Occasionally gives bad answers** for variety

## Dependencies

- `discord.js` - Discord API wrapper
- `openai` - OpenAI API client
- `dotenv` - Environment variable management
- `express` - Web server for keepalive

## License

MIT License - see LICENSE file for details

## Author

Alanimus

---

⚠️ **Note**: This bot uses paid OpenAI API calls. Monitor your usage to avoid unexpected charges.
