import { useEffect, useState } from 'react'
import { IoSend } from 'react-icons/io5'

export const Input = ({ onNewMessage, stackOptions }) => {

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setInputValue(stackOptions)
    }, [stackOptions])

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        inputValue.length <= 1 ? null : onNewMessage(inputValue)
        setInputValue('')
    }

    return (
        <form
            onSubmit={(event) => onSubmit(event)}
            className='w-[333px] h-[80px] bg-white mb-12 px-6 flex flex-r justify-end items-center gap-6 
            shadow-xl rounded-full border border-gray-p focus-within:border-primary xl:w-[810px] md:w-[720px]'
        >
            <textarea
                type='text'
                placeholder='Type a message...'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
                onSubmit={(event) => onSubmit(event)}
                className='px-6 py-4 w-full h-[60px] text-gray-s focus:outline-none overscroll-y-auto rounded-full resize-none'
            />

            <button onClick={event => onSubmit(event)}>
                <IoSend className='w-icon h-icon text-primary' />
            </button>
        </form>
    )
} 