const discord = require('discord.js');
const db = require('croxydb') 
exports.run = async (client, message, args) => {
 
  let user = message.author
  let sebep = args.join(" ")
 
  if (!sebep) return message.channel.send(`<a:dikkat:727446342514901082>**Lutfen Bir Sebep Gir**`)
 message.delete()
  db.set(`afk_${user.id}`, sebep)
  const embed = new discord.MessageEmbed()
  .setThumbnail(message.author.displayAvatarURL())
  .addField(`Artık **${sebep}** Sebeiyle`, `AFK'sın<a:tik:727414557508632577>`)
   .setFooter(`Afk Olan Kullanıcı ${message.author.username}`, message.author.avatarURL())
  message.channel.send(embed)

message.member.setNickname(`afk ${message.author.username}`);
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'afk'
}
