export const FunctionButton = ({ id, select, title, onSelect }) => {
    return (
        <button
            className={`btn ${select !== null && select !== id ? 'cursor-not-allowed' : 'btn-selected'}`}
            onClick={onSelect(id)}
            disabled={select !== null && select !== id}
        >{title}</button>
    )
}
