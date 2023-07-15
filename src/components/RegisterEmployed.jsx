import { useState, useRef, useContext, useEffect} from 'react'
import {employeesRegistered} from '../config/employeesRegistered.jsx'
import TablaData from './TablaData.jsx'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { AuthContext } from "../contexts/AuthContext.jsx"



const RegisterEmployed = () => {    
    const countDaysOff = useRef(0);  
    const navigate = useNavigate();
    const [employees, setEmployees]  = useState(employeesRegistered);
    const[checkedValues,setCheckedValues] = useState([])
    const {register,formState:{errors},handleSubmit, control} = useForm();
    const [editData, setEditData]= useState(null);
    const {userLogin,setUserLogin} = useContext(AuthContext); 

    const initialForm = {
        id: null,        
        name:'',
        lastName: '',  
        diasOff: []   
    }
    //for BD
    useEffect(()=>{

    },[])
    const[form, setForm] = useState(initialForm)

    const handleInputChange = (evento) =>{                          
            const {name, value} = evento.target;
            setForm({
                ...form,
                [name]: value            
            });          
        } 
    //checkboxs   
    const handleChangeCheckbox=(evento)=>{                         
        if(evento.target.checked)
        {            
            if(countDaysOff.current < 2)
            {             
                setCheckedValues(pre => [...pre, evento.target.value]) 
                countDaysOff.current = countDaysOff.current +1
            }
            else{
                evento.target.checked = false;
                Swal.fire({
                    title: 'Only two days off!!',               
                    icon: 'info',                
                    })
            }                  
        }
        else{         
            setCheckedValues(pre => {                
                return [...pre.filter(dia => dia !== evento.target.value)]})            
                countDaysOff.current = countDaysOff.current -1                                     
        }
    }

    const handleForm = (data) =>{                      
        if(countDaysOff.current ===2)
        {            
            if(form.id === null){
                if(data.name !=='' || data.lastName !=='' )
                { 
                    createEmployee(data)
                }
                else{
                    Swal.fire({
                        title: 'Name and Surname are required fields',               
                        icon: 'info',                
                        })  
                }
            }
            else{                
                if(form.name !=='' || form.lastName !=='' )
                {                    
                    updateEmployee(editData)
                }
                else{
                    Swal.fire({
                        title: 'Name and Surname are required fields',               
                        icon: 'info',                
                        })  
                }
            }
        }
        else{
            Swal.fire({
            title: 'Only two days off',               
            icon: 'info',                
            }) }           
        
        } 
    const createEmployee=(data)=>{ 
        const newEmployes ={  
            id: employees.length >0 ? employees[employees.length-1].id + 1 : 1,           
            name: data.name,
            lastName: data.lastName,
            diasOff:checkedValues
        }            
        setEmployees([...employees,newEmployes])            
        Swal.fire({
            title: 'Registered user successfully',               
            icon: 'info',                
            })  
            clearInputs();
    }
    const updateEmployee=(employeeUpdate)=>{
        const updatedListEmployed = employees.map(p => p.id === employeeUpdate.id ? { ...p, name: form.name, lastName: form.lastName, diasOff: checkedValues}: p); 
            setEmployees(updatedListEmployed);
            clearInputs(); 
    }
    const handleCancel=()=>{  
        clearInputs();             
        navigate("/home");        
    } 
    const clearInputs =()=>{       
        document.getElementById('inlineCheckbox1').checked = false;
        document.getElementById('inlineCheckbox2').checked = false;
        document.getElementById('inlineCheckbox3').checked = false;
        document.getElementById('inlineCheckbox4').checked = false;
        document.getElementById('inlineCheckbox5').checked = false;
        document.getElementById('inlineCheckbox6').checked = false;
        document.getElementById('inlineCheckbox7').checked = false;
        setForm(initialForm);
        setCheckedValues([]);
        setEditData(null)
        countDaysOff.current  = 0;
    }      
      //delete Data
    const deleteEmployee = (id) =>{
        Swal.fire({
            title: 'Are you sure deleted user?',            
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const listResult = employees.filter(el => el.id !== id)
                setEmployees(listResult)  
                clearInputs();              
              Swal.fire(
                'Deleted!',
              )
            }
          })
    } 
    function editDataEmploye(element){        
        clearInputs();        
        Swal.fire({
            title: 'Are you sure update user?',            
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {               
                setForm(element)
                /*setForm({
                    id: element.id,        
                    name: element.name,
                    lastName: element.lastName,  
                    diasOff: element.diasOff                      
                })  */               
                setEditData(element)                              
                countDaysOff.current = element.diasOff.length;               
                element.diasOff.forEach(element => {
                    setCheckedValues(pre => [...pre, element])                    
                    switch (element) {
                        case 'Sunday':
                        document.getElementById('inlineCheckbox1').checked = true; 
                        break ; 
                        case 'Monday':                                              
                        document.getElementById('inlineCheckbox2').checked = true;
                        break ;   
                        case 'Thuesday':                     
                        document.getElementById('inlineCheckbox3').checked = true;
                        break ;   
                        case 'Wednesday': 
                        document.getElementById('inlineCheckbox4').checked = true;
                        break ;   
                        case 'Thursday': 
                        document.getElementById('inlineCheckbox5').checked = true;
                        break ;   
                        case 'Friday': 
                        document.getElementById('inlineCheckbox6').checked = true; 
                        break;    
                        case 'Saturday':                         
                        document.getElementById('inlineCheckbox7').checked = true; 
                        break
                    }
                });
            }                  
          })           
    } 
   
     
    return (
        <>        
        <div className="container-register">
            <div className="register-employees">
                <form className="form-register" onSubmit={handleSubmit(handleForm)}> 
                   <label className='employed-data'>Employee data:</label>
                    <div className="input-group flex-wrap">                        
                        <span className="input-group-text" id="addon-wrapping">Name:</span>
                        <input type="text" {...register('name')} className="form-control" name="name" value={form.name} onChange={handleInputChange} placeholder="Name" id="text-name" aria-label="Username" aria-describedby="addon-wrapping" />
                        {
                            errors.name?.type==='required' &&(                                
                                <p className='required-field'>*</p>
                            )
                        }
                        <span className="input-group-text" id="addon-wrapping2">Last Name:</span>
                        <input type="text" {...register('lastName')} className="form-control" name="lastName" value={form.lastName} placeholder="Last name"  onChange={handleInputChange} id="text-lastName"  aria-label="Username" aria-describedby="addon-wrapping"/>
                        {
                            errors.lastName?.type==='required' &&(
                                <p className='required-field'>*</p>
                          )
                        }
                    </div>                   
                    <div className="select-day-off">Select days off</div>                                     
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" {...register('checkSunday')}  type="checkbox" onChange={handleChangeCheckbox}  id="inlineCheckbox1" value='Sunday'/>Sunday                       
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" {...register('checkMonday')} type="checkbox" onChange={handleChangeCheckbox} id="inlineCheckbox2" value='Monday' />Monday
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" {...register('checkThuesday')}  type="checkbox"  onChange={handleChangeCheckbox} id="inlineCheckbox3" value='Thuesday'/>Thuesday
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" {...register('checkWednesday')}  type="checkbox"  onChange={handleChangeCheckbox} id="inlineCheckbox4" value='Wednesday' />Wednesday
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" {...register('checkThursday')}   type="checkbox"   onChange={handleChangeCheckbox} id="inlineCheckbox5" value='Thursday'/>Thursday
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" {...register('checkFriday')}   type="checkbox"  onChange={handleChangeCheckbox} id="inlineCheckbox6" value='Friday' />Friday
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" {...register('checkSaturday')}  type="checkbox" onChange={handleChangeCheckbox} id="inlineCheckbox7" value='Saturday'/>Saturday <br/>
                    </div>
                    <div>
                    {                        
                        (editData) ? (                          
                            <>
                            <button type="submit" className="btn btn-primary" id="btn-register">Editar</button>
                            <button type="button" className="btn btn-secondary" onClick={handleCancel} id="btn-cancel">Cancel</button>
                            </>
                        ): (
                            <>
                            <button type="submit" className="btn btn-primary" id="btn-register">Register</button>
                            <button type="button" className="btn btn-secondary" onClick={handleCancel} id="btn-cancel">Cancel</button>
                            </> 
                        )
                    }  
                    </div>
                </form>
                {
                        employees.length > 0 &&(
                            <>                               
                                <div className='data-employes'>
                                <h2>List of Employees</h2>
                                <TablaData data={employees} editData = {editDataEmploye} deleteEmployee ={deleteEmployee} />                                 
                                </div>
                            </>
                        )
                    }
            </div>                          
        </div>        
        </>
        
       
                 
       
    )
  }
  
  export default RegisterEmployed