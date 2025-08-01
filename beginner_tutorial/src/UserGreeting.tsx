function UserGreeting({isLoggedIn = false, username = "admin"}: props) {
    
    if (isLoggedIn){
        return (
        <div className="greeting">
            <h1 className="greeting-title">Welcome, {username}!</h1>
        </div>
    );
    }
    else {
        return (
        <div className="greeting">
            <h2 className="greeting-title-warning">Warning</h2>
            <p className="greeting-text">Please log in to continue.</p>
        </div>
    );
    }
    
    
    
}
type props = {
    isLoggedIn?: boolean;
    username?: string;
};
export default UserGreeting;