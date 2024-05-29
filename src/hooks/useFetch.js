import { useEffect, useState } from 'react'

export const useFetch = (url, dataFetchGoals, stackKeys) => {
    const [status, setStatus] = useState({
        data: null,
        isLoading: true,
        error: null,
    })

    useEffect(() => {
        getFetch()
    }, [stackKeys])

    const setLoadingState = () => {
        setStatus({
            data: null,
            isLoading: true,
            error: null,
        })
    }

    const getFetch = async () => {

        setLoadingState()

        const response = await fetch(url, dataFetchGoals(stackKeys))

        await new Promise((resolve) => setTimeout(resolve, 2000))

        if (!response.ok) {
            setStatus({
                data: null,
                isLoading: false,
                error: 'Información no disponible',
            })
            return;
        }

        const data = await response.json()

        setStatus({
            data: data,
            isLoading: false,
            error: null,
        })
    }

    return {
        data: status.data,
        isLoading: status.isLoading,
        error: status.error,
    }
}