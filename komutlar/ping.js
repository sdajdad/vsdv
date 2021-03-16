const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.MessageEmbed()

             .setColor('')
              .setTitle(`<a:mavisiren:727566555457650749>Anlık Geçikme Süresi<a:mavisiren:727566555457650749>`) 
             .setDescription(`Ping: ${client.ws.ping}ms`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
            
        return message.channel.send(yardim);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : [],
    permLevel : 0
}

exports.help = {
    name : 'ping',
    description : 'pingi gösterisi',
    usage : '-ping'
}
