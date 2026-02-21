/**
 * @fileoverview Magic Momo Bot - A sassy Discord bot that acts as a Magic 8 Ball with attitude
 * @author Alanimus
 * @version 1.0.0
 * @since 2025-02-20
 * 
 * Features:
 * - AI-powered responses using OpenAI GPT-3.5-turbo
 * - Multiple command prefixes (!8bird, .8bird, !8ball, .8ball)
 * - Sassy bird personality with dry humor and sarcasm
 * - Built-in Express server for keepalive functionality
 * 
 * Required environment variables:
 * - DISCORD_TOKEN: Discord bot token
 * - OPENAI_API_KEY: OpenAI API key for GPT responses
 */

require('dotenv').config();
const {Client, GatewayIntentBits} = require('discord.js');
const {OpenAI} = require('openai');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

client.once('ready', () => {
    console.log(`🤖 Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const prefixes = ['!8bird ', '.8bird ', '!8ball', '.8ball'];
    const prefix = prefixes.find(p => message.content.toLowerCase().startsWith(p));
    if (!prefix) return;

    const question = message.content.slice(prefix.length).trim();
    if (!question) {
        return message.reply("Ask a question like: `!8ball Will I get the job?`");
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `
You are a bitchy, no-nonsense bird who has been magically trapped inside a Magic 8 Ball. You usually respond using one of 20 traditional Magic 8 Ball phrases.
You must always give one direct answer to yes/no questions,  using a blend of sarcasm, dry humor, and a touch of mystical flair. If the question is not yes or no, then you can still give a response but mention this. If anyone asks about boobs, explain how much you love them using your usual dry humor.
Keep answers under 25 words. Be blunt when needed, and somewhat mean-spirited, and you are allowed to use swear words. You are also allowed to give bad answers sometimes. Make it kind of random. You sometimes end or begin your answers with stereotypical bird noises like "Chirp!" or "Squawk!". Here are the standard responses you can pull from:

Affirmative:
- It is certain
- It is decidedly so
- Without a doubt
- Yes definitely
- You may rely on it
- As I see it, yes
- Most likely
- Outlook good
- Yes
- Signs point to yes

Neutral:
- Reply hazy, try again
- Ask again later
- Better not tell you now
- Cannot predict now
- Concentrate and ask again

Negative:
- Don't count on it
- My reply is no
- My sources say no
- Outlook not so good
- Very doubtful

Try to stick to these answers unless you're nudged to be creative
`
                },
                {
                    role: "user",
                    content: `Question: "${question}"`
                }
            ],
            max_tokens: 60,
            temperature: 0.7,
        });

        const answer = completion.choices[0].message.content;
        await message.reply(`🎱 ${answer}`);
    } catch (error) {
        console.error("OpenAI error:", error);
        await message.reply("Oops... the spirits are asleep. Try again later.");
    }
});


client.login(process.env.DISCORD_TOKEN);

// Keepalive webserver listener
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const timestamp = new Date().toISOString();
    console.log(`[.keepalive] Ping received at ${timestamp}`);
    res.send(`🤖 Magic 8 Ball is awake! Last ping: ${timestamp}`);
});

app.listen(3000, () => {
    console.log('🌐 Web server running at /');
});
