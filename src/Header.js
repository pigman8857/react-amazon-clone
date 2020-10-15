import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <nav className="header">
            {/**Logo on the left */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>

            {/**Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>



            {/**3 links */}

            {/**Basket Icon  with Number*/}
        </nav>
    );
}

export default Header
