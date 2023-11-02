import React from 'react';
 function Header(props){
    console.log({props});
return(
    <h1 align="center">Header Content Here...{props.name}.,</h1>
)
}
export default Header;