import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ageAge, setAgeAge]= useState(props.age);
    return (
        <div>
            <h2>{ props.name } </h2>
            <p> Age: { ageAge }{setAgeAge} </p>
            <p> { props.hair } </p>
            <button onClick={ (event) => setAgeAge(ageAge + 1) } > Birthday Button for {props.name} </button>
        </div>
    )
}

export default PersonCard;