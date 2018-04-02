const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, welcome_msg, default_role } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Bot has successfully been loaded, enjoy!');
        client.user.setActivity('Venk Bot | /help')
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
        if (message.channel.type === "dm") return; // Ignore DM channels.
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on("message", (message) => {
  if (message.content.startsWith("/config")) {
    message.channel.send("Test."); // Coming soon!
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', (welcome_msg));
  if (!channel) return;
  channel.send(`:airplane: ${member} has joined the Discord!`);
  member.addRole(member.guild.roles.find('name', (default_role)))
});


client.login(token);