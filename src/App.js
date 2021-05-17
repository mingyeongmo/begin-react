import React, {useRef, useState} from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';


function App() {
  
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email } = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
 
    const user = {
      id: nextId.current,
      username,
      email
    };
    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id 가 id 인 것을 제거 함
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
