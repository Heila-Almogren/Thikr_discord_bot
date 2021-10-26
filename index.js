require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const schedule = require('node-schedule');
const athkar_list = require('./athkar_list');
const { Client, Attachment, Message, MessageEmbed } = require("discord.js");

bot.login(TOKEN);

bot.on('ready', () => {
  // none
})

// Globals
let job = "";
let cmd_set_channel = '#setroom';
let cmd_stop = "#stop"
let cmd_help = "#help"


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

  } catch (err) {
    console.log(err)
  }


  function setChannel() {
    stop()

    // Get channel name
    let channel_name = msg.content.substring(cmd_set_channel.length).toLowerCase().replace(/[0-9]/g, "").replace("#").trim()

    // Get channel time
    let channel_time = msg.content.substring(cmd_set_channel.length + channel_name.length + 1).toLowerCase().trim()
    console.log(channel_time)

    // if time is invalid, return
    if (!validTime(channel_time)) {
      return;
    }

    // if time is not set, set default value
    if (channel_time == "") {
      channel_time = 30 * 60000
    } else {
      channel_time = parseInt(channel_time) * 60000
    }


    // Verify channel is valid
    if (getChannels().includes(channel_name)) {
      console.log(true + "");

      // Schedule 
      job = setInterval(function () {
        console.log(athkar_list)
        var item = athkar_list[Math.floor(Math.random() * athkar_list.length)]
        const exampleEmbed = new Discord.MessageEmbed()
          .setTitle("ذكر")
          .setDescription(item);
        bot.channels.cache.get(getChannelID(channel_name)).send(exampleEmbed);
      }, channel_time)

    } else {
      // if channel name is not valid, show error message
      if (channel_name != "") {
        msg.channel.send("No channel named " + channel_name + " in the server. Make sure of the spelling.").catch(err => console.error(err));
      } else {
        msg.channel.send("No channel named was entered.").catch(err => console.error(err));
      }
    }
  }

  // Stopping bot
  function stop() {
    if (job) {
      clearInterval(job);
    }
  }

  // Get list of all channels
  function getChannels() {
    var array = [];
    let channels = bot.channels.cache.array();
    for (const channel of channels.values()) {
      if (channel.type === 'text')
        array.push(channel.name);
    }

    return array;
  }


  // Get channel ID from its name
  function getChannelID(name) {

    let channels = bot.channels.cache.array();
    for (const channel of channels.values()) {
      if (channel.name === name)
        return channel.id
    }

  }

  // Show help message
  function help() {
    msg.channel.send(
      ":arrow_forward:  **To enable bot inside a channel:** ```thikr | set channel {channel name} {time}```" + "\n"
      + "Example: " + "```thikr | set channel general 30```" + "\n"
      + "Time is optional. If not set, default value will be 30 (in minutes)" + "\n"
      + "Example: " + "```thikr | set channel general```" + "\n"
      + ":pause_button:  **To pause bot:** " + "```thikr | stop```" + "\n"
    ).catch(err => console.error(err));
  }

  // Validate time
  function validTime(time) {
    if (isNaN(time)) {
      msg.channel.send("Invalid time")
      return false;
    };
    return true;
  }
});
