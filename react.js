//in react we can create both functional and class based components

//react takes these attributes and gives us access on its receiving Component on an object named props

/*
props is used to render data dynamically from within the root component by accessing the passed attributes
props  allow you to pass data from a parent (wrapping) component to a child (embedded) component. 
The Person component receives the props  argument. You can of course name this argument whatever you want 
- it's your function definition, React doesn't care! But React will pass one argument to your component 
function => An object, which contains all properties you set up on <Post ... /> .

*/

/*
Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is 
used to change the component, well, state from within. Changes to state also trigger an UI update.
whereas state is used within a class component to define component internal data
state - only availabe for components which extend to components.
hooks are used in place of state in functional based components
*/

//if props or state is changed, react analyses the code and makes the required changes

//hooks allow you to manage state in functional components
//  -- it is a hook that returns an array with exactly 2 elements, the first element consists of the current state and the second consisits of a function with the updated state  -- it is a hook that returns an array with exactly 2 elements, the first element consists of the current state and the second consisits of a function with the updated state

//bundler - helps apply built steps such as compilation on next gen java code using babel

/*{(event) => this.switchNameHandler('Maximilian!!')} -- you can pass methods (that change state) as props 
in a component which does not have direct access to the state*/


//webpack helps bundle all front end code in a js file and makes it usable Webpack is a command line tool
// to create bundles of assets (code and files). Webpack doesn't run on the server or the browser. 
//Webpack takes all your javascript files and any other assets and transforms then into one huge file.
// This big file can then be sent by the server to a client's browser.