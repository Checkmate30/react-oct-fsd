import logo from './logo.svg';
import './App.css';

function HelloComponent(props) {

  const {name, standard} = props;

  console.log("debug props", props)


  // UI -> User interface 
  return (
  <>
    <div className='abcd'>
        Hello guys  my name is {name} and I study in asdasd {}.
    </div>

    <h1 className='heading'>
      asdasd
    </h1>
   </>
  );

  // return React.createElement("fragmenrt", {div, h1}, "Hello guys  my name is")
  // return React.createElement("h1", {}, "Hello guys  my name is")



  
}

export default HelloComponent;



/* JSX -> whatever is written inside the function return statement is converted to something like below
 React.createElement("div",{}, "hello Guys sasasas!")....

 In your jsx you can't return two roots.
*/


// Component -> HelloComponent function is a UI Component 


/*
  Props -> Are nothing but extra information provided to the component. 
*/

/*
  State -> But variable which needs to be stored

*/


