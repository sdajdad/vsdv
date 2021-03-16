const Discord = require('discord.js');
const db = require('croxydb');
exports.run = async(client, message, args) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('<a:dikkat:727446342514901082>ick log Kanalını Belirtmelisin')

    db.set(`kicklog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`Kick log kanalı <#${kanal.id}> Olarak ayarlandı!`)
  
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "kick-log",
        description: "kick kanal.ayarlar",
        usage: "",
}