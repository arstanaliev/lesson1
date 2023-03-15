import React from "react";
import logo from "../img/Rectangle.png"
import {useState} from "react";

const Header = () => {
    const [background, setBackground] = useState(true)
    return (
        <header id="header"  style={{
            background: background ? '#070707' : 'blue'
        }}>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="header-menus">
                        <div className="header-menu">
                            <a href="">Home</a>
                            <a href="">Recipes</a>
                            <a href="">Meat</a>
                            <a href="">About</a>
                            <a href="">Blog</a>
                            <a href="">Support</a>
                        </div>
                        <div className="header-buttons">
                            <button onClick={() => setBackground(!background)}>Sign in</button>
                            <button>Request demo</button>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;