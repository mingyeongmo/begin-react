import React from 'react'
import Hello from './Hello'
import './App.css'

function App() {
  const name = 'react';
  const style ={
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열 설정
  }

  // 인라인 스타일은 객체 형태로 작성,
  // background-color 처럼 - 로 구분되어 있는 이름들은
  // backgroundColor 처럼 camelCase 형태로 네이밍 해주어야함.

  return (
    <> {/*두개 이상의 태그는 무조건 하나의 태그로 감쌈
    이것은 Fragment이다.*/} 
      <Hello />
      <div style={style}>{name}</div> {/* 변수는 {}으로 감싸서 보여준다. */}
      <div className="gray-box"></div> {/* class= 가 아닌 className= 으로 설정. */}
    </>
  );
}

export default App;
