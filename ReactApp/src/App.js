import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


export default function App() {
  return <Chat />;
}

function Chat() {
  const [message, setmessage] = useState("");
  const [list, setList] = useState("");

  const getmessage = (e) => {
    const sendmessage = e.target.value;
    setmessage(sendmessage);
  };

  const send = () => {
    const url = "http:localhost:4000/send";
    const body = {
      messages: message
    };
    axios.post(url, body);
    let newlist = [body, ...list];
    setList(newlist);
    setmessage("");
  };
  const getmessages = async () => {
    const url = "http://localhost:4000/send";

    let result = await axios.get(url);

    const list = result.data;
    const newlist = [...list];
    setList(newlist);
  };
  useEffect(() => getmessages(), []);
  return (
    <div>
      <header className="bg-dark text-light p-4" >MyChatApp by Omkar Karande(210940320072)</header>
      <div>
        <input type="text" className="form-control " value={message} placeholder="Lets Chat here..." onChange={getmessage} />
        <input type="button" className="btn btn-primary" value="Register" onClick={send} />
      </div>
      <div>
        {list.map((item) => (
          <div>
            {item.messages}
          </div>
        ))}</div>
    </div>
  );
}
