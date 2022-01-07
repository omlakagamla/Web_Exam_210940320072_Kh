const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const { selectmessage, sendmessage } = require("./user");
app.use(cors());

app.get('/recieve', async (req, res) => {
    const list = await selectmessage();
    res.json(list);
});

app.post('/send', async (req, res) => {
    const user = req.body;
    //console.log(body);
    await sendmessage(user);
    res.json("Message Send")
});

app.listen(4040, () => {
    console.log("Chatting ......")
});