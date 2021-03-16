const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.MessageEmbed()

             .setColor('')
             .setAuthor(`Dost•Bot`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(`<a:s_:735203087957885050>Eğlence-Komutları`, `**${prefix}cs-kasa-aç** Cs-Go Kasa Açarsınız \n **${prefix}öp** Birini Öpersin \n **${prefix}kralol** Kral Olursun \n **${prefix}kimlik** Kimlik Oluşturursun \n **${prefix}kaçcm** Malafatını Ölçer \n **${prefix}zula-deste-aç** Zula Deste Açarsın. \n **${prefix}fbi** Fbi Gelir \n **${prefix}çıkma-teklifi-et** Çıkma Teklifi Edersin \n **${prefix}zula-kasa-aç** Zula Kasası Açarsın \n **${prefix}korona-ol** Korona Olursunuz \n **${prefix}tokat-at** Bir Kullanıcıya Tokat Atarsınız \n **${prefix}yumruk-at** Bir Kullanıcıya Yumruk Atarsınız \n**${prefix}efkar** Efkarını Ölçer`) 
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
    name : 'yardım-eğlence',
    description : 'Komut Gösterir atar',
    usage : '-yardım'
}
