const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('croxydb');
const svo = require('svo-client');

exports.run = async (client, message, params) => {
    if (!message.guild) return message.author.sendEmbed('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
  const tah = await svo.tarih(message.guild.createdAt)
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor("")
    .setTimestamp()
      .setThumbnail(message.guild.iconURL())
    .setAuthor(`Sunucu Bilgileri`)
    .addField('Ad', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('Doğrulama seviyesi:', message.guild.verificationLevel)
    .addField('Bölge', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField('Sahibi:', message.guild.owner)
    .addField('Kanal sayısı:', message.guild.channels.cache.size)
    .addField('Kanallar:', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} sesli / ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} metin`)
    .addField('Oluşturulma tarihi:', tah)
    return message.channel.send(sunucubilgi);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-bilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};