const { SlashCommandBuilder, User } = require("discord.js");
const { execute } = require("./ping");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("User")
    .setDescription("Provide information about user"),
  async execute(interaction) {
    await interaction.reply;
    "This command was run by " +
      // interaction.user is the object representing the User who ran the command
      // interaction.member is the GuildMember object, which represents the user in the specific guild
      interaction.user.username +
      ` who joined on ${interaction.member.joinedAt}.`;
  },
};
