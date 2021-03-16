
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  var oyun = [
    "🎉Dost•Bot 31.145 Kullanıcı | 53 Sunucu🎉",
    "-yardım",
    "💎Gelişmiş Küfür Sistemi💎",
    "💎Gelişmiş Reklam Sistemi💎",
    "💎Gelişmiş Uyarı Sistemi💎",
    "💎Dost•Bot İyi Eğlenceler Diler💎",
    "💎Sitemiz https://dost-bot-.glitch.me/💎",
    "",
    ""

  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};

