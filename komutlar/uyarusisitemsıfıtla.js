const Discord = require('discord.js')//Modülümüzü tanımladık
const db = require('croxydb')
exports.run = async(client, message) => {//Komutu çalıştıracak olan yer
message.guild.members.cache.forEach(user => {
db.delete(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.user.id}`)
   .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
})
db.delete(`UyarıLogFrenzy_${message.guild.id}`)
message.channel.send('Uyarı sistemi sıfırlandım<a:tik:727414557508632577>')
};
exports.conf = {
enabled: false,//kapalı?
guildOnly: false, //sunucu özel?
aliases: [], //diğer adlar
permLevel: 3 //yetki
};
exports.help = {
name: 'uyarı-sistemi-sıfırla',//help komutu
description: 'Uyarı Sistemini Sıfırlarsın',//açıklaması
usage: ''//kullanımı
};
