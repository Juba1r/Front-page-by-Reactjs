 function Navigation() {
    return (
        <div>

            <nav className="container">
                <div className="logo">
                    <img src="./images/brand_logo.png" alt="logo" />

                </div>
                <ul>
                    <li href="#">Home</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button className="nav-btn"> <a href='www.google.com' className="button">Login</a></button>
            </nav>

        </div>
    );
}

export default Navigation;