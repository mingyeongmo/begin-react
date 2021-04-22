import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() { 
  {/* App 컴포넌트에서 Hello 컴포넌트를 사용 할 때
  name이라는 값을 전달 해주고 싶다고 가정해보자. */}
  return (
    <Wrapper>
    <Hello name="react" color="red" isSpecial={true}/>
    {/* 조건부 렌더링 : 특정조건에 따라 다른 결과물을 렌더링 하는것을 의미한다.
    props 값을 설정을 생략하면 값 = true이다.
    */}
    <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
