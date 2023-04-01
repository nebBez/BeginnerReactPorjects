import {useState} from "react";


const LoginPage =(props)=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMSG, setErrorMSG] = useState("");


    const authenticator = (e)=>{
        e.preventDefault();

        //Admin
        if(username === props.user[0][0] && password === props.user[0][1]){
            localStorage.setItem("User", "Admin");
        }
        //User
        else if(username === props.user[1][0] && password === props.user[1][1]){
            localStorage.setItem("User", "User");
        }
        //Hacker
        else if(username === props.user[2][0] && password === props.user[2][1]){
            localStorage.setItem("User", "Hacker");
        }
        else{
            setErrorMSG('** Invalid username or password **');
            localStorage.setItem("User", "null");
        }
        props.changeUser(localStorage.getItem("User"));
        setUsername("");
        setPassword("");
    }

    // One solution; another is to write an anon function inline
//    const usernameHandler = (event)=>{
//        setUsername(event.target.value);
//    }

//    const passwordHandler = (event)=>{
//        setPassword(event.target.value);
//    }

    
    return(
        <div style={props.style}>
                <form onSubmit={authenticator}>
                    <input placeholder="Username" required type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <input placeholder="Password" required type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button>Sign in</button>
                    <span>{errorMSG}</span>
                </form>
        </div>
    )
}

export default LoginPage;