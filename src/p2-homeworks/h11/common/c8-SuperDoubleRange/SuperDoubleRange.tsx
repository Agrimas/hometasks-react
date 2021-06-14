import React, {useState} from 'react';
import {makeStyles, Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const useStyles = makeStyles({
    root: {
        margin: '0 auto',
        width: 300,
    },
});


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const classes = useStyles();
    const initialValue = value ?? [0, 10];

    const [indicators, setIndicator] = useState<number | number[]>(initialValue);

    const onChangeRangeHandler = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            onChangeRange && onChangeRange([newValue[0], newValue[1]])
        }

        setIndicator(newValue);
    }

    return (
        <div className={classes.root}>
            <Slider
                value={indicators}
                onChange={onChangeRangeHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

export default SuperDoubleRange;
