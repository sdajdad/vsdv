const Discord = require('discord.js'),
      db = require('croxydb'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
let sayı = await db.fetch(`SayaçSayı_${message.guild.id}`)  
let kanal = await db.fetch(`SayaçKanal_${message.guild.id}`)  
 
if(!sayı && !kanal) return message.reply(`<a:dikkat:727446342514901082>Sayaç Sistemi Zaten Ayarlı Değil! **Ayarlamak İçin** : \`${prefix}sayaç #kanal 100\``)
db.delete(`SayaçSayı_${message.guild.id}`) 
db.delete(`SayaçKanal_${message.guild.id}`) 
message.reply(`<a:tik:727414557508632577>Sayaç Başarıyla Sıfırlandı`)
};
exports.conf = {//<a:dikkat:727446342514901082>
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sayaç-sıfırla',
  description: 'Sayaç Sistemi',
  usage: 'sayaç-sıfırla'
};
