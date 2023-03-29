import { useState } from "react";
import axios from 'axios';

const LoginForm = () =>{
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [errorMSG, setErrorMSG] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const authObject = { 'Project-ID': "b300964b-1479-4193-9fe2-cf97aedf361e", "User-Name": username, 'User-Secret': password}
    
        try{
            await axios.get('https://api.chatengine.io/chat', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        
            window.location.reload();
        } catch (error){
            setErrorMSG('Oops, incorrect credentials.')
        }
    }


    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" placeholder="Username" required type="text" value={username} onChange={(e)=> setUserName(e.target.value)}/>
                    <input className="input" placeholder="Password" required type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <div align="center">
                        <button className="button" type="submit">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{errorMSG}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;