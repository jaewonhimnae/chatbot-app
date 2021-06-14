import React, { useEffect, useState } from 'react';
import Message from './Message';
import moment from 'moment';

function Chatbot() {

  const [chatMessages, setChatMessages] = useState([]);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log('setChatMessages', chatMessages);
  }, [chatMessages])

  // useEffect(() => {
  // let hoho = setInterval(() => {
  //     let time = Date.now();
  //     setChatMessages(prev => prev.filter(item => moment().unix() < item.time + (5)));
  // }, 1000);

  // return () => {
  //     setTimeout(() => {
  //         clearInterval(hoho)
  //     }, 60000);
  // }
  // }, [])

  //두가지 조건을 더 넣어야한다 만약 1 2 3 번에서 없다면 

  const keyPressHanlder = (e) => {
    if (e.key === "Enter") {
      e.persist()

      if (!e.target.value) {
        return alert('you need to type somthing first');
      }
      let chatContent = e.target.value;
      let newNumber = number + 1;

      console.log('newNumber', newNumber);

      if (newNumber === 11) {
        setTimeout(() => {
          setChatMessages([])
          setChatMessages(prev =>
            [...prev, { incrementId: 1, time: moment().unix(), content: chatContent }]
          );
          setNumber(1)
        }, 200);
      } else {
        setChatMessages(prev =>
          [...prev, { incrementId: newNumber, time: moment().unix(), content: chatContent }]
        );
        setNumber(newNumber);
      }

      e.target.value = "";
    }
  }

  const renderMessage = (returnedMessages) => {
    return returnedMessages.map((message, i) => {
      return <Message key={i} time={message.time} incrementId={message.incrementId} text={message.content} />;
    })
  }

  return (
    <div style={{
      height: 400, width: 700,
      border: '3px solid black', borderRadius: '7px'
    }}>
      <div style={{ height: 344, width: '100%', overflow: 'auto' }}>
        {renderMessage(chatMessages)}
      </div>
      <input
        style={{
          margin: 0, width: '100%', height: 50,
          borderRadius: '4px', padding: '5px', fontSize: '1rem'
        }}
        placeholder="Send a message..."
        onKeyPress={keyPressHanlder}
        type="text"
      />
    </div>
  )
}

export default Chatbot;
