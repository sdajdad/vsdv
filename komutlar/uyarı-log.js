const Discord = require('discord.js')//Modülümüzü tanımladık
const db = require('croxydb')
exports.run = async(client, message) => {//Komutu çalıştıracak olan yer
let kanal = message.mentions.channels.first()
if(!kanal) return message.reply(`<a:dikkat:727446342514901082>Kanal etiketlemeyi unuttun!`)
   .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
db.set(`UyarıLogFrenzy_${message.guild.id}`,kanal.id)
message.channel.send(`Uyarı log ${kanal} olarak ayarlandım <a:tik:727414557508632577>`)//<a:tik:727414557508632577>
}; 
exports.conf = {
enabled: false,//kapalı?
guildOnly: false, //sunucu özel?
aliases: [], //diğer adlar
permLevel: 3 //yetki
};
exports.help = {
name: 'uyarı-log',//help komutu
description: 'Uyarı Log Kanalını Ayarlar.',//açıklaması
usage: ''//kullanımı
};
