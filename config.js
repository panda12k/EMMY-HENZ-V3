//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "94763559656";
global.owner = process.env.OWNER_NUMBER || "https://wa.me//94763559656";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "94763559656";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xLdldlc1ZZTjdoUjJZVlRkck9OOHNhYVpPTWRmOVdGM3dLNnorU25GZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1FFWVJtZmN2MWVzVysxYmlrbWpkeTRvQTZzOVBkMnBlWDRoNit0bFd3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ2R1Z1pVVkhsdkliUmVyWHRCRmE0UTBJblZoa0hDUDVOa2tpUGNJRVVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkQjJyRHA0SVRqTi9vNThtdjczN3hMSitZZml5cjZVdEFZcEhKNTdVWDN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOQVBBMWJGbDl1Qm1tUHNjdUpFYWFNSldHZUY0VjZJVENQL0xwVE8xSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB1OFF5dHBFZDJvSzhwcXQ2dnZGZnllc3RjbDI5aG5HRk5haWUvMlo5M3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZHa1Iwd2RsK1RkK2dwYlZxTXcrc0NNRjRGTkFEZW1kSmJMVEU3bmFsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDJMRzVHY2tuYm9BUTZoKzhMR0Vmazd4bWV0QWJtalVjWkorUUQ0TnlqZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxSY2lOSVM3c1cvaGVBTkJXZThJM0tVZ1FNM3hoTEpxNndLdDVaTnRlMXd1bjFEQTV0Z3dPNVF5cmpPUEkrVVpDZURhRDJOYzU3Y1lLU28vaE4rM0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiI2bURYVFZNZzNIL2lpc2FEbnNKdS9zajVleUZFMFRZN1hpdVlqVDNwQi80PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvOUhHN0ZMclRsQ29zNXhUUXd5V3lBIiwicGhvbmVJZCI6IjcwMjUzMDgyLWRjMDUtNDExZi04NThmLTcwOTEwZmJmOTUwZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVcFNLZzV3aWQyR0RvdEdiTXFZb0lnZHVibXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWEwRWd6OWIrSWYyYjMwK05saCtuR2lSbnNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNRNTdBNktMIiwibWUiOnsiaWQiOiI5NDc2MzU1OTY1Njo2MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCMIPCdkIgg8J2QgiDwnZCKIPCdkIQg8J2QmCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnU0N2R3Q0VNMjF6cmdHR0RZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ0xZK2d3QVZ5eDc0Mm9BM1BCT2EzYVFtSUp3ZDRocVh4SHhyYmpvRGtFTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVmhwekxxcDhvSWk1SHBJdWxUNWRsRHUzNmhxcFptUkw1TUQwZEozZzNTSnZySlV6NGFtRnpveXlhditMT3Q0RlQ3alo3bmUxY3hETkU5Vlp1Z1haQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjFFbzhKTnU1UDRqUjBnNGUrQ1lZL01JQklINU93aTdVdGd0ZG9ETGl3eGVjNWU4WDU1Smo4eVJoTjk0bHJ2cHNOdHRlSFEycW1JNmtwbGJueDBUWkJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjM1NTk2NTY6NjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWkyUG9NQUZjc2UrTnFBTnp3VG10MmtKaUNjSGVJYWw4UjhhMjQ2QTVCRCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTMzODA3MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJb2EifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "𝐌𝐈𝐂𝐊𝐄𝐘",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
