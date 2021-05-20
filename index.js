require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const schedule = require('node-schedule');

bot.login(TOKEN);

thikr_array = [
  "سبحان الله",
  "سبحان الله وبحمده.. سبحان الله العظيم",
  "لا إله إلّا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
  "لا حول ولا قوة إلّا بالله",
  "اللهم صلّ وسلم على نبينا محمد",
  "..أستغفر الله.. أستغفر الله.. أستغفر الله",
  "اللهم صلّ على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم أنك حميد مجيد، اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد.",
  "اللهم اجعل في قلبي نوراً، وفي لساني نوراً، واجعل في سمعي نوراً، واجعل في بصري نوراً، واجعل من خلفي نوراً، ومن أمامي نوراً، واجعل من فوقي نوراً، ومن تحتي نوراً، اللهم أعطني نوراً.",
  "اللهم إني أعوذ بك من عذاب جهنم ومن عذاب القبر ومن فتنة المحيا والممات ومن فتنة المسيح الدجال.",
  "اللهم اغفر لي ما قدمت وما أخرت، وما أسررت وما أعلنت، وما أسرفت، وما أنت أعلم به مني، أنت المقدم وأنت المؤخّر لا إله إلّا أنت.",
  "اللهم إني ظلمت نفسي ظلماً كثيراً ولا يغفر الذنوب إلّا أنت فاغفر لي مغفرة من عندك وارحمني إنّك أنت الغفور الرحيم.",
  "أستغفر الله، أستغفر الله، أستغفر الله، اللهم أنت السلام، ومنك السلام، تباركت يا ذا الجلال والإكرام.",
  "لا إله إلّا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجد.",
  "سبحان الله، والحمد لله، والله أكبر.(ثلاثا وثلاثين).، لا إله إلّا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير.",
  "لا إله إلّا الله وحده لا شريك له، له الملك وله الحمد، يحيي ويميت وهو على كل شيء قدير",
  "اللهم إني أسألك علماً نافعاً ورزقاً طيباً، وعملاً متقبلاً..",
  "اللهم أعني على ذكرك وشكرك وحسن عبادتك",
]

bot.on('ready', () => {

  // const members = message.guild.members.filter(m => !m.user.bot).array(); // Filter out bots.

  // let undelivered = 0;

  // for (let i = 0; i < members.length; i++) {  // Using an array and a for loop rather than
  //   const member = members[i];                // Collection.forEach() due to the fact that
  //   await member.send('Hello there.')         // the latter will move onto the proceeding
  //     .catch(() => undelivered++);            // code before waiting for the promises to
  // }                                           // fulfill. https://stackoverflow.com/a/37576787

  // message.channel.send(`Messages sent. ${undelivered} members couldn't receive it.`)
  //   .catch(console.error);


  //   const list = bot.guilds.cache.get("myServerID"); 
  // list.members.cache.forEach(member => console.log(member.user.username)); 


  // bot.users.forEach(user => {

  //   console.log(user.username + " " + user.bot)
  // })

  // const job = schedule.scheduleJob('32 * * * *', function () {


  // })

})

