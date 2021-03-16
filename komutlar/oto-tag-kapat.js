const Discord = require('discord.js');
const db = require('croxydb')

exports.run = async (client, message, args, member) => {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:dikkat:727446342514901082>Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
  let otorol= db.fetch(`ototag_${message.guild.id}`)
  
  if(!otorol) {
      message.channel.send(`<a:dikkat:727446342514901082>Bu sunucuda ototag ayarlanmamış.`)
      return
    } 
    db.delete(`ototag_${message.guild.id}`)
    db.delete(`ototagKanal_${message.guild.id}`)
		  	  const embed = new Discord.MessageEmbed()
  .setDescription(`<a:tik:727414557508632577>Ototag Sistemi Başarıyla Kapatıldı` )
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ototag kapat'],
  permLevel: 3
};

exports.help = {
  name: 'oto-tag-kapat',
  description: 'nblm',
  usage: 'ototag'
};
