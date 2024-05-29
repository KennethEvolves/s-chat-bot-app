import { useState } from 'react';

export const ListButton = ({ data, onStackOptions, disabled }) => {

    const [activeButtons, setActiveButtons] = useState({});

    const handleClick = (key, value) => {
        onStackOptions(key, value)
        setActiveButtons(prevState => ({ ...prevState, [value]: true }))
    }

    return (
        <>
            {
                Object.entries(data).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className={`btn-list ${activeButtons[value] ? 'btn-selected' : ''} ${disabled ? 'cursor-not-allowed' : ''}`}
                            disabled={disabled}
                            onClick={() => handleClick(key, value)}
                        >{value}</button>
                    )
                })
            }
        </>
    )
}
