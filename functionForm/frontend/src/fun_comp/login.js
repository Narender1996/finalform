import Axios from 'axios';
import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Navbar from './Navbar'

function Login(){
  let history=useHistory();

  useEffect(()=>{
    if(localStorage.getItem('user-id'))
    {
      history.push('/home')
    }
  },[])

const [state,setState]=React.useState({
    email:"",
    password1:""
})
function inputchange(event){
      let nam=event.target.name;
      let val=event.target.value;

      setState({ ...state, [nam]: val });
}
  let onSubmit =async (event)=>{
    event.preventDefault();
    const {email,password1}=state;
    console.log(state)
  await Axios.post('http://localhost:3001/login',{email,password1})
   .then((res)=>{
     if(res.data.status)
     console.log('response data ',res)
      
      localStorage.setItem("user-id",JSON.stringify(res.data.msg))

      history.push('/home')})
   .catch((err)=>console.log(err))
  }
   return (
     <div>
     <Navbar />
           <form onSubmit={onSubmit}>
         email:
         <input type="email" name="email" value={state.email} onChange={inputchange}></input><br></br>
         Password:
         <input type="password" name="password1" value={state.password1} onChange={inputchange}></input><br></br>

         <input type="submit" name="login" value="Submit" /><br></br>
       </form>
     </div>
   )
}

export default Login;