module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
		message.channel.send("xms").then(msg => msg.edit(msg.createdTimestamp - message.createdTimestamp + "ms"));
	},
};
