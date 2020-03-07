import React from "react";
import DropableLst from "./index";
import { Draggable } from "react-drag-and-drop";

export default { title: "Dropable List" };

const items = [
  { id: 1, name: "Item 1", type: "listitem" },
  { id: 2, name: "Item 2", type: "listitem" },
  { id: 3, name: "Item 3", type: "listitem" },
  { id: 4, name: "Item 4", type: "listitem" },
  { id: 5, name: "Item 5", type: "listitem" }
];

export const DropableList = () => (
  <div>
    <h2>Dropable list</h2>
    <DropableLst types={["listitem"]} value={[]}>
      {items}
    </DropableLst>
    <hr />
    <h3>Available items</h3>
    {items.map(item => (
      <Draggable
        key={item.id}
        type={item.type}
        data={JSON.stringify({
          name: item.name,
          id: item.id
        })}
      >
        {item.name}
      </Draggable>
    ))}
  </div>
);
