import { useState } from 'react'
import { IoSend } from 'react-icons/io5'

export const Input = () => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
        newInputValue >= 3 ? null : console.log(newInputValue)
        setInputValue('')
    }

    return (
        <form
            onSubmit={(event) => onSubmit(event)}
            className='w-[333px] h-[60px] bg-white mb-8 p-4 flex flex-r justify-between items-center 
            shadow-xl rounded-full absolute border border-white focus-within:border-primary xl:w-[810px] md:w-[720px]'
        >
            <input
                type='text'
                placeholder='Write your message'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
                onSubmit={(event) => onSubmit(event)}
                className='p-4 w-full text-gray-s focus:outline-none rounded-full'
            />
            <button onClick={event => onSubmit(event)}>
                <IoSend className='w-icon h-icon text-primary' />
            </button>
        </form>
    )
} 