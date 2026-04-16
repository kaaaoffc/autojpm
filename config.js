const fs = require("fs");

global.owner = "6285137572401"
global.namaOwner = "Fyxzpedia"
global.prefix = ".";
global.botName = "Simple-Script";
global.pairingNumber = "6285137572401"

global.idSaluran = "120363402625644245@newsletter";
global.namaSaluran = "Powered by Fyxzpedia";

global.paymentImage = "https://files.catbox.moe/7lh2in.png";
global.dana = "083193211556";  
global.gopay = "083193211556"; 
global.ovo = "-"; 

global.mess = {
  owner: "Fitur ini hanya bisa digunakan oleh *Owner Bot*.",
  premium: "Fitur ini hanya bisa digunakan oleh *User Premium*.",
  group: "Fitur ini hanya dapat digunakan di dalam grup.",
  private: "Fitur ini hanya dapat digunakan di private chat.",
  admin: "Fitur ini hanya bisa digunakan oleh admin grup.",
  botadmin: "Fitur ini hanya dapat digunakan jika bot adalah admin grup.",
};

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
delete require.cache[file]
require(file)
})
