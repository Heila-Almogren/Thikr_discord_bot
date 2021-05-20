require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const schedule = require('node-schedule');

bot.login(TOKEN);

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

let job = "";

bot.on('message', msg => {

  try {

    if (msg.content === 'ذكرني') {
      msg.channel.send("ستتلقى تذكيرا كل ساعة").catch({

      })
      job = schedule.scheduleJob('53 * * * *', function () {
        var item = thikr_array[Math.floor(Math.random() * thikr_array.length)]
        msg.channel.send("📿 " + item).catch({

        })
      })
    }

    if (msg.content === 'إيقاف' || msg.content === 'ايقاف') {
      if (job) {
        job.cancel()

      }
    }

  } catch (err) {
    console.log(err)
  }



  //   let text = "msg.content.slice('/private'.length);" // cuts off the /private part
  //   msg.guild.members.forEach(member => {
  //     if (member.id != bot.user.id && !member.user.bot) member.send(text);
  //   });

});
