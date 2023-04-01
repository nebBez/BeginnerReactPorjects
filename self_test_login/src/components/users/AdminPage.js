import LogoutBtn from "./LogoutBtn";


const AdminPage =(props)=>{
    return(
        <div style={props.style}>
            <h1>Admin</h1>
            <LogoutBtn logOut={props.changeUser}/>
        </div>
    )
}

export default AdminPage;