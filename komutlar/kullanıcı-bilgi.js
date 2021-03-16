const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = (client, message, args) => {// can ♡ b#1010

let mention = message.author;
if(message.mentions.members.first()) mention = message.mentions.members.first().user;
let mentionMember = message.guild.members.cache.get(mention.id);

let slm = {
  web: 'İnternet Tarayıcısı <a:dunya_:784405135354626069>',
  desktop: 'Bilgisayar :computer:',
  mobile: 'Mobil <:tel:788724672455639060>'
}
let oyunlar = [];
mention.presence.activities.forEach(slm => {
if(slm.type === 'CUSTOM_STATUS') {
oyunlar.push(`${slm.emoji ? slm.emoji : ''} ${slm.state}`);
} else {
oyunlar.push(`**${slm.name}** ${slm.type.replace('PLAYING', 'oynuyor').replace('STREAMING', 'yayınlıyor').replace('LISTENING', 'dinliyor').replace('WATCHING', 'izliyor')}`)
}});


let rozetler = false;
if(mention.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};

let mentionFlags = mention.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', 'Bravery <:asd:788720944532160522>')  
.replace('HOUSE_BRILLIANCE', 'Brilliance <:brlinc:788720933023252490>')
.replace('HOUSE_BALANCE', 'Balance <:balence:788720956272672808>')
.replace('VERIFIED_DEVELOPER', '1. Dönemde Doğrulanmış Bot Geliştiricisi <:rozetab:788721392740859904>')
.replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
.replace('PARTNERED_SERVER_OWNER', 'Discord Partner')
.replace('HYPESQUAD_EVENTS', 'HypeSquad Events')
.replace('BUGHUNTER_LEVEL_1', 'Bug Avcısı 1. Lvl')
.replace('EARLY_SUPPORTER', 'Erken Destekçi')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
.replace('VERIFIED_BOT', 'Onaylı Bot<:onaylab:788722886243778571>');
let sa;
if(mention.bot) {
sa = 'Bilinmiyor.'
} else {
sa = slm[Object.keys(mention.presence.clientStatus)[0]];
};
const embed = new Discord.MessageEmbed()
.setAuthor(mention.tag, mention.avatarURL({dynamic: true}))
.setThumbnail(mention.avatarURL({dynamic: true}))
.addField('Durum', mention.presence.status.replace('online', 'Çevrimiçi <a:onlineee:784404993637220353>').replace('idle', 'Boşta <a:idleeee:784404999022313484>').replace('dnd', 'Rahatsız Etmeyin <a:dndd:784404995118071818>').replace('offline', 'Çevrimdışı <a:oflinee:784404997625741353>'), false)
.addField('İstemci Durumu', sa, false)
.addField('Ad', mention.username+` (${mention})`, false)
.addField('Takma Ad', mentionMember.displayName, false)
.addField('Katılma Tarihi', moment(mentionMember.joinedAt).format('D MMMM YYYY'), false)
.addField('Kayıt Tarihi', moment(mention.createdAt).format('D MMMM YYYY'), false)
.addField('Aktivite', oyunlar.join('\n') ? oyunlar.join('\n') : 'Hiç yok.')
.addField('Roller', mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') : 'Hiç yok.')
.addField('Rozetler', `${rozetler ? mentionFlags : 'Hiç yok.'}`)
.addField('Kullanıcı Kimliği', mention.id)
.setFooter(mention.username, mention.avatarURL({dynamic: true}))
.setTimestamp();

message.channel.send(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil'],
  permLevel: 0
};
 
exports.help = {
  name: 'ui'
};// codare ♥