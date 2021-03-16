const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
const DBL = require("dblapi.js");
  const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NDk4NDI3MzEyNzI3NjU0NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3MzIyNTA1fQ.xuWin5jgs2DEbcgW2yKXi5dinkOxU_GhKIMH-jDPJnU", client);
dbl.hasVoted(message.author.id).then(async voted => {
    if (voted) {
  
        const yardim = new Discord.MessageEmbed()
              .setColor('')
              .setTitle(`Sunucu Kur Menüsü`)
             .setAuthor(`Dost•Bot`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(`<a:normal_sunucu:788676453318918194> **${prefix}sunucu-kur-normal**`,`Normal Sunucusu Kurarsın`)
             .addField(`<a:gif_sunucu:788679586456141824> **${prefix}sunucu-kur-gif**`,`Gif Sunucusu Kurarsın`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
            
        return message.channel.send(yardim);
  } else{
const oyver = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true,format: "gif",format: "png",format: "jpg"}))
.setDescription("Merhaba dostum!  [TIKLA](https://top.gg/bot/754984273127276544/vote) Likten botumuza oy vererek komutu kullanabilirsin! Bu zorunluluğu büyümemiz için koyduk, iyi günler.")
message.channel.send(oyver);
return;
}
})
};

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : [],
    permLevel : 0
};

exports.help = {
    name : 'sunucu-kur',
    description : 'Komut Gösterir atar',
    usage : ''
}