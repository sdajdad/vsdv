const Discord = require(`discord.js`);
const db = require(`croxydb`)
const ayarlar = require ('../ayarlar.json')
var prefix = ayarlar.prefix;
exports.run = async(client, message, args) => {

const datas = await db.fetch(`erkekrol_${message.guild.id}`);
const datass = await db.fetch(`kızrol_${message.guild.id}`);
if(!datas) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${prefix}**erkek-rol @roleetiket olarak erkek rolünü aktif etmelisin!`).setFooter('Erkek rolü aktif değil', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''))
if(!datass) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${prefix}**kadın-rol @roleetiket olarak erkek rolünü aktif etmelisin!`).setFooter('Kadın rolü aktif değil', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''))

if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu komutu kullanamazsın.`)
let kişi = message.mentions.users.first()
if(!args[1]) {
    const data = await db.fetch(`kızrol_${message.author.id}.${message.guild.id}`)
    const emb = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
    .setDescription(`${message.author}, isimli kullanıcı ${data ? data : '0'} Kız kayıt etmiş.`)
    message.channel.send(emb) }
    //////////
    if(kişi) {
        const data = await db.fetch(`kızrol_${kişi.id}.${message.guild.id}`)
        const emb = new Discord.MessageEmbed()
        .setAuthor(kişi.username, kişi.avatarURL({dynamic: true}))
        .setDescription(`${kişi}, isimli kullanıcı ${data ? data : '0'} Kız kayıt etmiş.`)
        message.channel.send(emb) }
    ///////////////
if(!args[0]) {
const data = await db.fetch(`erkekrol_${message.author.id}.${message.guild.id}`)
const emb = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setDescription(`${message.author}, isimli kullanıcı ${data ? data : '0'} Erkek kayıt etmiş.`)
message.channel.send(emb) }
if(kişi) {
const data = await db.fetch(`erkekrol_${kişi.id}.${message.guild.id}`)
const emb = new Discord.MessageEmbed()
.setAuthor(kişi.username, kişi.avatarURL({dynamic: true}))
.setDescription(`${kişi}, isimli kullanıcı ${data ? data : '0'} Erkek kayıt etmiş.`)
message.channel.send(emb) }
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
};

exports.help = {
 name: 'kayıt-bilgi'
};