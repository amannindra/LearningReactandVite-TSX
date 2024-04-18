import ListGroup from "./components/ListGroup";
import ButtonIncrease from "./components/EasyTimer";
import styled from 'styled-components';
import * as React from "react";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

const Button = styled.button`
background-color: skyblue;
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
border: 0; 
text-transform: uppercase;
margin: 10px 0px;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: ease background-color 250ms;
`;

const {useState} = React;
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <ListGroup/>
      <div>
        <button type="button" onClick={() => {
          setCounter(counter + 1)
        }}>Not Part of Tutorial, Increase Counter: {counter}</button>
      </div>
    </div>
  );
}
export default App;
