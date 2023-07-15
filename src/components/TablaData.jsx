import TablaRow from './TablaRow'
const tablaData = ({data, editData, deleteEmployee}) => { 
    return (   
    <div>
      <table class="table table-striped">
        <thead>
        <tr>         
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>LastName</th>
          <th scope='col'>Off days</th>
          <th scope='col'>Actions</th>
        </tr>
        </thead>
        <tbody>         
         {
           data.length === 0 ? (<tr><td colSpan='3'>User unregister</td></tr>):(           
            data.map((el)=>             
              <TablaRow  
              editData = {editData}              
              deleteEmployee = {deleteEmployee}             
              key = {el.id}  
              element = {el}/>
                       ))}        
        </tbody>
      </table>
    </div>
  )
}

export default tablaData