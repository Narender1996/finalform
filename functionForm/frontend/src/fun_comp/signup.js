import React from 'react'
import  Axios from 'axios'
import {useHistory} from 'react-router-dom'

function Signup()
{
    let history=useHistory()
    const [state, setState]=React.useState({
  Name:"",
  Email:"",
  Address:'',
  Password1:'',
  Password2:''
    })

    function inputchange(event){
        //  console.log(event.target)
         let nam=event.target.name;
         let val=event.target.value;
         
        // let {namr,vale}=event.target;

        setState({...state,[nam]:val});
          
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        const {Name,Email,Address,Password1,Password2}=state;
        console.log(state)
        console.log('enter data',state)
      Axios.post('http://localhost:3001/sign_up',{Name,Email,Address,Password1,Password2}) 
        .then(res=>{
          if(res.data.status || res.data.newUser){
            history.push('/Login')
            console.log(res)
          }          
          }) 
        .catch(err=>{console.log(err)})
     }   
 
    return (
        <div>
        {console.log(state)}
            <h1>Signup Form</h1>

  <form onSubmit={onSubmit}>
            Name:
            <input type="text" name="Name" value={state.Name} onChange={inputchange} required={true}></input><br></br>
            Email:
            <input type="text" name="Email" value={state.Email} onChange={inputchange} required={true}></input><br></br>
            Address:
            <input type="text" name="Address" value={state.Adress} onChange={inputchange} required={true}></input><br></br>
            Password:
            <input type="text" name="Password1" value={state.Password1} onChange={inputchange} required={true}></input><br></br>
            Conform-password:
            <input type="text" name="Password2" value={state.Password2} onChange={inputchange} required={true}></input><br></br>

            <input type="submit" name="signup" value="Submit" /><br></br>
                      
        </form>
        </div>
      
    )
}

export default Signup
