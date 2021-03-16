const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('croxydb');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\
client.on("message", msg => {
  if (msg.content.includes(`<@${client.user.id}>`) || msg.content.includes(`<@!${client.user.id}>`) )
    msg.channel.send(`**Prefixim:** ${ayarlar.prefix} \n**Yardım İçin:** ${ayarlar.prefix}yardım`);
  }
);

////////hg-bb
client.on("guildMemberAdd", async(member) => {
    let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
    if(resimlihgbb) {
      const gözelkanal = member.guild.channels.cache.get(db.fetch(`giriş_${member.guild.id}`))
      if(gözelkanal) {
      let username = member.user.username;
        if(gözelkanal.type === "text") {
          const bg = await Jimp.read("");
          const userimg = await Jimp.read(member.user.displayAvatarURL({format: "png"}) ? member.user.displayAvatarURL({format: "png"}) : client.user.avatarURL());
          var font;
          if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
          else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
          else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
          await bg.print(font, 430, 170, member.user.tag);
          await userimg.resize(362, 362);
          await bg.composite(userimg, 43, 26).write("./img/"+ client.user.username + "Hosgeldin.png");
          setTimeout(function () {
            if(member.user.id === ayarlar.sahip){
              gözelkanal.send(new Discord.MessageAttachment("./img/" + client.user.username + "Hosgeldin.png"))
              gözelkanal.send("İşte Bak! Kurucum sunucuya giriş yaptı.")
            } else {    
              gözelkanal.send(new Discord.MessageAttachment("./img/" + client.user.username + "Hosgeldin.png"));
            }
          }, 1000);
          setTimeout(function () {
            fs.unlinkSync("./img/" + client.user.username + "Hosgeldin.png");
          }, 10000);
        }
      }
    }
})
client.on("guildMemberRemove", async(member) => {
    let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
    if(resimlihgbb) {
        const gözelkanal = member.guild.channels.cache.get(db.fetch(`giriş_${member.guild.id}`))
    if (gözelkanal) {
        let username = member.user.username;
        if (gözelkanal.type === "text") {            
            const bg = await Jimp.read("");
            const userimg = await Jimp.read(member.user.displayAvatarURL({format: "png"}) ? member.user.displayAvatarURL({format: "png"}) : client.user.avatarURL());
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ client.user.username + "Gorusuruz.png");
              setTimeout(function () {
                if(member.user.id === ayarlar.sahip){
                  gözelkanal.send(new Discord.MessageAttachment("./img/" + client.user.username + "Gorusuruz.png"))
                  gözelkanal.send("Kurucum sunucunuzdan ayrıldı..")
                } else {
                  gözelkanal.send(new Discord.MessageAttachment("./img/" + client.user.username + "Gorusuruz.png"));
                }
              }, 1000);
              setTimeout(function () {
                fs.unlinkSync("./img/" + client.user.username + "Gorusuruz.png");
              }, 10000);
        }
    }
  }
})

///////
////////Güvenlik
client.on("guildMemberAdd", async member => {
  let user = client.users.cache.get(member.id);
  let channels = client.channels.cache.get(db.fetch(`guvenlik${member.guild.id}`));
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    ""
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: "png"}));
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "sss-güvenlik.png"
  );
  channels.send(attachment);
});
////////sa-as aç
client.on("message", async (msg, member, guild) => {
    let i = await db.fetch(`saas_${msg.guild.id}`);
    if (i === "açık") {
      if (msg.content.toLowerCase() === "sa") {
        msg.reply("**Aleyküm Selam Hoşgeldin.**");
      }
    }
  });
  client.on("message", async (msg, member, guild) => {
    let i = await db.fetch(`saas_${msg.guild.id}`);
    if (i === "açık") {
      if (msg.content.toLowerCase() === "hb") {
        msg.reply("**Nasılsın ?**");
      }
    }
  });

/////////////

////////Küfür
client.on("message", async msg => {
  
  
 const i = await db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", msg => {
  
  
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
/////////////////

///////////////////////reklam

//////////////

//Eklendim
client.on("guildCreate", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const kanal = "723440152822939689" //Eklendim mesajının atılacağı kanal ID'sini giriniz.
const darkcode = new Discord.MessageEmbed()
.setTitle(`Yeni bir sunucuya eklendim`)
.setColor("BLACK")
.addField(`Sunucu Adı`, guild.name)
.addField(`Sunucu Sahibi`, owner.username + "#" +owner.discriminator)
.addField(`Sunucu Üye Sayısı`, guild.memberCount)
client.channels.cache.get(kanal).send({embed: darkcode}).catch(err => console.log("Kanala mesaj atamıyorum!"))
})
//
  //Darkcode
//Atıldım
client.on("guildDelete", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const kanal = "723440152822939689" //Atıldım mesajının atılacağı kanal ID'sini giriniz.
const darkcode = new Discord.MessageEmbed()
.setTitle(`Bir sunucudan atıldım`)
.setColor("BLACK")
.addField(`Sunucu Adı`, guild.name)
.addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)
.addField(`Sunucu Üye Sayısı`, guild.memberCount)
client.channels.cache.get(kanal).send({embed: darkcode}).catch(err => console.log("Kanala mesaj atamıyorum!"))
})


