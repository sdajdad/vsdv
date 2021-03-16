const Discord = require('discord.js');
const frenzydb = require("croxydb")
const frenzyms = require('parse-ms')
exports.run = async(client, message, args) => { 
let bakiye = await frenzydb.fetch(`Bakiye_FrenzyCode.${message.author.id}`)
let polisler = ['var', 'yok']
let frenzycode = polisler[Math.floor(Math.random() * polisler.length)];
let kazanlıacak = Math.floor(Math.random() * 578);
  
let fc = await frenzydb.fetch(`DateNowFCsoygun_${message.author.id}`)
if (fc !== null && 600000 - (Date.now() - fc) > 0) {
let time = frenzyms(600000 - (Date.now() - fc));


message.reply(`Başka bir soygun yapmadan önce ${time.minutes} dakika, ${time.seconds} saniye daha beklemenn gerek`) 
return
}
  
let frenzyuser = message.mentions.users.first()
if(!frenzyuser) return message.reply('Soymak istedşiğin kişiye etiketlemen gerek.')
if(frenzyuser.id === message.author.id) return message.reply('kendini soyamazsın')
if(frenzyuser.bot) return message.reply('botları soyamazsın')
  
let fcbakiye = await frenzydb.fetch(`Bakiye_FrenzyCode.${frenzyuser.id}`)
  

if(bakiye=== null || bakiye === undefined || !bakiye) {
frenzydb.add(`Bakiye_FrenzyCode.${message.author.id}`, -150) 
frenzydb.add(`Bakiye_FrenzyCode.${frenzyuser.id}`, 150) 
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 
  
message.reply(`Dostum b*ku yedin. soyacağın kişinin hiç parası yok ve sen onu soymak istedin bu yüzden de hemen o kişiyi uyandırdın. Seni polise vermemesi için ona 150 TL ödemen gerekti.
Senin paran 150 tl indirildi. Birdahakine çok dikattli ol! sende kalan **-para**`)
return
}

  
if(frenzycode === 'var') {
let mefta = bakiye / 3

frenzydb.add(`Bakiye_FrenzyCode.${message.author.id}`, -mefta)
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 

message.reply(` polislere yakalandın. Polisler rüşvet istyior yoksa seni hapse sokacaklar. O yüzden paranın 3de1(${mefta}) mefta oldu.`) 
return
}
 
if(frenzycode === 'yok') {

frenzydb.add(`Bakiye_FrenzyCode.${message.author.id}`, kazanlıacak)
frenzydb.add(`Bakiye_FrenzyCode.${frenzyuser.id}`,-kazanlıacak) 
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 

message.reply(`soygun başarılı tebrkler. Hesabına ${kazanlıacak} para gönderildi.`) 
return
}
};
exports.conf = {
  enabled: false,  
  guildOnly: false, 
  aliases: ['soygun-yap','çal'], 
  permLevel: 0
};

exports.help = {
  name: 'soygun'
};
