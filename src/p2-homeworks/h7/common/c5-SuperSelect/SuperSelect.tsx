import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {v1} from 'uuid';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options?.map(option => <option key={v1()}>{option}</option>) ?? []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