//////////////afk
client.on('message', async message => {
 
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
 if (message.content.includes(`${prefix}afk`)) return;
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.reply(``)
      db.delete(`afk_${message.author.id}`)
      message.member.setNickname("");
       message.reply(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
    }
    if (afkkullanıcı) return message.channel.send(`**${kullanıcı.tag}** \`${sebep}\` Sebebiyle Afk!`)
  }
  
  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.reply(`Artık AFK Değilsin<a:dikkat:727446342514901082>`)
      db.delete(`afk_${message.author.id}`)
      message.member.setNickname("");
    }
  }
  })
/////////////////////// Sayaç
client.on("guildMemberAdd", async member => {
    let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`)  
    let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`)  
    if(!sayı || !kanal) return
    let sonuç = sayı - member.guild.memberCount
    client.channels.cache.get(kanal).send(`<a:geld:735801155019341865>${member}, Aramıza katıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı Şuan **${member.guild.memberCount}** Kişiyiz`)
    return
    })
    client.on("guildMemberRemove", async member => {
    let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`)  
    let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`)  
    if(!sayı || !kanal) return
    let sonuç = sayı - member.guild.memberCount
      
    client.channels.cache.get(kanal).send(`<a:gt:735801185256079380>${member}, Aramızdan ayrıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı Şuan **${member.guild.memberCount}** Kişiyiz`)
    return
    })
///////////////////oto-tag
client.on('guildMemberAdd', async (member, guild, message) => {

    let ototag = await db.fetch(`ototag_${member.guild.id}`);
    let kanal = await db.fetch(`ototagKanal_${member.guild.id}`)
    let kayıt = await db.fetch(`kayıt_${member.guild.id}`)
    
    if (!ototag) return
    try {
    member.setNickname(`${ototag} ${member.user.username}`)
    if (!kanal) return
    member.guild.channels.cache.get(kanal).send(`<a:tik:727414557508632577>Sunucuya Yeni Gelen ${member}'a [**${ototag}**] tagını verdim.`)
    } catch(e) {
    }
    
  });//<a:tik:727414557508632577>
////////////Snipe
client.on('messageDelete', message => { //<a:tik:727414557508632577>
    const db = require("croxydb")
    db.set(`snipe.mesaj.${message.guild.id}`, message.content)
    db.set(`snipe.id.${message.guild.id}`, message.author.id)
  })

////////oto-rol
client.on("guildMemberAdd", async member => {
  let rol = db.fetch(`otorol_${member.guild.id}`)
  let kanal = db.fetch(`otorollog_${member.guild.id}`)

if (!rol) return;

member.roles.add(rol)

client.channels.cache.get(kanal).send(`${member} Adlı Kullanıcıya Başarılyla Rolu Verildi<a:tik:727414557508632577>`)
})
////Yavaş mod
client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("croxydb");
  const ms = require("parse-ms");
  let zaman = db.fetch(`${msg.guild.id}.slowmode`);
  if (zaman === undefined) zaman = 0;
  let timeout = zaman;
  let dakdest = await db.fetch(`slowmodee_${msg.author.id}`);

  if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
    let time = ms(timeout - (Date.now() - dakdest));
    msg.delete();
    msg.channel
      .send("**Bu kanalda yavaş mod açık mesaj atmadan beklemen gerek!**")
      .then(message => message.delete(2000));
  } else {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (msg.content.length > 0) {
        db.set(`slowmodee_${msg.author.id}`, Date.now());
      }
    }
  }
});

////////caps
  client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});
///////mod-log
client.on("messageDelete", async (message) => {
    if (message.author.bot || message.channel.type == "dm") return;
    let log = message.guild.channels.cache.get(await db.fetch(`log_${message.guild.id}`));
    if (!log) return;
    const embed = new Discord.MessageEmbed()
      .setTitle(message.author.username + " | Mesaj Silindi")
      .addField("Kullanıcı: ", message.author)
      .addField("Kanal: ", message.channel)
      .addField("Mesaj: ", "​" + message.content + "​")
    log.send(embed)
  })

client.on("messageUpdate", async (oldMessage, newMessage) => {
    let modlog = await db.fetch(`log_${oldMessage.guild.id}`);
    if (!modlog) return;
    let embed = new Discord.MessageEmbed()
    .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())
    .addField("**Eylem**", "Mesaj Düzenleme")
    .addField("**Mesajın sahibi**", `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`)
    .addField("**Eski Mesajı**", `${oldMessage.content}`)
    .addField("**Yeni Mesajı**", `${newMessage.content}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`, oldMessage.guild.iconURL())
    .setThumbnail(oldMessage.guild.iconURL)
    client.channels.cache.get(modlog).send(embed)
  });

