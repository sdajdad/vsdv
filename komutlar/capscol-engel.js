const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('croxydb').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<a:dikkat:727446342514901082>Yeterli yetki, bulunmamakta!`)
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`<a:tik:727414557508632577>Capslock engelleme sistemi, kapatıldı!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`Capslock engelleme sistemi, aktif!<a:tik:727414557508632577>`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel'],
  permLevel: 3
};

exports.help = {
  name: 'capslock-engelleme',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};
