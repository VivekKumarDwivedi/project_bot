const { Telegraf } = require('telegraf');
const axios=require('axios');
require('dotenv').config();
console.log(process.env)
const bot =new Telegraf(process.env.BOT_TOKEN);

const binerySearchString= `
const binerySearch =function search(arr,x){
    let lo =0,hi=arr.length-1;
    while(lo<=hi){
        let mid =lo+Math.floor((hi-lo)/2);
        if(arr[mid]==x) return mid;
        else if(arr[mid]<x){
            lo=mid+1;
        }
        else{
            hi=mid-1;

        }
    }
    return undefined;



}`;


try{
    bot.start((ctx) => ctx.reply('Welcome to vivek\'s moco bot')); // /start
    bot.command('binearysearch',(ctx)=>ctx.reply(binerySearchString)); // /binearysearch
    bot.on('sticker', (ctx) => ctx.reply('👍'));

    bot.command('binearytreejs', async (ctx)=>{
        const response= await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js');
        ctx.reply(response.data);
    })
    bot.on('text', (ctx) =>{
        console.log(ctx.update.message);
        if(ctx.update.message.text=='i love you'){
            ctx.reply('i lov you too bro');
        
        }else{
            ctx.reply('i don\'t understand human');
        }
});

    bot.launch();

}catch{
    console.log("unexpected command");
}
