const discord = require('discord.js')
const db = require('croxydb')

exports.run = async(client, message, args) => {

if (args[0] === 'sıfırla') {
let otorol = db.fetch(`otorol_${message.guild.id}`)
if (!otorol) return message.channel.send(`<a:dikkat:727446342514901082>Otorol Ayarlanmadığı İçin Sıfırlanamaz!`)
message.channel.send(`Otorol Başarıyla Sıfırlandı!<a:tik:727414557508632577>`)
  db.delete(`otorollog_${message.guild.id}`)
  db.delete(`otorol_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(`a:dikkat:727446342514901082>Sunucuya Gelenlere Verilecek Rolü Belirtmeyi Unuttun!`)

let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send(`a:dikkat:727446342514901082>Otorol Logunu AYarlamayı Unuttun!`)

db.set(`otorol_${message.guild.id}`, rol.id)
db.set(`otorollog_${message.guild.id}`, kanal.id)

message.channel.send(`<a:tik:727414557508632577>Otorol Başarıyla Ayarlandı ! `)  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['oto-rol'],
  permlevel: 0
}
exports.help = {
  name: 'otorol'
} //<a:dikkat:727446342514901082>   //<a:tik:727414557508632577>
