module.exports = {
	name: 'commands',
	description: 'Displays a list of commands.',
	execute(message) {
		message.author.send('**Venk Bot commands:**\n \n `/avatar` - Displays a URL to your profile picture.\n `/beep` - Boop.\n `/commands` - Displays this command list.\n `/help` - Information on how to setup/configure the bot as well as a support Discord link.\n `/ping` - Your current connection to the bot in miliseconds.\n `/prune` - Prunes up to 99 messages.\n `/whois` - Information about your account.'); 
	},
};
