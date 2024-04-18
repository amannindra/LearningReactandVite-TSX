import {MouseEvent} from "react";
import {useState} from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];
  const message = items.length === 0 ? <p>No item Found</p> : null;
  // OR
  const getMessage = () => {
    return items.length === 0 ? <p>No item Found</p> : null;
  };
  //const handleClick  = (event: MouseEvent) => console.log(event);
  //let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1)
  
  /*
  if (items.length === 0) {
    return (
      <>
        <h1>List</h1> <p>No item Found</p>
      </>
    );
  }*/
  return (
    <>
      <h1>hist</h1>
      {getMessage()}
      {message}
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className = {selectedIndex === index ? "list-group-item active": 'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
