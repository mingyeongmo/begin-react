import React from 'react'; // 이걸 통해 리액트를 불러옴.

function Hello(props){
    return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
}

Hello.defaultProps ={ //props를 설정하지 않았을때 기본값
    name:'이름없음'
}

export default Hello; // Hello라는 컴포넌트를 내보내겠다는 의미