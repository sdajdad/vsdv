const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    .setColor("")
    .setFooter(client.user.tag, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
    .setTitle(`Dost•Bot İstatistik`)
    .addField(
      "<a:56:735370198630137857> **Botun Ana Sahibi:**", "<@699268065472413779>",
      false
    )
  .addField("<a:56:735370198630137857> **Botun Yöneticisi:**", "<@736206338014838884>", false)
    .addField(
      "<a:56:735370198630137857> **Hizmet Verdiği Kullanıcı Sayısı:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "<a:56:735370198630137857> **Hizmet Verdiği Sunucu Sayısı:**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "<a:56:735370198630137857> **Hizmet Verdiği Kanal Sayısı:**",
      client.channels.cache.size.toLocaleString(),
      false
    )
    .addField("<a:56:735370198630137857> **Botun Discord.JS sürüm:**", "v" + Discord.version, false)
    .addField("<a:56:735370198630137857> **Botun Node.JS sürüm:**", `${process.version}`, false)
    .addField("<a:56:735370198630137857> **Ping:**", client.ws.ping + " ms", false)
  return message.channel.send(msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'i'],
    permLevel: 0
  };
   
  exports.help = {
    name: "istatistik",
    description: "Bot i",
    usage: "istatistik"
  };