const { SlashCommandBuilder } = require('discord.js');
const ButtonRoleConfig = require('../models/buttonRoleConfig');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('configure-role')
    .setDescription('Link a button ID to a role for this server.')
    .addStringOption(option =>
      option.setName('buttonid')
        .setDescription('Custom ID of the button')
        .setRequired(true))
    .addRoleOption(option =>
      option.setName('role')
        .setDescription('Role to assign when button is clicked')
        .setRequired(true)),

  async execute(interaction) {
    const buttonId = interaction.options.getString('buttonid');
    const role = interaction.options.getRole('role');
    const guildId = interaction.guild.id;

    try {
      await ButtonRoleConfig.upsert({
        buttonId,
        roleId: role.id,
        guildId
      });

      await interaction.reply({
        content: `Button ID \`${buttonId}\` is now linked to role **${role.name}**.`,
        ephemeral: true
      });
    } catch (error) {
      console.error('Error saving button-role config:', error);
      await interaction.reply({
        content: 'Failed to save configuration. Please check logs.',
        ephemeral: true
      });
    }
  }
};
