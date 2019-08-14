/* function component

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {  --using a capital const name is mandatory
  const [personsState, setPersonsState ] = useState({
    persons: [
      {name: 'abhi', age: '17'},
      {name: 'vishwa', age: '8'},
             ],
             someOtherState: 'this will be left untouched as only persons is being perged or updated'
          })

          const [otherState, setOtherState] = useState('some other value') --now this original use state will be untouched while merging

           const switchNameHandler = () => {
    setPersonsState({          ---while using useState in function component the second updated element overrides the 1st element, merging takes place only in class based component; 
      persons: [           
        {name: 'abhinav', age: '17'},
        {name: 'vishwavardhan', age: '8'},
               ]
    });
  };

      return (
          <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
          />
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
          >
            My Hobbies: Racing
          </Person>
          />
        </div>
    );
}

export default App;
*/