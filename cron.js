const Cron = require('cron');

new Cron('* * * * * *',()=>{
    console.log("Run");
});