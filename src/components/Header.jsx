import React from 'react';

const Header = () => {
    return (
    <div className='header'>
       <h1>CRUD USUARIOS</h1>
       <button className='btn-create'><i class="fa-solid fa-plus"></i> Crear nuevo usuario</button>
     </div>
    );
};

export default Header;