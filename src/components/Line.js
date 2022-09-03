import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";

const Line = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    //collection()はコレクション名を指定してフィールドを取得してくる関数
    //onSnapshot()で最初に全てのデータを取得する。limitなどコレクションに対するクエリを使える
    //data()でフィールドのデータを取得する。そのデータがuseStateでmessages
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        console.log("snapshot: ", snapshot);
        console.log("docs: ", snapshot.docs);

        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {/* firestoreのルールで書き込みの設定をしておく */}
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "recieved"
              }`}
            >
              <img src={photoURL} alt="test" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default Line;
