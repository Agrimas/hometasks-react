import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type,
        name,
        options,
        value,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.checked)
        onChange && onChange(e)
    }


    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    name={name}
                    value={value}
                    onChange={onChangeCallback}
                    {...restProps}
                />
                {o}
            </label>
        )) :
        []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
