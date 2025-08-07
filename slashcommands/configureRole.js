if (interaction.isButton()) {
  const roleId = await client.roleConfig.get(interaction.customId); // Fetch role ID
  if (roleId) {
    const role = interaction.guild.roles.cache.get(roleId);
    if (role) {
      await interaction.member.roles.add(role);
      await interaction.reply({
        content: `You've been assigned the role **${role.name}**.`,
        ephemeral: true
      });
    } else {
      await interaction.reply({
        content: `Role not found.`,
        ephemeral: true
      });
    }
  }
}
