import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Bruh", "Bean", "Bob", "Battle Cats"];

  // items = [];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item active"
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
