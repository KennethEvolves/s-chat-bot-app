export const dataFetch = (stackKeys) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: stackKeys
        })
    }
}