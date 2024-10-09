import {useState} from 'react'

function Form(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();

    console.log(name,email,password,confirmPassword);

    const handleSubmit = ()=>{

        if(name && email && password && confirmPassword){
            if(password === confirmPassword)
            alert("Sign up Successfull");
            else{
                alert("Error: password and Confirm Password must be same");
            }
        }else{
            alert("All fields are required");
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text' onChange={(e)=>{setName(e.target.value)}} value={name} />
            <p >{name?"":"name is required"}</p>
            <br></br>

            <label>Email:</label>
            <input type='text'  onChange={(e)=>{setEmail(e.target.value)}}/>
            <p>{email?"":"email is required"}</p>
            <br></br>

            <label>Password:</label>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
            <p>{password?"":"password is required"}</p>
            <br></br>

            <label>Confirm Password:</label>
            <input type='password' onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
            <p>{confirmPassword?"":"confirm password is required"}</p>
            <br></br>

            <input type='submit' value="Sign up"/>
            </form>
        </div>
    )
}

export default Form;