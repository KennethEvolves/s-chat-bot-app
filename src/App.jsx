import { ChatView, TopBar } from './components'

const App = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center font-display'>
            <TopBar />
            <ChatView />
        </div>
    )
}

export default App