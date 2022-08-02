import { presentUser } from "../actions";

const initState={
    allUsers:[],
    presentUser:{},
}
// const student =(state=initState,action)=>{
//     return state
// }
const counter=(state=initState,action)=>{
    if (action.type=="STORE") {
        return {
            // to retai  previous citizens of the state
            ...state,
            allUsers:action.payload,
        }
        
    }
    else if(action.type=="KEEP"){
        return{
            // to retai  previous citizens of the state
            ...state,
            presentUser:action.payload}
    }
    else{

        return state;
    }
}
export default counter;