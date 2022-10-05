import { SlashCommandBuilder } from '@discordjs/builders';
import config from './config';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const commands = [new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!')];

const rest = new REST({ version: '9' }).setToken(config.DISCORD_TOKEN);

rest
  .put(Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), { body: commands })
  .then(() => {
    console.log('Successfully registered application commands.');
  })
  .catch(console.error);
