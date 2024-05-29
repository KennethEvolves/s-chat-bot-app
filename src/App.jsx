import { useState } from 'react'
import { ChatView, Input, TopBar } from './components/home'

const App = () => {

    // const [messages, setMessages] = useState([])

    // const showMessage = (message) => {
    //     setMessages([...messages, message])
    // }

    const [select, setSelect] = useState(null);
    const [stackMessages, setStackMessages] = useState([])
    const [stackKeys, setStackKeys] = useState([])
    const [showButton, setShowButton] = useState(0)
    const [viewMessage, setShowMessage] = useState(false)
    const [buttonsDisabled, setButtonsDisabled] = useState(false)

    return (
        <div className='h-screen flex flex-col justify-end items-center font-display'>
            <TopBar
                setSelect={setSelect}
                setStackMessages={setStackMessages}
                setStackKeys={setStackKeys}
                setShowButton={setShowButton}
                setShowMessage={setShowMessage}
                setButtonsDisabled={setButtonsDisabled}
            />
            <ChatView
                // messages={messages}
                select={select}
                setSelect={setSelect}
                stackMessages={stackMessages}
                setStackMessages={setStackMessages}
                stackKeys={stackKeys}
                setStackKeys={setStackKeys}
                showButton={showButton}
                setShowButton={setShowButton}
                viewMessage={viewMessage}
                setShowMessage={setShowMessage}
                buttonsDisabled={buttonsDisabled}
                setButtonsDisabled={setButtonsDisabled}
            />
            {/* <Input onNewMessage={(message) => showMessage(message)} /> */}
        </div>
    )
}

export default App