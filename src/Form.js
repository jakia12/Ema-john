import React from 'react';
import './Form.css';
import validate from './validateInfo';
import useForm from './useForm';

const Form = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );

      //success messege after submitting the form

      function submitForm(){
        
        console.log('form submittes succesfully');
      };
  return (
    <div className='form-sec'>
        <div className="form-container"> 
        
            <form onSubmit={handleSubmit} className='form' noValidate> 
                <label htmlFor="">Name</label>
                <input 
                style={{
                    border:
                    errors.name ? '2px solid red'
                    : !values.name ? " " 
                    : !errors.name ? "2px solid green" :''
                }}
                type="text" 
                name="name"
                 id="" 
                 onChange={handleChange}
                 value={values.name}
           
                 />
                {errors.name && <p>{errors.name}</p>}
                <label htmlFor="">Email</label>
                <input 
                type="email" 
                
                name="email"
                
                value={values.email}
                onChange={handleChange}
                 />
                {errors.email && <p>{errors.email}</p>}   
                <label htmlFor="">Password</label>
                <input 
                type="password" 
                name="password"
                 id="" 
                 value={values.password}
                onChange={handleChange}
                 />
                {errors.password && <p>{errors.password}</p>}
                <label htmlFor="">Confirm password</label>
                <input 
                type="password" 
                name="password2"
                 id="" 
                 value={values.password2}
                onChange={handleChange}
                 />
                {errors.password2 && <p>{errors.password2}</p>}
                 <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default Form

