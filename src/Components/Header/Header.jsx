import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.header}>
            <a href="https://pespro.net/team/424-2/">

                <img id="img" src="https://pespro.net/wp-content/uploads/2020/05/424esports7-300x300.png"
                     alt="424image"/>
            </a>

            Hello 424

        </div>




    );
}

export default Header;