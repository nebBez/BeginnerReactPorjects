import LogoutBtn from "./LogoutBtn";


const UserPage =(props)=>{
    return(
        <div style={props.style}>
            <h1>User</h1>
            <LogoutBtn logOut={props.changeUser}/>
        </div>
    )
}

export default UserPage;