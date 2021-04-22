import React, {useState} from 'react' // 이 코드는 리액트패키지에서 useState라는 함수를 불러와줍니다.

function Counter  () {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number => number + 1);
    }

    const onDecrease = () => {
        setNumber(number => number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
