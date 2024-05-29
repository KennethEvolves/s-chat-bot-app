import React from 'react'
import { useFetch } from '../../hooks'
import { dataFetch } from '../../helpers';
import { dataGoodHabits, dataHabitsAlternatives } from '../../data';
import { TbBrandGithubCopilot } from 'react-icons/tb'

export const RespMessage = ({ id, stackKeys, stackMessages }) => {

    if (id === 1) {
        const { data, isLoading, error } = useFetch('http://127.0.0.1:8000/habitos', dataFetch, stackKeys)

        let extractedData = {};
        if (!isLoading && data) {
            stackKeys.map(key => {
                extractedData[key] = data[key];
            });
        }

        return (
            <div className='w-full flex flex-r justify-start items-end gap-4'>
                <TbBrandGithubCopilot className='w-[30px] h-[30px] text-selected' />
                <article className='bot-message'>
                    {
                        isLoading ? <p>Cargando...</p>
                            :
                            stackMessages.map((title, index) => {
                                const dataItems = extractedData[stackKeys[index]];
                                return (
                                    <React.Fragment key={title}>
                                        <h1 className='font-extrabold'>Objetivo {index + 1}. {title}</h1>
                                        <br />
                                        {dataItems && dataItems.map((dataItem, index) => (
                                            <React.Fragment key={index}>
                                                <p><span className='text-primary font-extrabold'>Hábito a realizar:</span> {dataItem.nombre}.</p>
                                                <p><span className='text-green font-extrabold'>Beneficios:</span> {dataItem.beneficios}.</p>
                                            </React.Fragment>
                                        ))}
                                        <br />
                                    </React.Fragment>
                                )
                            })
                    }
                </article>
            </div>
        )
    }

    if (id === 2) {
        const { data, isLoading, error } = useFetch('http://127.0.0.1:8000/habitos', dataFetch, stackKeys)

        let extractedData = {};
        if (!isLoading && data) {
            stackKeys.map(key => {
                extractedData[key] = data[key];
            });
        }

        return (
            <div className='w-full flex flex-r justify-start items-end gap-4'>
                <TbBrandGithubCopilot className='w-[30px] h-[30px] text-selected' />
                <article className='bot-message'>
                    {
                        isLoading ? <p>Cargando...</p>
                            :
                            stackMessages.map((title, index) => {
                                const dataItems = extractedData[stackKeys[index]];
                                return (
                                    <React.Fragment key={title}>
                                        <h1 className='font-extrabold text-gray-s'>{index + 1}. Habito perjudicial: {title}</h1>
                                        <br />
                                        {dataItems && dataItems.map((dataItem) => (
                                            <React.Fragment key={dataItem}>
                                                <p><span className='text-primary font-extrabold'>Hábito a realizar:</span> {dataGoodHabits[dataItem.nombre]}.</p>
                                                <p><span className='text-green font-extrabold'>Beneficios:</span> {dataItem.beneficios}.</p>
                                            </React.Fragment>
                                        ))}
                                        <br />
                                    </React.Fragment>
                                )
                            })
                    }
                </article>
            </div>
        )
    }

    if (id === 3) {
        const { data, isLoading, error } = useFetch('http://127.0.0.1:8000/habitos', dataFetch, stackKeys)

        let extractedData = {};
        if (!isLoading && data) {
            stackKeys.map(key => {
                extractedData[key] = data[key];
            });
        }

        return (
            <div className='w-full flex flex-r justify-start items-end gap-4'>
                <TbBrandGithubCopilot className='w-[30px] h-[30px] text-selected' />
                <article className='bot-message'>
                    {
                        isLoading ? <p>Cargando...</p>
                            :
                            stackMessages.map((title, index) => {
                                const dataItems = extractedData[stackKeys[index]];
                                return (
                                    <React.Fragment key={title}>
                                        <h1 className='font-extrabold text-gray-s'>{index + 1}. {title}</h1>
                                        <br />
                                        {dataItems && dataItems.map((dataItem, index) => {
                                            let beneficios = dataItem.beneficios;
                                            Object.keys(dataHabitsAlternatives).forEach(key => {
                                                beneficios = beneficios.replace(key, dataHabitsAlternatives[key])
                                            })
                                            return (
                                                <React.Fragment key={index}>
                                                    <p><span className='text-primary font-extrabold'>Hábito a realizar:</span> {dataItem.nombre}.</p>
                                                    <p><span className='text-green font-extrabold'>Beneficios:</span> {beneficios}.</p>
                                                </React.Fragment>
                                            )
                                        })}
                                        <br />
                                    </React.Fragment>
                                )
                            })
                    }
                </article>
            </div>
        )
    }

}
