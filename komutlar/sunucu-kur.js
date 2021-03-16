const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require("croxydb")
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, params) => {


          let prefix =  ayarlar.prefix

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olman gerekli.")
  message.channel.send("Sunucu kurulum işlemini onaylıyorsanız `evet` eğer onaylamıyorsanız `hayır` olarak belirtiniz.").then(() => {
  
 const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content === 'hayır') {
        return message.reply("İşlem iptal edildi.");
      }});
  
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 15000
    }).then((collected) => {
      if (collected.first().content === 'evet') {
      message.guild.channels.cache.filter(u => {
        u.delete()
     })
                    let every = message.guild.roles.cache.find(r => r.name === '@everyone')

    message.author.send(`${message.author}, Merhaba! ben ${client.user.username} Sunucunu Kurcam **${message.guild.name}** adlı sunucuyu şuan kuruyorum.`)
                                message.guild.channels.create('Sunucu Hakkında', { type: 'category', reason: 'Bilgi Kanalları!' }).then(kategori => {

    message.guild.channels.create("📌kurallar", "text").then(kurallar => {
                    kurallar.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("📢duyurular", "text").then(duyurular => {
                          duyurular.createOverwrite(every, {
        SEND_MESSAGES: false
      })
message.guild.channels.create("🎉çekiliş", "text").then(cekilis => {
                    cekilis.createOverwrite(every, {
        SEND_MESSAGES: false
      })
message.guild.channels.create("📣boost", "text").then(boost => {
                    boost.createOverwrite(every, {
        SEND_MESSAGES: false
      })
      kurallar.setParent(kategori.id)
cekilis.setParent(kategori.id) 
boost.setParent(kategori.id) 
      duyurular.setParent(kategori.id)  

  
                          message.guild.channels.create('Topluluk', { type: 'category', reason: 'Topluluk Kanalları!' }).then(kategor => {

  message.guild.channels.create("💬chat", "text").then(sohbet => {
  message.guild.channels.create('🔌bot-komut', "text").then(medya => {
  message.guild.channels.create('📷foto-chat', "text").then(bot => {
    sohbet.setParent(kategor.id)
    medya.setParent(kategor.id)
    bot.setParent(kategor.id)
      

 
                      message.guild.channels.create('🔊Genel Sohbet', { type: 'category', reason: 'Ses Kanalları!' }).then(kategori => {

  message.guild.channels.create("🔊 Genel Sohbet 1", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emirhan => {
      message.guild.channels.create("🔊 Genel Sohbet 2", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emirhan2 => {
  message.guild.channels.create("🔊 Genel Sohbet 3", { type: 'voice', reason: 'Bilgi kanalı!' }).then(codare3 => {
  message.guild.channels.create("🔊 Genel Sohbet 4", { type: 'voice', reason: 'Bilgi kanalı!' }).then(codare62 => {
      message.guild.channels.create("🔊 Genel Sohbet 5", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emmmirrrhaaann=> {
    emirhan.setParent(kategori.id)  
        emirhan2.setParent(kategori.id)  
    codare3.setParent(kategori.id)  
    codare62.setParent(kategori.id)  
    emmmirrrhaaann.setParent(kategori.id)

message.guild.channels.create('🎶Müzik', { type: 'category', reason: 'Ses Kanalları!' }).then(Kateroti => {

     message.guild.channels.create('🎶 Müzik Odası 1', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music1 => {
      message.guild.channels.create('🎶 Müzik Odası 2', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music2 => {
message.guild.channels.create('🎶 Müzik Odası 3', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music3 => {
message.guild.channels.create('🎶 Müzik Odası 4', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music4 => {
message.guild.channels.create('🎶 Müzik Odası 5', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music5 => {

music1.setParent(Kateroti.id)
music2.setParent(Kateroti.id)
music3.setParent(Kateroti.id)
music4.setParent(Kateroti.id)
music5.setParent(Kateroti.id)

message.guild.channels.create('💤AFK', { type: 'category', reason: 'Ses Kanalları!' }).then(afkab => {
message.guild.channels.create('💤AFK Odası', { type: 'voice', reason: 'Bilgi kanalı!' }).then(afkk => {
afkk.setParent(afkab.id)

})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})


      }

})})

                    .catch(error => {
                    message.channel.send(`Bir hata oluştu Lütfen Destek Sunucusuna Gelip Bunu Bize Bildir!`);
                    console.error('Hata:', error);
                
                  });



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'sunucu-kur-normal',
  description: 'Basit bir sunucu kurar.',
  usage: 'sunucukur'
};