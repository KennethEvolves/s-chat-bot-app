export const ListMessage = ({ title, stackMessages }) => {
    return (
        <article className='user-message'>
            {title}
            <br />
            <br />
            {
                <ul>
                    {stackMessages.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            }
        </article>
    )
}
