// import logo from './logo.svg';
import './App.css';
import React from 'react';
import emoji from './emoji.svg';
import Instructions from './Instructions';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];
function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      {displayAction && <p>I am writing to you</p>}
      <Instructions />
      <Instructions />
      <Instructions />ei-ei
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
// function App() {
//   const greeting = "greeting";
//   const displayAction = false;
//   return(
//     <div className="container">
//       <h1 id={greeting}>Hello, World</h1>
//       {displayAction && <p>I am writing JSX</p>}
//       <ul>
//         {
//           emojis.map(emoji => (
//             <li key={emoji.name}>
//               <button
//                 onClick={displayEmojiName}
//               >
//                 <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
//               </button>
//             </li>
//           ))
//         }
//       </ul>
    
//     </div>
//   )
// }

// export default App;

// class Toolbar extends React.Component { 
//   render() {
//     return (
//     <div style={{ background: 'cyan', padding: 10 }}>
//       {this.props.children} </div>
//     ); }
//   }

// class Item extends React.Component{
//   render(){
//     return (
//       <li>
//         {this.props.name},
//         ${this.props.price}
//       </li>
//     );
//   }
// }

// class App extends React.Component{
//   state = {
//     items: [






// //         { id: 1, name: 'Apple', price: 0.99 },
// //         { id: 2, name: 'Orange', price: 0.89 },
// //   ] }
// //   nameRef = React.createRef();
//   priceRef = React.createRef();

  // add = () => {
  //   let id = this.state.items.length + 1; this.setState({
  //     items: [
  //         ...this.state.items,
  //         { id, name: `Item ${id}`, price:  0.01 * id  }
  //     ]
  // }); }
  // add = () => {
  //   let id = this.state.items.length + 1; 
  //   let name = this.nameRef.current.value; 
  //   let price = this.priceRef.current.value;
  //   this.setState({ items: [
  //                    ...this.state.items,
  //                    { id, name, price }
  //                ]
  //   }); }
    
  // render(){
  //   return (
  //     <div>
  //       <Toolbar>
  //         <h1>Hello React</h1>
  //         <h2>Component composition</h2>
  //       </Toolbar>
  //     </div>
      // <div>
      //   <h1>Hello React</h1>
      //   <ul>
      //     {this.state.items.map(i => { return (
      //       <Item id={i.id} name={i.name} price={i.price} />
      //   )
      //     })} 
      //     </ul>
          
      //     <input type="text" ref={this.nameRef} /><br />
      //     <input type="text" ref={this.priceRef} /><br />
      //     <button onClick={this.add}>Add</button>
// </div>
//     )

//   }
// }
// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
