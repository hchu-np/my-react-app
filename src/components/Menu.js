// import React here
import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div class="top-bot-border menu">
                <span class="menu-icons">
                    <a style={{ marginLeft: '50px' }}><img class="icon-button" src="/assets/icons/hamburger.svg" alt="Menu"></img></a>
                </span>
                <nav>
                    <ul>
                        <li><a href="#">キャンペーン</a></li>
                        <li><a href="#">お店</a></li>
                        <li><a href="#">ポイント</a></li>
                        <li><a href="#">読みもの</a></li>
                    </ul>
                </nav>
                <span class="menu-icons">
                    <a><img class="icon-button" src="/assets/icons/search.svg" alt="Search"></img></a>
                    <a style={{ marginRight: '50px' }}><img class="icon-button" src="/assets/icons/profile.svg" alt="Login"></img></a>
                </span>
            </div>

        );
    }
}

export default Menu;