import { useState } from "react";
import { useForm,} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {workLines} from '../../config/workLines.jsx';
import workersLines from '../../workersLines.json'; 
import Swal from 'sweetalert2'          
import TablaDataLines from "./TablaDataLines.jsx";



const WorkLines = () => {
  const navigate = useNavigate();
  const [workLine, setWorkLines]  = useState(workersLines);
  const {register,formState:{errors},handleSubmit, control} = useForm();
  const [editData, setEditData]= useState(null);  

  
  const initialForm = {
      id: null,        
      nameLine:'',
      amountWorkers: 0,  
  }
  const[form, setForm] = useState(initialForm)

  const handleForm =(data) =>{
    if(form.id === null){
      if(data.name !=='' || data.amountWorkers !==0 )
      { 
        createLine(data)
      }
      else{
          Swal.fire({
              title: 'Name Line and Amount are required fields',               
              icon: 'info',                
              })  
      }
  }
  else{                
      if(form.name !=='' || form.amountWorkers !==0 )
      {                    
          updateEmployee(editData)
      }
      else{
          Swal.fire({
              title: 'Name Line and Amount are required fields',               
              icon: 'info',                
              })  
      }
  }
  }
  const updateEmployee=(updateLine)=>{
    const updatedListLine = workLines.map(p => p.id === updateLine.id ? { ...p, nameLine: form.nameLine, amountWorkers: form.amountWorkers}: p); 
        setWorkLines(updatedListLine);
        clearInputs(); 
}
const handleCancel=()=>{  
    clearInputs();             
    navigate("/home");        
} 
  const handleInputChange = (evento) =>{                          
            const {name, value} = evento.target;
            setForm({
                ...form,
                [name]: value            
            });          
        } 

 
  const clearInputs =()=>{
    setForm(initialForm);  
    setEditData(null)    
} 
const createLine=(data)=>{ 
  const newLine ={  
      id: workLines.length >0 ? workLines[workLines.length-1].id + 1 : 1,           
      nameLine: data.nameLine,
      amountWorkers: data.amountWorkers
  }            
  //setWorkLines([...workLines,newLine]) 
  workersLines.push(newLine);
  setWorkLines([...workLines,newLine]);            
  Swal.fire({
      title: 'Registered user successfully',               
      icon: 'info',                
      })  
      clearInputs();
}     
  //delete Data
const deleteLine = (id) =>{
    Swal.fire({
        title: 'Are you sure deleted user?',            
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            //const listResult = employees.filter(el => el.id !== id)
            //setEmployees(listResult)  
            clearInputs();              
          Swal.fire(
            'Deleted!',
          )
        }
      })
} 
function editDataLine(element){        
    clearInputs();        
    Swal.fire({
        title: 'Are you sure update Line?',            
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {               
            setForm(element)                  
            setEditData(element)
        }                  
      })           
} 
  return (
    <>        
        <div className="container-register-line">
            <div className="register-employees-lines">
                <form className="form-register" onSubmit={handleSubmit(handleForm)}> 
                   <label className='employed-data'>Line data:</label>
                    <div className="input-group flex-wrap">                        
                        <span className="input-group-text" id="addon-wrapping">Name Line:</span>
                        <input type="text" {...register('nameLine')} className="form-control" name="nameLine" value={form.nameLine} onChange={handleInputChange} placeholder="Name" id="text-nameLine" aria-label="NameLine" aria-describedby="addon-wrapping" /> 
                        <span className="input-group-text" id="addon-wrapping">Amount People:</span>
                        <input type="number"  {...register('amountWorkers')} className="form-control" value={form.amountWorkers} onChange={handleInputChange}  name="amountWorkers" placeholder="Amount" id="text-amountPeople" aria-label="amountPeople" aria-describedby="addon-wrapping" /> 
                    </div>
                    {                        
                        (editData) ? (                          
                            <>
                            <button type="submit" className="btn btn-primary" id="btn-register">Editar</button>
                            <button type="button" className="btn btn-secondary" onClick={handleCancel} id="btn-cancel">Cancel</button>
                            </>
                        ): (
                            <>
                            <button type="submit" className="btn btn-primary" id="btn-register">Add Line</button>
                            <button type="button" className="btn btn-secondary" onClick={handleCancel} id="btn-cancel">Cancel</button>
                            </> 
                        )
                    }
                </form>
                {
                        workLine.length > 0 &&(
                            <>                               
                                <div className='data-employes'>
                                <h2>Lines of Work</h2>
                                <TablaDataLines data={workLine} editData = {editDataLine} deleteLine ={deleteLine} />                                 
                                </div>
                            </>
                        )
                    }

            </div>                          
        </div>        
        </>
  )
}

export default WorkLines