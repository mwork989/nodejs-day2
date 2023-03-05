const fs = require("fs");
// read the users.json and modify and update the user maria
fs.readFile('./json/users.json', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        const users = JSON.parse(data);
        users[1].designation = "senior developer";

        fs.writeFile('./json/users.json', JSON.stringify(users), (writeerror) => {
            if (writeerror) {
                console.log(writeerror)
            } else {
                console.log("sucessfull")
            }
        })
    }
})