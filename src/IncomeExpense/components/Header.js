import React from 'react'


//Function Expression
const Header = (props) => {
    return (
        <div className="row d-flex justify-content-center mt-3">
            <h2>
                {props.title}
            </h2>
        </div>

    )
}

export default Header;
