export const UserMessage = ({ message }) => {
    return (
        <article className='bg-primary max-w-80 text-white text-justify font-medium p-5 rounded-3xl rounded-tr-none self-end md:max-w-md'>
            {message}
        </article>
    )
}