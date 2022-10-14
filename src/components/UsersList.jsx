import axios from 'axios';
import React from 'react';

const UsersList = ({users, getUsers, selectUser}) => {

    const deleteUser = (id) => {
        axios
            .delete(`http://144.126.218.162:9000/users/${id}/`)
            .then(() => getUsers())
            alert(`Usuario eliminado exitosamente!`);
    }

    return (
        <div className='grid'>
        
            {users.map((user) => (
              <div className='container-users' key={users.id}>
                <h2>{user.first_name} {user.last_name}</h2>
                
                <i className ="fa-solid fa-circle-user circle"></i>

                <div>
                  <b>Email: </b>
                  {user.email}
                </div>
            
                <div>
                  <b>Contraseña: </b>
                  {user.password}
                </div>
            
                <div>
                  <b>Cumpleaños: </b>
                  <br />
                  <i class="fa-solid fa-gift"></i>{"  "}
                  {user.birthday}
                </div>
                
                <div className='btn-grup'>
                  <button onClick={()=>selectUser(user)}><i className="fa-regular fa-pen-to-square"></i></button>
                  <button onClick={()=>deleteUser(user.id)}><i className="fa-regular fa-trash-can red"></i></button>
                </div>

              </div>
            ))}

        </div>
    );
};

export default UsersList;