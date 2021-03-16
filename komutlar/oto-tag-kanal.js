const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async (client, message, params, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:dikkat:727446342514901082>Otomatik tag komudunun log kanalını ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let otoTagkanal = message.mentions.channels.first();
     if (!otoTagkanal) return message.channel.send('<a:dikkat:727446342514901082>Otomatik tag komudunun log kanalını ayarlamak için bir kanal etiketlemeniz gerekli. `-oto-tag-kanal #kanal`')
     db.set(`ototagKanal_${message.guild.id}`, message.mentions.channels.first().id)
     let i = await db.fetch(`ototagKanal_${message.guild.id}`)
            	  	  const embed = new Discord.MessageEmbed()
  .setDescription(`<a:tik:727414557508632577>Ototag Kanalı Başarıyla Ayarlandı Kanal <#${i}> Olarak Ayarlandı!` + "\n\n Kapatmak için **`-oto-tag-kapat`** Yazabilirsiniz!")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3
};

exports.help = {
 name: 'oto-tag-kanal',
 description: 'neblm',
 usage: 'ototagkanal'
};
