import React, { useEffect, useRef } from 'react'
import { BotMessage, ListMessage, UserMessage } from '../messages'
import { FunctionButton, ListButton } from '../buttons'
import { Goals, Harmful, Suggestions, dataPreset } from '../../data'
import { RespMessage } from '../messages/RespMessage'

export const ChatView = ({
    messages,
    select,
    setSelect,
    stackMessages,
    setStackMessages,
    stackKeys,
    setStackKeys,
    showButton,
    setShowButton,
    viewMessage,
    setShowMessage,
    buttonsDisabled,
    setButtonsDisabled,
}) => {

    const GOALS_OPTION = 1;
    const HARMFUL_OPTION = 2;
    const SUGGEST_OPTION = 3;

    const messagesEndRef = useRef(null)


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, select, viewMessage])

    const onSelect = (id) => {
        return () => {
            setSelect(id)
        }
    }

    const onStackOptions = (key, value) => {
        setShowButton(false)
        stackMessages.includes(value) ? null : setStackMessages([...stackMessages, value])
        stackKeys.includes(key) ? null : setStackKeys([...stackKeys, key])
    }

    const onSendMessage = () => {
        setShowMessage(true)
        setShowButton(0)
        setButtonsDisabled(true)
    }

    return (
        <div className='chat-view'>
            <BotMessage message={dataPreset.welcome_message} />

            <div className='flex flex-col items-center gap-4'>
                <FunctionButton id={GOALS_OPTION} select={select} title={dataPreset.function_buttons.goals} onSelect={onSelect} />
                <FunctionButton id={HARMFUL_OPTION} select={select} title={dataPreset.function_buttons.harmful} onSelect={onSelect} />
                <FunctionButton id={SUGGEST_OPTION} select={select} title={dataPreset.function_buttons.suggest} onSelect={onSelect} />
            </div>

            {
                select === 1 &&
                <>
                    <BotMessage message={dataPreset.messageOption[1]} />
                    <div className='btn-container'>
                        <ListButton data={Goals} onStackOptions={onStackOptions} disabled={buttonsDisabled} />
                        <button
                            className={`btn-send ${showButton ? 'cursor-not-allowed' : 'btn-send-selected'}`}
                            disabled={showButton}
                            onClick={onSendMessage}
                        >Enviar</button>
                    </div>
                    {
                        viewMessage &&
                        <>
                            <ListMessage title={dataPreset.stackMessagesTitle[1]} stackMessages={stackMessages} />
                            <RespMessage id={GOALS_OPTION} stackKeys={stackKeys} stackMessages={stackMessages} />
                        </>
                    }
                </>
            }


            {
                select === 2 &&
                <>
                    <BotMessage message={dataPreset.messageOption[2]} />
                    <div className='btn-container'>
                        <ListButton data={Harmful} onStackOptions={onStackOptions} disabled={buttonsDisabled} />
                        <button
                            className={`btn-send ${showButton ? 'cursor-not-allowed' : 'btn-send-selected'}`}
                            disabled={showButton}
                            onClick={onSendMessage}
                        >Enviar</button>
                    </div>
                    {
                        viewMessage &&
                        <>
                            <ListMessage title={dataPreset.stackMessagesTitle[2]} stackMessages={stackMessages} />
                            <RespMessage id={HARMFUL_OPTION} stackKeys={stackKeys} stackMessages={stackMessages} />
                        </>
                    }
                </>
            }


            {
                select === 3 &&
                <>
                    <BotMessage message={dataPreset.messageOption[3]} />
                    <div className='btn-container'>
                        <ListButton data={Suggestions} onStackOptions={onStackOptions} disabled={buttonsDisabled} />
                        <button
                            className={`btn-send ${showButton ? 'cursor-not-allowed' : 'btn-send-selected'}`}
                            disabled={showButton}
                            onClick={onSendMessage}
                        >Enviar</button>
                    </div>
                    {
                        viewMessage &&
                        <>
                            <ListMessage title={dataPreset.stackMessagesTitle[3]} stackMessages={stackMessages} />
                            <RespMessage id={SUGGEST_OPTION} stackKeys={stackKeys} stackMessages={stackMessages} />
                        </>
                    }
                </>
            }

            {/* {
                messages.map((message, index) => {
                    return (
                        <React.Fragment key={index}>
                            <UserMessage message={message} />
                        </React.Fragment>
                    )
                })
            } */}
            <div ref={messagesEndRef} />
        </div>
    )
}