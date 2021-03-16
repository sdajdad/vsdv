const Discord = require('discord.js');
const db = require('croxydb')


exports.run = async (bot, message,args) => {
  
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
if (!args[0]) return message.channel.send('<a:dikkat:727446342514901082>**Güvenlik Sistemi açmak için -güvenlik #kanal**')
let logk = message.mentions.channels.first();  
  
let logkanal = await db.fetch(`guvenlik${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {   
    if(!logkanal) return message.channel.send(` Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`-güvenlik #kanal\``);
    
   db.delete(`guvenlik${message.guild.id}`)  
    
   message.channel.send(`<a:tik:727414557508632577>Güvenlik başarıyla kapatıldı.`);   
    
  
    return
  }  
  
if (!logk) return message.channel.send('Güvenlik kanalını bulamadım  Kullanım `-güvenlik #kanal`');  
 

   db.set(`guvenlik${message.guild.id}`, logk.id)

message.channel.send(`<a:tik:727414557508632577>Güvenlik başarıyla ${logk} olarak ayarlandı`);  

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlik'],
  permLevel: 4
};

module.exports.help = {
  name: 'güvenlik',
  description: 'güvenlik sağlar',
  usage: 'güvenlik'
};
   