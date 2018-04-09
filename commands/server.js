module.exports = {
	name: 'server',
	description: 'Displays info about this server.',
	execute(message) {
		message.channel.send(`**Showing statistics for ${message.guild.name}**\nServer name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer ID: ${message.guild.id}\nCreated by: ${message.guild.owner} on ${message.guild.createdAt}\nAFK Channel: ${message.guild.afkChannel}\nAFK Timeout: ${message.guild.afkTimeout} seconds.`);
	},
};
