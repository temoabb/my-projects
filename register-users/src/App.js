import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';


function App() {
  // console.log('App rendered');
  const [usersList, setUsersList] = useState([])
  // console.log(usersList);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
