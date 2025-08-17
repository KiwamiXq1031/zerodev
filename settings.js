const fs = require('fs');

// Owner
global.owner = "-"
global.linkWa = "-"
global.linkTesti = "-"

// Github 
global.tokengh = "-"

// Pterodactyl 
global.domain = "-"
global.ptla = "-"
global.ptlc = "-"
global.egg = "-"
global.nestid = "-"

// Vps 
global.apido = "-"

// Order Kuota
global.apikey = "-"
global.codeqr = "-"
global.authToken = "-"
global.userOrkut = "-"
global.pwOrkut = "-"

// Email 
global.email = "example@gmail.com"
global.pw = "-"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});