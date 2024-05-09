import React from 'react'
import { UserMessage } from './messages'

export const ChatView = ({ messages }) => {

    return (
        <div className='w-full h-screen py-6 px-4 flex flex-col justify-strt items-center gap-8 
        overflow-y-auto snap-y max-h-lvh 2xl:px-[550px] xl:px-[250px] md:px-[70px]'>
            {
                messages.map((message, index) => {
                    return (
                        <React.Fragment key={index}>
                            <UserMessage message={message} />
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}