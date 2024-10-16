const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=zzgkXJyJ#4Y6_ecPwK1V0fc5brKGhG9x9R12UZ8t3R2AxUcYh-gQ",
MONGODB: process.env.MONGODB || "mongodb+srv://Aizen:Mmndy@cluster0.bnbgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",//enter mongo db url
};
