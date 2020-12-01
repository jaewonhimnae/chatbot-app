import React from 'react';


function Chatbot() {

    const textQuery = () => {
    
    }

    const keyPressHendler = (e) => {
        if(e.key === "Enter") {
            if(!e.target.value) {
                return alert('메세지를 입력해주세요')
            }

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