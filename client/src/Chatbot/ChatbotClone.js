import React, { useEffect } from 'react';
import Axios from 'axios';

function Chatbot() {

    useEffect(() => {
        eventQuery('WelcomeToMyWebsite')
    },[])

    const textQuery = async (text) => {

        //우선은 받은 메세지를 화면에 나타내어 처리합니다.
        let conversation = {
            who: 'user',
            content: {
                //아래와 같은 형태를 한 이유는 dialogflow에서 보내는 res와 형태를 일치하기 위함입니다.
                text: {
                    text: text
                }
            }
        }
        console.log(conversation)
        const textQueryVariables = {
            text
        }

        //그 다음은 메세지를 전달하고 챗봇을 통해 돌려받은 답변을 나타냅니다.
        try {
        // textQuery Route에 req를 보냄.
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)
            const content = response.data.fulfillmentMessages[0]

            conversation = {
                who: 'bot',
                content: content
            }
            console.log(conversation)
        } catch (err) {
            conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: "잘못된 메세지입니다. 다시 작성해주세요."
                    }
                }
            }
            console.log(conversation)
        }
    }

    
    const eventQuery = async (event) => {

        //이벤트쿼리에서는 챗봇으로부터 받은 메세지만 나타내면 됩니다.
        const eventQueryVariables = {
            event
        }

        try {
        // textQuery Route에 req를 보냄.
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
            const content = response.data.fulfillmentMessages[0]

            let conversation = {
                who: 'bot',
                content: content
            }
            // conversations.push(conversation)
            console.log(conversation)
        } catch (err) {
            let conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: "잘못된 메세지입니다. 다시 작성해주세요."
                    }
                }
            }
            // conversations.push(conversation)
            console.log(conversation)
        }
    }

    const keyPressHendler = (e) => {
        if(e.key === "Enter") {
            if(!e.target.value) {
                return alert('메세지를 입력해주세요')
            }
            //request 로 메세지 전달.
            textQuery(e.target.value)
            e.target.value=""
        }
    }

    return (
        <div style={{height: 700, width: 700, border: '3px solid black', borderRadius: '7px'}}>
            <div style={{height: 644, width: '100%', overflow: 'auto'}}>

            </div>

            <input
                style={{margin: 0, width: '100%', height: 50, borderRadius: '4px', padding: '5px', fontSize: ''}}
                placeholder="여기에 입력해주세요..."
                onKeyPress={keyPressHendler}
                type="text"
            />
        </div>
    )
}

export default Chatbot;