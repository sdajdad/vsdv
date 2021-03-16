const Discord = require('discord.js'),
      db = require('croxydb'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
const sayı = args[1]
const kanal = message.mentions.channels.first()
if(!sayı || !kanal) return message.reply(`<a:dikkat:727446342514901082>Sayaç Sistemini Ayarlamak İçin Lütfen Sayı ve Kanal Belirtiniz. **Örn** : \`${prefix}sayaç #kanal 100\``)
if(isNaN(sayı)) return message.reply(`<a:dikkat:727446342514901082>Sayaç Sistemini Ayarlamak İçin Sayıyı Sadece Rakamlardan Yazmalısın!`)
  
await db.set(`SayaçSayı_${message.guild.id}`,sayı)  
await db.set(`SayaçKanal_${message.guild.id}`,kanal.id)  
  
message.reply(`<a:tik:727414557508632577>Sayaç Başarıyla Ayarlandı! Kapatmak için **${prefix}sayaç-sıfırla**`)
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sayaç',
  description: 'Sayaç Sistemi',
  usage: 'sayaç <sayı> <#kanal>'
};
