module.exports = {
	name: 'help',
	description: 'Helpful stuff.',
	execute(message) {
		message.channel.send(`I've sent you a message ${message.author.username}, please check your DMs!`);
		message.author.send('A list of commands can be found by doing **/commands**.\n \n Want to add me to your server?\n https://discordapp.com/api/oauth2/authorize?client_id=379500653577371649&permissions=8&scope=bot \n \n Still need more help? Why not head on over to our community Discord? \n https://discord.gg/KcpEXTK'); 
	},
};
