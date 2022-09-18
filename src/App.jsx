import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import './style.css'


function App() {
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    getUsers();      
  },[])

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => setUserSelected(null);

  // console.log(users)

  return (
    <div className="App">
      <Header />

      <UsersForm 
        getUsers={getUsers} 
        userSelected={userSelected} 
        deselectUser={deselectUser}
        />

      <UsersList 
        users={users} 
        getUsers={getUsers} 
        selectUser={selectUser}
        />

        <Footer />
    </div>
  )
}

export default App
