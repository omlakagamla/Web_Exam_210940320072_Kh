const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "pgdac1",
    password: "cdac",
    database: "web"
};

const user = {
    messages: "Hi How are You"
};

const sendmessage = async (user) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const insert = `insert into message (messages) values (?)`;
    await connection.queryAsync(insert, [user.messages]);
    await connection.endAsync();
    console.log("Message added");
};


const selectmessage = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let select = 'select * from Message';
    const list = await connection.queryAsync(select);
    console.log(list);
    await connection.endAsync();
    return list;
};



//sendmessage(user);
//selectmessage();

module.exports = { sendmessage, selectmessage };