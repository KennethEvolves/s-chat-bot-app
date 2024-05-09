import { useState } from 'react'
import { ChatView, Input, TopBar } from './components'

const App = () => {

    const [messages, setMessages] = useState([])

    const showMessage = (message) => {
        setMessages([...messages, message])
    }

    return (
        <div className='h-screen flex flex-col justify-end items-center font-display'>
            <TopBar />
            <ChatView messages={messages} />
            <Input onNewMessage={(message) => showMessage(message)} />
        </div>
    )
}

export default App