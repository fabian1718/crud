import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const {register, handleSubmit, reset} = useForm();

    useEffect(() => {
        if (userSelected) {
          reset(userSelected);
        }
      }, [userSelected]);

    const submit = (data) => {

        if (userSelected) {
            alert("Usuario actualizado!");
            axios.put(`http://144.126.218.162:9000/users/${userSelected.id}/`, data)
            .then(()=> getUsers())
            .catch(error => console.log(error.response));
          } else {
            axios
                .post(`http://144.126.218.162:9000/users/`, data)
                .then(()=> getUsers())
                .catch(error => console.log(error.response));
                alert("Usuario creado");
        }
        clear();
    };

    const clear = () => {
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: ""
        });
        deselectUser();
      };

    return (
        <form onSubmit={handleSubmit(submit)} className='form'>
            
            <h2>{userSelected ? "Actualizar usuario" : "Crear usuario"}</h2> 
            <div className='item'>
                <label htmlFor="first_name"><i className="fa-solid fa-user"></i></label>
                <input className='width' 
                    type="text" id='first_name' 
                    placeholder='Nombre'
                    {...register("first_name")}
                    />
                <input className='width' 
                    type="text" id='last_name' 
                    placeholder='Apellido'
                    {...register("last_name")}
                    />
            </div>

            <div className='item'>
                <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                <input className='width' 
                    type="email" id='email'
                    placeholder='Email'
                    {...register("email")}
                    />
            </div>

            <div className='item'>
                <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                <input className='width' type="password" 
                id='password'placeholder='Contraseña'
                {...register("password")}
                />
            </div>
            
           <div className='item'>
             <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
             <input className='width' type="date" 
             id='birthday'
             {...register("birthday")}
             />
           </div>

           <button onClick={clear} type="button">Limpiar</button>
           <button className='btn-add'>{userSelected ? "Actualizar usuario" : "Agregar nuevo usuario"}</button>
           
        </form>
    );
};

export default UsersForm;