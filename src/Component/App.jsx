import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {


  return (
    <>
      <div>
        <Header/>
        </div>
    </>
  )
}

export default App;







// import React, { Components } from 'react';
// class Car extends React.Component {
//     constructor() {
//       super();
//       this.state = {color: ""};
//     }
//     render() {
//       return <h2>Api{this.state.color}</h2>;
//     }
//   }
//   export default Car;  

// import React from "react";

// const Header=(props)=>{

//   // console.log('Header props:', props);
   

//   return(
//      <> 
//      <h5>Receiving  Data From Parrent Class</h5>
//      <h2>Api Data :{props.item ? props.item.title : "No Data Yet"}</h2>
//      </>
//   )
// }


// export default Header;


// import React from "react";

// const Header = ({ item }) => {  
//   console.log('Header props:', item);

//   return (
//     <>
//       <h5>Receiving Data From Parent Component</h5>
//       <h2>Api Data: {item ? item.title : "No Data Yet"}</h2>
//     </>
//   );
// };

// export default Header;











// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Header.jsx';
// import Api from './Api.jsx';
// import Parent from './Parent.jsx';
// import Car from './components/Car'; 


// function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //   <h2>Heading</h2>
  //    <Header />
  //    <Api/>
  //    <Parent/>
     
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
//     </>
//   )
// }

// export default App;
