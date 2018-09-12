import React from 'react'; 

//children example 
//all component in react has children props
const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    ); 
}

export default Scroll; 