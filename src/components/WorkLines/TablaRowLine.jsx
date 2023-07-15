const TablaRowLine = ({element, editData, deleteLine }) => { 

    return (        
      <tr className="tr-table-employes">
          <td>{element.id}</td>
          <td>{element.nameLine}</td>        
          <td>{element.amountWorkers}</td> 
          <td>
              <button onClick={() => editData(element)} className="btn btn-secondary" id="btn-edit-register">Edit</button>   
              <button className="btn btn-danger" onClick={()=>deleteLine(element.id)} id="btn-delete-register">Delete</button>          
          </td>
      </tr>  
    )
  }
  export default TablaRowLine