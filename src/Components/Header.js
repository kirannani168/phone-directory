import React from "react";

const Header = function(){
    const headerStyle = {
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        padding: 20,
        textTransform: 'uppercase',
        fontSize:24,
        fontWeight: "bolder"
    }
    return(
        <div className="header" style={headerStyle}>
            Header
        </div>
    )
}

export default Header;