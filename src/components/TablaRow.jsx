const TablaRow = ({element, editData, deleteEmployee }) => { 

  return (        
    <tr className="tr-table-employes">
        <td>{element.id}</td>
        <td>{element.name}</td>        
        <td>{element.lastName}</td> 
        <td>{element.diasOff.toString()}</td> 
        <td>
            <button onClick={() => editData(element)} className="btn btn-secondary" id="btn-edit-register">Edit</button>   
            <button className="btn btn-danger" onClick={()=>deleteEmployee(element.id)} id="btn-delete-register">Delete</button>          
        </td>
    </tr>  
  )
}
export default TablaRow