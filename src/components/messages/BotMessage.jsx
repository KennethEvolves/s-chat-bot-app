import { TbBrandGithubCopilot } from 'react-icons/tb'

export const BotMessage = ({ message }) => {
    return (
        <div className='w-full flex flex-r justify-start items-end gap-4'>
            <TbBrandGithubCopilot className='w-[30px] h-[30px] text-selected' />
            <article className='bot-message'>
                {message}
            </article>
        </div>
    )
}