const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("Ping")
    .setDescription("Replies with pong"),
  async execute(interaction) {
    await interaction.reply("Pong");
  },
};

// ////For fully functional slash commands, there are three important pieces of code that need to be written. They are:

// The individual command files, containing their definitions and functionality.
// The command handler, which dynamically reads the files and executes the commands.
// The command deployment script, to register your slash commands with Discord so they appear in the interface.
// These steps can be done in any order, but all are required before the commands are fully functional.

// This page details how to complete Step 2. Make sure to also complete the other pages linked above!

// # ----------- Cai folder utility la de dinh nghia va function hoat dong cua slash command day la buoc 1
