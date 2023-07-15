import TablaRowLine from './TablaRowLine'
const TablaDataLines = ({data, editData, deleteLine}) => { 
    return (   
    <div>
      <table class="table table-striped">
        <thead>
        <tr>         
          <th scope='col'>Id:</th>
          <th scope='col'>Name Line:</th>
          <th scope='col'>Amount Workers:</th>         
        </tr>
        </thead>
        <tbody>         
         {
           data.length === 0 ? (<tr><td colSpan='3'>Lines unregister</td></tr>):(           
            data.map((el)=>             
              <TablaRowLine  
              editData = {editData}              
              deleteLine = {deleteLine}             
              key = {el.id}  
              element = {el}/>
                       ))}        
        </tbody>
      </table>
    </div>
  )
}

export default TablaDataLines