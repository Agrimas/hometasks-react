import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {sendData} from './RequestApi';

export default function HW13() {
    return (
        <>
            <Request/>
        </>
    );
}

export function Request() {
    const [request, setRequest] = useState(false)
    const [response, setResponse] = useState('')
    const [disabled, setDisabled] = useState(false);

    const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setRequest(event.currentTarget.checked);
    }

    async function buttonHandler() {
        setDisabled(true)
        const response = await sendData(request);
        setDisabled(false)
        setResponse(response);
    }

    return (
        <div>{}
            {response && <span>{response}</span>}
            <SuperCheckbox onChange={checkboxHandler} checked={request}/>
            <SuperButton onClick={buttonHandler} disabled={disabled}>Send</SuperButton>
        </div>
    );
}