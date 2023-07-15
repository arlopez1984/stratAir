import { useContext } from 'react';
import WorkLinesComp from '../components/WorkLines/WorkLines';
import { AuthContext } from '../contexts/AuthContext';

const WorkLines = () => {  
    const {userLogin} = useContext(AuthContext); 
    return (
        <>
            {userLogin.name !== '' &&(
            <>         
                <h6><strong>Active admin :</strong> "{userLogin.name} {userLogin.lastname}"</h6>  
                <WorkLinesComp/>          
            </>                  
            )
            }
             <div>
                you dont acces!!!
            </div>
                  
        </>
    )

}

export default WorkLines