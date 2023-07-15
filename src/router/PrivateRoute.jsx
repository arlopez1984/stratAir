import { Route } from "react-router-dom";

export default function PrivateRoute(props){
    return(
     <Route exact = {props.exact} path= {props.path} component={props.componente}></Route >
    )
}