import React from "react";
import '../Styles/Header.css'
const Header = function(props){
    // const headerStyle = {
    //     textAlign: "center",
    //     backgroundColor: "black",
    //     color: "white",
    //     padding: 20,
    //     textTransform: 'uppercase',
    //     fontSize:24,
    //     fontWeight: "bolder"
    // }
    return(
        <div className="header">
            {props.heading}
        </div>
    )
}

export default Header;