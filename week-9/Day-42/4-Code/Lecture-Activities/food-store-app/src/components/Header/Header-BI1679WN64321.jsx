import "./Header.css"

const Header = () => {
  return (

    <header className="header">
        <div className="header-left">
            <h1>Food Store</h1>
            <p>Owner: Gershon Whitlock</p>
        </div>

        <div className="header-center">
            <p>Welcome to the Food Store!</p>
        </div>
        
        <div className="header-right">
            <nav aria-label="Main-Navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

  )
}

export default Header