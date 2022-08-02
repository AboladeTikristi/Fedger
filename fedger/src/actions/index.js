const allUsers =(num)=>{
    // returns compulsorily an object
    return{
        type:"STORE",
        payload:num
    }
}
const presentUser =(data)=>{
    // returns compulsorily an object
    return{
        type:"KEEP",
        payload:data
    }
}
export{allUsers,presentUser}