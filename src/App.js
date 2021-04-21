import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() { 
  {/* App 컴포넌트에서 Hello 컴포넌트를 사용 할 때
  name이라는 값을 전달 해주고 싶다고 가정해보자. */}
  return (
    <Wrapper> {/* 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을때는 props.children을 Wrapper에서 써주면 된다. */}
    <Hello name="react" color="red" />
    <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
