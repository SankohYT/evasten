const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";



client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك والله');
  }
});
client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله تعالى وبركاته');
  }
});



client.login(process.env.BOT_TOKEN);
