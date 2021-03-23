import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function User() {

    const [users, setUser] = useState([])
  
    useEffect(() => {
        loadUser();
        
       return ()=>{
           console.log("unmounting")
       }
    },[])

    const loadUser = async () => {
        await axios.get("http://localhost:3001/formdata/sign_up")
            .then((res) => {
                console.log('home data', res)
                const allData = res.data.formdata
                setUser(allData)

            })
            .catch((err) => { console.log(err) })
    }

    console.log(users)

    const renderTable=()=>  {
        return (
        // console.log("hello",users)
        users.map((user => {
            return (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            
          )  }))
        )
    }
    
    return (
        <div >
           {/* <button onClick={renderTable}>click</button>  */}

            <table class="table">
                <thead>
                    <tr>
                        
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {/* {users.map((user) => (
                      <tr>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                      </tr>
      ))} */}

{renderTable()}
                    
                </tbody>
            </table>
        </div>

    )
}
