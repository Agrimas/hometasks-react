import React from 'react';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../h10/bll/store';
import {changeThemeC, themeType} from './bll/themeReducer';

const themes = ['dark', 'red', 'some'] as themeType[];

function HW12() {

    const theme = useSelector((state: RootState) => state.theme.theme);
    const dispatch = useDispatch();
    const onChangeCallback = (theme: themeType) => {
        dispatch(changeThemeC(theme));
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect value={theme} options={themes} onChangeOption={onChangeCallback}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
