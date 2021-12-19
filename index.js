const Discord = require("discord.js")
const client = new Discord.Client();
client.on('ready',async()=>{
  console.log(`Bot has started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members and ${client.channels.cache.size} channels`)
})

client.on('message',async(message)=>{
    if(message.channel.id === '917517855627571291'){
        message.member.setNickname(message.content).then(message.react('918440569854885918'));
    }
})

client.login(process.env.BOT_TOKEN)
