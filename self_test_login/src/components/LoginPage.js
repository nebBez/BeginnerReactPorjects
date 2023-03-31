import {useState} from "react";


const LoginPage =(props)=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMSG, setErrorMSG] = useState("");


    const authenticator = (e)=>{
        e.preventDefault();


        if(username === props.user[0][0] && password === props.user[0][1]){
            localStorage.setItem("Admin", 1);
        }
        else if(username === props.user[1][0] && password === props.user[1][1]){
            localStorage.setItem("User", 1);
        }
        else if(username === props.user[2][0] && password === props.user[2][1]){
            localStorage.setItem("Hacker", 1);
        }
        else{
            setErrorMSG('** Invalid username or password **');
        }
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
        <div className="container">
            <div>
                <form onSubmit={authenticator}>
                    <input placeholder="Username" required type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <input placeholder="Password" required type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button>Sign in</button>
                    <span>{errorMSG}</span>
                </form>
            </div>
            
        </div>
    )
}

export default LoginPage;