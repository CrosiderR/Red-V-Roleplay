const { ActivityType, Client } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setPresence({
			activities: [{ name: `Red-V Roleplay`, type: ActivityType.Playing }],
			status: 'idle',
		  });
}};