client.on("channelCreate", async(channel) => {
    let modlog = await db.fetch(`log_${channel.guild.id}`);
      if (!modlog) return;
      const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
      let kanal;
      if (channel.type === "text") kanal = `<#${channel.id}>`
      if (channel.type === "voice") kanal = `\`${channel.name}\``
      let embed = new Discord.MessageEmbed()
      .setAuthor(entry.executor.username, entry.executor.avatarURL())
      .addField("**Eylem**", "Kanal Oluşturma")
      .addField("**Kanalı Oluşturan Kişi**", `<@${entry.executor.id}>`)
      .addField("**Oluşturduğu Kanal**", `${kanal}`)
      .setTimestamp()
      .setColor("RANDOM")
      .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())
      .setThumbnail(channel.guild.iconUR)
      client.channels.cache.get(modlog).send(embed)
      })

client.on("channelDelete", async(channel) => {
    let modlog = await db.fetch(`log_${channel.guild.id}`);
      if (!modlog) return;
      const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
      let embed = new Discord.MessageEmbed()
      .setAuthor(entry.executor.username, entry.executor.avatarURL())
      .addField("**Eylem**", "Kanal Silme")
      .addField("**Kanalı Silen Kişi**", `<@${entry.executor.id}>`)
      .addField("**Silinen Kanal**", `\`${channel.name}\``)
      .setTimestamp()
      .setColor("RANDOM")
      .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())
      .setThumbnail(channel.guild.iconURL)
      client.channels.cache.get(modlog).send(embed)
      })
client.on("roleCreate", async(role) => {
let modlog = await db.fetch(`log_${role.guild.id}`);
  if (!modlog) return;
  const entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL())
  .addField("**Eylem**", "Rol Oluşturma")
  .addField("**Rolü oluşturan kişi**", `<@${entry.executor.id}>`)
  .addField("**Oluşturulan rol**", `\`${role.name}\` **=** \`${role.id}\``)
  .setTimestamp()
  .setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)
  .setColor("RANDOM")
  .setThumbnail(role.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
  })

client.on("roleDelete", async(role) => {
let modlog = await db.fetch(`log_${role.guild.id}`);
  if (!modlog) return;
  const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL())
  .addField("**Eylem**", "Rol Silme")
  .addField("**Rolü silen kişi**", `<@${entry.executor.id}>`)
  .addField("**Silinen rol**", `\`${role.name}\` **=** \`${role.id}\``)
  .setTimestamp()
  .setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)
  .setColor("RANDOM")
  .setThumbnail(role.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
  })
client.on("emojiCreate", async(emoji) => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);
  if (!modlog) return;
  const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL())
  .addField("**Eylem**", "Emoji Oluşturma")
  .addField("**Emojiyi oluşturan kişi**", `<@${entry.executor.id}>`)
  .addField("**Oluşturulan emoji**", `${emoji} - İsmi: \`${emoji.name}\``)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)
  .setThumbnail(emoji.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})
  client.on("emojiDelete", async(emoji) => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);
  if (!modlog) return;
  const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL())
  .addField("**Eylem**", "Emoji Silme")
  .addField("**Emojiyi silen kişi**", `<@${entry.executor.id}>`)
  .addField("**Silinen emoji**", `${emoji}`)
  .setTimestamp()
  .setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)
  .setColor("RANDOM")
  .setThumbnail(emoji.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("emojiUpdate", async(oldEmoji, newEmoji) => {
  let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);
  if (!modlog) return;
  const entry = await oldEmoji.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL())
  .addField("**Eylem**", "Emoji Güncelleme")
  .addField("**Emojiyi güncelleyen kişi**", `<@${entry.executor.id}>`)
  .addField("**Güncellenmeden önceki emoji**", `${oldEmoji} - İsmi: \`${oldEmoji.name}\``)
  .addField("**Güncellendikten sonraki emoji**", `${newEmoji} - İsmi: \`${newEmoji.name}\``)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`, oldEmoji.guild.iconURL)
  .setThumbnail(oldEmoji.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("guildBanAdd", async(guild, user) => {
let modlog = await db.fetch(`log_${guild.id}`);
  if (!modlog) return;
  const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_ADD"}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL())
  .addField("**Eylem**", "Yasaklama")
  .addField("**Kullanıcıyı yasaklayan yetkili**", `<@${entry.executor.id}>`)
  .addField("**Yasaklanan kullanıcı**", `**${user.tag}** - ${user.id}`)
  .addField("**Yasaklanma sebebi**", `${entry.reason}`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)
  .setThumbnail(guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("guildBanRemove", async(guild, user) => {
let modlog = await db.fetch(`log_${guild.id}`);
  if (!modlog) return;
  const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_REMOVE"}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
  .setAuthor(entry.executor.username, entry.executor.avatarURL())
  .addField("**Eylem**", "Yasak kaldırma")
  .addField("**Yasağı kaldıran yetkili**", `<@${entry.executor.id}>`)
  .addField("**Yasağı kaldırılan kullanıcı**", `**${user.tag}** - ${user.id}`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)
  .setThumbnail(guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})
////////
///////////////////tops

