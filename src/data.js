const fs = require('fs')
const path = require('path')

//reading and parsing JSON from src...
const accountData = fs.readFileSync('./src/json/accounts.json', 'UTF8')
const accounts = JSON.parse(accountData)

const userData = fs.readFileSync('./src/json/users.json', 'UTF8')
const users = JSON.parse(userData)

writeJSON = () => {
    //write JSON data to file
    const accountsJSON = JSON.stringify(accounts,null,4)
    fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'UTF8')
}

// export an object containing constants: 
//accounts, users, writeJSON
module.exports = { accounts, users, writeJSON }
