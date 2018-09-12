import React from 'react'; 
import Card from './Card';

//pure function...only receives and returns using Props (inputs that never change)
const CardList = ({ robots }) => {
    // if(true) {
    //     throw new Error('NOOOO');
    // }
    
    return (
        <div> 
            {
                robots.map((user, i) => {
                    return  (
                        <Card 
                            key = {i} 
                            id = {robots[i].id} 
                            name = {robots[i].name} 
                            email = {robots[i].email}
                        />
                    );
                })  
            }
        </div>
    );
}

export default CardList; 