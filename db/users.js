const {v4 : uuid} = require("uuid");


const userdata = {
    "users":[
        {
            id: uuid(),
            username: 'riteshkatare',
            password: 'P@ss%665',
            email: 'rk@gmail.com'
        },
        {
            id: uuid(),
            username: 'rahulverma',
            password: 'P@ss$665',
            email: 'rv@gmail.com'
        },
        {
            id: uuid(),
            username: 'ajaykumar',
            password: 'P@ss&665',
            email: 'ak@gmail.com'
        },
        {
            id: uuid(),
            username: 'namanvohra',
            password: 'P@ss^665',
            email: 'nv@gmail.com'
        }
    ]
}

module.exports = userdata;