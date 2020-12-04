
import React from 'react';
import './InputText.scss';

const InputText = (props: {
    changeData: (data: string) => void
}) => {

    const { changeData } = props;

    return (
        <input type="text" className="input-text" onChange={(e: any) => {
            changeData(e.target.value);
        }}/>
    );
}

export default InputText;
