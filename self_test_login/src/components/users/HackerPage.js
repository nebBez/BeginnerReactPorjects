import LogoutBtn from "./LogoutBtn";


const HackerPage =(props)=>{
    return(
        <div style={props.style}>
            <h1>Hacker</h1>
            <LogoutBtn logOut={props.changeUser}/>
        </div>
    )
}

export default HackerPage;