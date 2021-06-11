import React from 'react'
import Classes from './Affairs.module.css'
import {AffairType} from './HW2';
import {deleteAffairCallbackType} from './Affairs';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: deleteAffairCallbackType
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    return (
        <div className={Classes.affair}>
            <div>
                {props.affair.name}
            </div>
            <div>
                {props.affair.priority}
            </div>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
