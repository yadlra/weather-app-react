import React, {useState} from 'react';



// class Titles extends React.Component {
//   render() { //this is the state? state > data we import to show user
//     return (
//       <div>
//         <h1 className="title-container__title">Weather Now</h1>
//         <h3 className="title-container__subtitle"> Find out weather conditions wherever you are...</h3>
//       </div>
//     );
//   }
// };

// export default Titles;  THIS IS A STATEFUL = CLASS COMPONENT 

const Titles = () => {
  return (
    <div>
        <h1 className="title-container__title">Weather Now</h1>
        <h3 className="title-container__subtitle"> Find out weather conditions wherever you are...</h3>
      </div>
  ) 
}

export default Titles; //THIS IS A STATELESS = FUNCTIONAL COMPONENT >> 
// So HOOKS are this type of component but with state!! lol

//> 1 State Hooks - possible to add state to functional components which are initially stateless
//> 2 Effect Hooks - can add code to these which is then executed in response to component's lifecycle events
