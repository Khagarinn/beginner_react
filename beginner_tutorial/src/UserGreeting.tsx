function UserGreeting({isLoggedIn = false, username = "admin"}: props) {
    
    if (isLoggedIn){
        return (
        <div className="greeting">
            <h1 className="greeting-title">Welcome, {username}!</h1>
            <p className="greeting-text">We're glad to have you here.</p>
        </div>
    );
    }
    else {
        return (
        <div className="greeting">
            <h2 className="greeting-title">Warning</h2>
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