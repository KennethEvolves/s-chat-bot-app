import React, { useEffect, useRef } from 'react'
import { UserMessage } from './messages'

export const ChatView = ({ messages }) => {

    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className='w-full h-screen py-6 px-4 flex flex-col items-center gap-8 
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
            <div ref={messagesEndRef} />
        </div>
    )
}