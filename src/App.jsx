import { ChatView, Input, TopBar } from './components'

const App = () => {
    return (
        <div className='h-screen flex flex-col justify-end items-center font-display'>
            <TopBar />
            <ChatView />
            <Input />
        </div>
    )
}

export default App