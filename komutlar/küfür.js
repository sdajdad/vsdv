const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send(`<a:tik:727414557508632577>Başarılı Bir Şekilde Akif Edildi.`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send(`<a:tik:727414557508632577>Başarılı Bir Şekilde Kapatıldı Edildi`)
return
}
  message.channel.send('<a:dikkat:727446342514901082>Lüten `aç` yada `kapat` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};
