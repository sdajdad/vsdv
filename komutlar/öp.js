
const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('Kimi öpeceksin?');
	const embed = new Discord.MessageEmbed()
	.setAuthor ('')
	.setColor (``)
	.setDescription( message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.` )
	
	.setImage(`https://cdn.discordapp.com/attachments/722792685085392968/729761872969990194/s-a4a1e9410ede01b858eb32dc399d2897c89b24c7.gif`)
  message.channel.send(embed);
  message.react('617413726768988160')
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'öp',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'öp'
};
