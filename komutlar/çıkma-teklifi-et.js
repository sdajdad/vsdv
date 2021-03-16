const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let teamtr = message.mentions.users.first();
    if (!teamtr) return message.channel.send('<a:dikkat:727446342514901082>**Çıkma Teklif Edeceğin Kişiyi Seçsene **');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti!:heart::heart:')
    .addField('Ne Cevap Vericen Acaba Bende Merak Ettim:laughing:', `Hadi Kabul Et Bence`)
    .addField('Teklif Eden Kişi :', `➽ @${message.author.username}`)
    .setFooter('Çıkma Teklifi |Dost•Bot')
    teamtr.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Çıkma Teklifi Ettin <a:tik:727414557508632577>')
    .setFooter('Çıkma Teklifi |Dost•Bot')
    message.channel.send(dmtamam);
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet",'teklifet','çte'],
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklifi-et',
  description: 'Özel komut.',
  usage: 'çıkma-teklifi-et'
};