const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.MessageEmbed()

             .setColor('')
              .setTitle(``)
             .setAuthor(`Dost•Bot Davet`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField("Botu Eklemek İçin:", `<a:saaok:727443874322186271> [TIKLA](https://discord.com/oauth2/authorize?client_id=726827222828056627&scope=bot&permissions=805829694)`)
             .addField("Destek Sunucusu İçin:", `<a:saaok:727443874322186271> [TIKLA](https://discord.gg/FFppQny)`)
             .addField("Web Site:", `<a:saaok:727443874322186271> [TIKLA](https://dost-bot-.glitch.me/)`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
            
        return message.channel.send(yardim);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['y'],
    permLevel : 0
}

exports.help = {
    name : 'davet',
    description : '',
    usage : '-davet'
}
