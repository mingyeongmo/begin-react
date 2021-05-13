import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value); //e.target은 이벤트가 발생한 DOM 인 input DOM을 가르키게 됩니다.
    };

    const onReset = () => {
        setText('');
    };
    


    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );

}

export default InputSample;