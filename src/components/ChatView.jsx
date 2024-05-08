import { BotMessage, UserMessage } from "./messages"

export const ChatView = () => {
    return (
        <div className='w-full h-screen py-6 px-4 flex flex-col justify-start items-center gap-8 
        overflow-y-scroll max-h-lvh 2xl:px-[450px] xl:px-[250px] md:px-[120px]'>
            <UserMessage />
            <BotMessage />
        </div>
    )
}
