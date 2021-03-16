const Discord = require('discord.js');
const db = require('croxydb')

exports.run = async (client, message, args, member) => {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:dikkat:727446342514901082>Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
     let mesaj = args.join(' ');
     if (!mesaj) return message.channel.send("<a:dikkat:727446342514901082>Ototag ayarlamak için bir değer belirtmelisiniz. `-oto-tag || - `"); 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
      await db.set(`ototag_${message.guild.id}`, mesaj)
	  	  const embed = new Discord.MessageEmbed()
        
  .setDescription(`<a:tik:727414557508632577>Ototag Sistemi Başarıyla Açıldı Tag \`${mesaj}\` Olarak Ayarlandı!` + "\n\n Kapatmak için **`-oto-tag-kapat`** Yazabilirsiniz! Ototag Kanal Ayarlamyı Unutmayın! **Not** Botun Rolu En üste olması lazım")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'oto-tag',
  description: 'nblm',
  usage: 'ototag'
};
