const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
client.on('ready', () => {
     client.user.setActivity("$help | V 1.1",{type: 'WATCHING'});

});


// Help
client.on("message", message => {
  if (message.content === "$help") {
   const HelpEmbed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setThumbnail(message.author.avatarURL)
       .setDescription(`
       __** برودكاست بوت | Version 1.1 **__
       **
      برودكاست مطور : ${prefix}bc
      دعوة البوت لسيرفرك : ${prefix}invite
      معلومات عن السيرفر : ${prefix}server
      برودكاست للأونلاين فقط : ${prefix}bco
      يعرض لك عدد المتبندين من سيرفرك : ${prefix}banned
      رابط سيرفر الدعم الفني : https://discord.gg/GSgJBgs
      **
 `)
 message.channel.send(HelpEmbed);
}
});

// Online
client.on("message", message => {

            if (message.content.startsWith(prefix + "bco")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين :white_check_mark: `);
 message.delete();
}
});



// Ultimate
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**:sparkles: هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(3 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📖' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '🖊' && user.id === message.author.id;

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<mention>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let NormalRep = args.replace('<server>' ,message.guild.name).replace('<mention>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});

// Support
client.on('message', msg => {
  if(msg.content.startsWith(prefix + "support")) {
    const SupportEmbed = new Discord.RichEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setThumbnail(msg.author.avatarURL)
    .setTitle('**Click Here To Join The Support Server .:tada: **')
    .setColor('RANDOM')
    .setURL("https://discord.gg/GSgJBgs")
    msg.channel.send(SupportEmbed);
  }
});

// BCALL
client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$bcall')){
 if (message.author.id !== '326131905743421440') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '326131905743421440') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




// Invite

client.on('message', message => {
  if(message.content === '$invite') {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('** Click Here To Invite The Bot To Your Server :sparkling_heart:**')
  .setURL('https://discordapp.com/oauth2/authorize?client_id=470563155332825088&permissions=1845886145&scope=bot')
  .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL)
  message.channel.send(embed);
  }
});


// Server Links
client.on('message', msg => {
  if(msg.author.bot) return;

  if(msg.content === '$links') {
try {
    client.guilds.forEach(g => {

      let l = g.id
      g.channels.get(g.channels.first().id).createInvite({
        maxUses: 5,
        maxAge: 86400
      }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))


    })
} catch(e) {
if(e) console.log(e);
}
  }

})


// Servers Count
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   }
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   }
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   }
});




// التقديم

client.on('message', async message => {
  if(message.content.startsWith(prefix + "apply")) {
  await  message.reply(`**اكتب تقديمك الان**`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`** تم التقيدم بنجآح ، يرجى إنتظار ما بين 10 دقائق - 12 ساعة ** :tada:`)

                var embed = new Discord.RichEmbed()
                   .setColor('RANDOM')
                         .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle("**__Helper Application | تقديم على رتبة هلبر __**")
    .setTimestamp()
            .setDescription(`
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

${text}

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`)
       .setThumbnail(`${message.author.avatarURL}`)


   client.channels.get("472887675125235712").sendEmbed(embed);

              })
            }
          });


// القبول - الرفض

  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('472887703411752960');
  if(message.content.startsWith(prefix + "accept")) {
    if(message.guild.id !== '468167578855014411') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
});



// رفض
  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let deRoom = client.channels.get('484883697477091338');
  if(message.content.startsWith(prefix + "deny")) {
  if(message.guild.id !== '484883697477091338') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  deRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});




// Bot
function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
client.on('message', message => {
    if (message.content.startsWith("$info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``برودكاست بوت`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `${prefix}` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
    })
}
});



  client.on('guildCreate', guild => {
client.channels.get("479104629981052962").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("479104629981052962").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});



// Server Info
client.on("message", msg => {
  if(msg.content.startsWith(prefix + "server")) {
    if(!msg.member.hasPermission("MANAGE_GUILD")) return msg.channel.send("ليس لديك الصلآحية الكآفية . :broken_heart: ");
    const HemaServer = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Server Info :hearts: :sparkles:")
    .setDescription(` Members 👤 : ** ${msg.guild.memberCount}**
       Owner :crown: : ** ${msg.guild.owner.user.username}**
       Server ID :id: : ** ${msg.guild.id}**
       Roles :lock: : **${msg.guild.roles.size}**
       Region :earth_africa: : ** ${msg.guild.region}**
      `)
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    msg.channel.send(HemaServer)
  }
});

// OwnerShip PROOF
const HEMA = ["326131905743421440"];
client.on('message', message => {
if (message.content.startsWith(prefix + 'مين اونر البوت ؟')) {
    if(!message.channel.guild) return message.reply(' ');
  if(!message.channel.guild) return;
if( HEMA.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**👑 انت صاحب البوت **")
} else {
 message.reply("**🚫 انت لسا صاحب البوت**");
}
}
});


// Bans : -
client.on('message', msg => {
  if(msg.content.startsWith(prefix + "banned")) {
        msg.guild.fetchBans()
        .then(bans => msg.channel.send(`${bans.size} عدد الأشخآص المتبندة في السيرفر .. :dove:`))
        .catch(console.error);
  }
});

client.login(process.env.BOT_TOKEN);
