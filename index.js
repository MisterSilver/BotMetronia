const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Commande: /help");
    console.log("Connectç");
});

bot.login("NDUwMDU0MDg1NzQ4NTg4NTQ1.DexxOA.GacHtxE41Fbc5s-6x0lsWpoygw8");


bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n -/help");
    }
    
   if (message.content === "Salut") {
       message.reply("Bien le bonjour. :ç");
       console.log("Commande Salut");
   } 
});   