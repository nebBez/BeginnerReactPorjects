

const LogoutBtn = (props) =>{
    const buttonHandler = () =>{
        localStorage.setItem("User", "null");
        props.logOut("null");
    }
    return(
        <div>
            <button onClick={buttonHandler}>Log out</button>
        </div>
    )
}

export default LogoutBtn