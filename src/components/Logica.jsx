
import { Button } from 'bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"
import { useState } from 'react';


function Logica() {
    
    const { register, handleSubmit ,formState:{errors}} = useForm();
    const [array,setarray]=useState([])
    // const[local,setlocal]=useState
    localStorage.setItem("Formulario",JSON.stringify(array))
       
    
    

    const agregar=(data,e)=>{
          e.preventDefault()
            e.target.reset()

        let citas={
            nombre:data.nombre,
            apellido:data.apellido,
            dni:data.dni,
            email:data.email,
           
        
        }
        setarray([citas,...array])
     alert("Datos Enviados Con Exito")

        
    }
    console.log(array)

    
  return (
    <>
    <Form onSubmit={handleSubmit(agregar)}>
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre"
        className="container mb-3 my-3 "
      >
        <Form.Control type="text" placeholder="Nombre" name='nombre' {...register("nombre",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Nose puede Especificar Nombre"},
           
        })} />
         <span className='text-danger' >{errors.nombre&&errors.nombre.message}</span> 
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword" label="Apellido" className='container'>
        <Form.Control type="text" placeholder="Apellido"  name='apellido' {...register("apellido",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"No se puede espesificar Apellido"}
        })}/>
        <span className='text-danger' >{errors.apellido&&errors.apellido.message}</span> 
      </FloatingLabel>

      <FloatingLabel label="DNi" className='container my-3' >
        <Form.Control type='number' placeholder='DNI' name='dni' {...register("dni",{
            required:{value:true,message:"Escriba el Dni"}
        })}/>
        <span className='text-danger' >{errors.dni&&errors.dni.message}</span> 
      </FloatingLabel>

      
      
      <FloatingLabel label="Email" className='container my-3'>
        <Form.Control type='email' placeholder='Email' name='email'{...register("email",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Sea mas especifico"}
        })}></Form.Control>
        <span className='text-danger' >{errors.email&&errors.email.message}</span> 
      </FloatingLabel>
      <div className='d-flex justify-content-center '>
        <button className='buttonenviar btn btn-primary my-3' type='Submit'>Enviar Formulario</button>
      </div>
     
      </Form>
      
       
      
    </>
  );
}
export default Logica