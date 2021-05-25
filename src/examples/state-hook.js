//class, stateless function component
//state, lifecycle for class

// React 16.8 function component + hook statefull function component

import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0,
//             text: ''
//         }
//     }
//     componentDidMount(){
//         console.log("component did mount")
//     }
//     componentDidUpdate(){
//         console.log("component did update")
//     }
//   render() {
//     return (
//     <div>
//     <p>Butona {this.state.count} kez tıkladınız</p>
//     <button onClick={()=>this.setState({count: this.state.count +1})}>+1</button>
//     </div>);
//   }
// }

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  //text
  useEffect(() => {
    console.log("text");
  }, [text]);

  //count
  useEffect(() => {
    console.log("count");
    localStorage.setItem("count", count);
  }, [count]);

  //Componentdidmount
  useEffect(() => {
    console.log("compnentdidmount");
    const countData = localStorage.getItem("count");
    if (countData) {
      setCount(Number(countData));
    }
  }, []);
  //componentdidmount, componentdidupdate
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div>
      <p>Butona {count} kez tıkladınız</p>
      <p>girilen text: {text}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

App.defaultProps = {
  count: 5,
  text: "",
};

// function App(props) {
//   return <div>function component</div>;
// }

ReactDOM.render(<App></App>, document.getElementById("root"));
