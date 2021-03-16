const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.MessageEmbed()

             .setColor('')
              .setTitle(``)
             .setAuthor(`Dost•Bot`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(`<a:ne:735209403430600795>Moderasyon-Komutları`,`**${prefix}güvenlik** Güvenlik Kanalını Ayarlarsınız \n **${prefix}güvenlik-sıfırla** Güvenlik Kanalını Sıfırlarsın \n **${prefix}snipe** Silinen Mesajı Gösterir \n **${prefix}oto-rol** Oto-rol Sistemini Ayarlarsın \n **${prefix}oto-rol sıfırla** Oto Rolu Sıfırlarsınız \n **${prefix}kick** Kullanıcıyı Sunucdan Atarsınız \n **${prefix}kick-log** Kick Kanalını Ayarlarsınız \n **${prefix}yavaş-mod** Yazma Süresini Ayarlsınız \n  **${prefix}say** Sunucuyu Sayarsınız \n **${prefix}ban-say** Sunucdaki Banlı Sayısını Gösterir \n **${prefix}resimli-hg-bb** Resimli Hg-Bb Kanalını Açarsınız \n **${prefix}capslock-engel** capslock-engel Korumasını Açarsınzı \n **${prefix}mod-log** Mod-log Kanalını Ayarlarsınız`)
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
    name : 'yardım-moderasyon2',
    description : 'Komut Gösterir atar',
    usage : '-yardım'
}