thikr_array = [
  "سبحان الله",
  "سبحان الله وبحمده.. سبحان الله العظيم",
  "لا إله إلّا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
  "لا حول ولا قوة إلّا بالله",
  "اللهم صلّ وسلم على نبينا محمد",
  "..أستغفر الله.. أستغفر الله.. أستغفر الله",
  "اللهم صلّ على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم أنك حميد مجيد، اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد.",
  "اللهم اجعل في قلبي نوراً، وفي لساني نوراً، واجعل في سمعي نوراً، واجعل في بصري نوراً، واجعل من خلفي نوراً، ومن أمامي نوراً، واجعل من فوقي نوراً، ومن تحتي نوراً، اللهم أعطني نوراً.",
  "اللهم إني أعوذ بك من عذاب جهنم ومن عذاب القبر ومن فتنة المحيا والممات ومن فتنة المسيح الدجال.",
  "اللهم اغفر لي ما قدمت وما أخرت، وما أسررت وما أعلنت، وما أسرفت، وما أنت أعلم به مني، أنت المقدم وأنت المؤخّر لا إله إلّا أنت.",
  "اللهم إني ظلمت نفسي ظلماً كثيراً ولا يغفر الذنوب إلّا أنت فاغفر لي مغفرة من عندك وارحمني إنّك أنت الغفور الرحيم.",
  "أستغفر الله، أستغفر الله، أستغفر الله، اللهم أنت السلام، ومنك السلام، تباركت يا ذا الجلال والإكرام.",
  "لا إله إلّا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجد.",
  "سبحان الله، والحمد لله، والله أكبر.(ثلاثا وثلاثين).، لا إله إلّا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير.",
  "لا إله إلّا الله وحده لا شريك له، له الملك وله الحمد، يحيي ويميت وهو على كل شيء قدير",
  "اللهم إني أسألك علماً نافعاً ورزقاً طيباً، وعملاً متقبلاً..",
  "اللهم أعني على ذكرك وشكرك وحسن عبادتك",
]

// Globals
let job = "";
let cmd_set_channel = 'thikr | set channel';
let cmd_stop = "thikr | stop"
let cmd_help = "thikr | help"


bot.on('message', msg => {


  try {

    // List of commands

    if (msg.content.startsWith(cmd_set_channel)) {
      setChannel()
    }


    if (msg.content.startsWith(cmd_stop)) {
      stop()
    }

    if (msg.content.startsWith(cmd_help)) {
      help()
    }

    // }

  } catch (err) {
    console.log(err)
  }


  function setChannel() {
    stop()

    // Get channel name
    let channel_name = msg.content.substring(cmd_set_channel.length).toLowerCase().replace(/[0-9]/g, "").trim()
    let channel_time = msg.content.substring(cmd_set_channel.length + channel_name.length + 1).toLowerCase().trim()
    console.log(channel_time)

    if (!validTime(channel_time)) {
      return;
    }

    if (channel_time == "") {
      channel_time = 30 * 60000
    } else {
      channel_time = parseInt(channel_time) * 60000
    }


    // Verify channel is valid
    if (getChannelIDs().includes(channel_name)) {

      // Schedule 
      job = setInterval(function () {
        var item = thikr_array[Math.floor(Math.random() * thikr_array.length)]
        bot.channels.get(getChannelID(channel_name)).send("📿 " + item).catch(err => console.error(err));

      }, channel_time)

    } else {
      if (channel_name != "") {
        msg.channel.send("No channel named " + channel_name + " in the server. Make sure of the spelling.").catch(err => console.error(err));
      } else {
        msg.channel.send("No channel named was entered.").catch(err => console.error(err));
      }
    }

  }


  function stop() {
    if (job) {
      clearInterval(job);
    }
  }


  function getChannelIDs() {
    var array = [];
    let channels = bot.channels.array();
    for (const channel of channels.values()) {
      if (channel.type === 'text')
        array.push(channel.name);
    }

    return array;
  }


  function getChannelID(name) {

    let channels = bot.channels.array();
    for (const channel of channels.values()) {
      if (channel.name === name)
        return channel.id
    }

  }

  function help() {
    msg.channel.send(
      ":arrow_forward:  **To enable bot inside a channel:** ```thikr | set channel {channel name} {time}```" + "\n"
      + "Example: " + "```thikr | set channel general 30```" + "\n"
      + "Time is optional. If not set, default value will be 30 (in minutes)" + "\n"
      + "Example: " + "```thikr | set channel general```" + "\n"
      + ":pause_button:  **To pause bot:** " + "```thikr | stop```" + "\n"
    ).catch(err => console.error(err));
  }

  function validTime(time) {
    if (isNaN(time)) {
      msg.channel.send("Invalid time")
      return false;
    };
    // if (parseInt(time) < 30) {
    //   msg.channel.send("Time should be more than 30 minutes")
    //   return false;
    // }
    return true;
  }
});
