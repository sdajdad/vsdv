const Discord = require('discord.js');
  
exports.run = async (client, message, args, ss) => {

  let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
  var kate = ss.toString().replace(/ /g, " ") 
var ts = kate.match(/([0-9])/g) 
kate = kate.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
kate = kate.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:say0:778573076366753794>`,
    '1': `<a:say1:778573062676414474>`,
    '2': `<a:say2:778573119920930826>`,
    '3': `<a:say3:778573080863047681>`,
    '4': `<a:say4:778573119441862667>`,                       
    '5': `<a:say5:778573119622610954>`,
    '6': `<a:say6:778573119996690453>`,
    '7': `<a:say7:778573117131325441>`,
    '8': `<a:say8:778573119722881044>`,
    '9': `<a:say9:778573119911624735>`}[d];
 }) 
}


  var toplamüye = message.guild.members.cache.size.toString().replace(/ /g, " ") 
var ts = toplamüye.match(/([0-9])/g) 
toplamüye = toplamüye.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
toplamüye = toplamüye.replace(/([0-9])/g, d => { 
return { 
  '0': `<a:say0:778573076366753794>`,
  '1': `<a:say1:778573062676414474>`,
  '2': `<a:say2:778573119920930826>`,
  '3': `<a:say3:778573080863047681>`,
  '4': `<a:say4:778573119441862667>`,                       
  '5': `<a:say5:778573119622610954>`,
  '6': `<a:say6:778573119996690453>`,
  '7': `<a:say7:778573117131325441>`,
  '8': `<a:say8:778573119722881044>`,
  '9': `<a:say9:778573119911624735>`}[d];
 }) 
}




 var aktifüye = message.guild.members.cache.filter(a => a.presence.status !== 'offline').size.toString().replace(/ /g, " ") 
var ts = aktifüye.match(/([0-9])/g) 
aktifüye = aktifüye.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
aktifüye = aktifüye.replace(/([0-9])/g, d => { 
return { 
  '0': `<a:say0:778573076366753794>`,
  '1': `<a:say1:778573062676414474>`,
  '2': `<a:say2:778573119920930826>`,
  '3': `<a:say3:778573080863047681>`,
  '4': `<a:say4:778573119441862667>`,                       
  '5': `<a:say5:778573119622610954>`,
  '6': `<a:say6:778573119996690453>`,
  '7': `<a:say7:778573117131325441>`,
  '8': `<a:say8:778573119722881044>`,
  '9': `<a:say9:778573119911624735>`}[d];
 }) 
}


        var sesaktif = message.guild.members.cache.filter(a => a.voice.channel).size.toString().replace(/ /g, " ") 
var ts = sesaktif.match(/([0-9])/g) 
sesaktif = sesaktif.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
sesaktif = sesaktif.replace(/([0-9])/g, d => { 
return { 
  '0': `<a:say0:778573076366753794>`,
  '1': `<a:say1:778573062676414474>`,
  '2': `<a:say2:778573119920930826>`,
  '3': `<a:say3:778573080863047681>`,
  '4': `<a:say4:778573119441862667>`,                       
  '5': `<a:say5:778573119622610954>`,
  '6': `<a:say6:778573119996690453>`,
  '7': `<a:say7:778573117131325441>`,
  '8': `<a:say8:778573119722881044>`,
  '9': `<a:say9:778573119911624735>`}[d];
 }) 
}


            var boost = message.guild.premiumSubscriptionCount.toString().replace(/ /g, " ") 
            var ts = boost.match(/([0-9])/g) 
            boost = boost.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 
            
            if(ts) { 
            boost = boost.replace(/([0-9])/g, d => { 
            return { 
              '0': `<a:say0:778573076366753794>`,
              '1': `<a:say1:778573062676414474>`,
              '2': `<a:say2:778573119920930826>`,
              '3': `<a:say3:778573080863047681>`,
              '4': `<a:say4:778573119441862667>`,                       
              '5': `<a:say5:778573119622610954>`,
              '6': `<a:say6:778573119996690453>`,
              '7': `<a:say7:778573117131325441>`,
              '8': `<a:say8:778573119722881044>`,
              '9': `<a:say9:778573119911624735>`}[d];
             })
            }

               const anan = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true,format: "gif",format: "png",format: "jpg"}))
.setDescription(`<:toplulykkkkkk:784412869500338246> **Toplam Üye** ${toplamüye} \n <a:onlineee:784404993637220353> **Aktif Üye** ${aktifüye} \n <:ses:787963524076404746> **Seslide ki Üye Sayısı** ${sesaktif} \n <:botamq:785872484917313546> **Sunucudaki Bot Sayısı** ${botlar} \n <a:boostab61:784405065054027806> **Boost Sayısı** ${boost}`)
.setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg"}))
message.channel.send(anan)
            
}
;

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: "Bot Sahibine Özel Komut."
};
