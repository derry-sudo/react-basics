import logo from './logo.svg';
import './App.css';
import Derry from './components/Derry';
import Greeting from './components/Greeting'; 
import { FirstComponent as FC, SeComponent as SC} from './components/MyComponent';
import MC from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student'; 
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
import ConditionRendering from './components/ConditionRendering';

function App() {
  // const student ={
  //   name : "Deriba",
  //   lastName :"Adimasu",
  //   email: "deriba@gmail.com"
  // }
  const skills =['CSS,','HTML,','JS,', 'JSON,','JSX']
  return (
    <div className="App">
     {/* <Greeting name = "gadisa"/>
     <Greeting name = "Fedesa"/>
     <Greeting name = "Hambisa"/>
     <Greeting name = "Namomsa"/>
     <FC/>
     <SC/>
     <MC/> */}
     {/* <HelloWorld/> */}
     {/* <Student
     data ={skills}
     /> */}
     {/* <Student
     name = "Gadisa"
     lastName = "Fufaa"
     email= "gadisa@gmail.com"
     /> */}
     {/* <Employee/> */}
     {/* <User/> */}
     {/* <EventHandling/> */}
     <ConditionRendering/>
    </div>
  );
}

export default App;
