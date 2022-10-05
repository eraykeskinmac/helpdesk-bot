import { Client } from 'discord.js';
import config from './config';

export const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'],
});

client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(config.DISCORD_TOKEN);
