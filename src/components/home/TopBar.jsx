import { TbBrandGithubCopilot } from 'react-icons/tb'
import { RiRadioButtonLine } from 'react-icons/ri'
import { AiOutlineClear } from 'react-icons/ai'

const Status = () => {
    return (
        <div className='flex flex-r justify-center items-end text-green'>
            <RiRadioButtonLine className='h-2' />
            <h2 className='font-medium size-4'>Online</h2>
        </div>
    )
}

export const TopBar = ({ setSelect, setStackMessages, setStackKeys, setShowButton, setShowMessage, setButtonsDisabled }) => {

    const onHandleClear = () => {
        setSelect(null)
        setStackMessages([])
        setStackKeys([])
        setShowButton(true)
        setShowMessage(false)
        setButtonsDisabled(false)
    }

    return (
        <div className='w-full h-[51px] mt-3 pb-4 px-10 border-b-2 border-gray-p flex flex-r justify-between items-center 2xl:px-[450px]'>
            <div className='flex flex-r justify-center items-center gap-2'>
                <TbBrandGithubCopilot className='w-icon h-icon text-selected' />
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold size-5 text-selected'>BestHabitsWithChatBot</h1>
                    <Status />
                </div>
            </div>
            <button onClick={onHandleClear}>
                <AiOutlineClear className='w-icon h-icon' />
            </button>
        </div>
    );
};
