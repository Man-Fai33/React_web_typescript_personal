import React, { useState } from 'react'


import { ReactSortable } from "react-sortablejs";

interface ItemType {
     id: number;
     name: string;
}

export default function Sortable() {
     const [state, setState] = useState<ItemType[]>([
          { id: 1, name: "shrek" },
          { id: 2, name: "fiona" },
     ]);
     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
          const updatedState = state.map((item) => {
               if (item.id === id) {
                    return { ...item, name: e.target.value };
               }
               return item;
          });
          setState(updatedState);
     };

     const handleDeleteClick = (id: number) => {
          const updatedState = state.filter((item) => item.id !== id);
          setState(updatedState);
     };

     const handleShowData = (id: number) => {
          const selectedItem = state.find((item) => item.id === id);
          if (selectedItem) {
               alert(`Item ID: ${selectedItem.id}, Name: ${selectedItem.name}`);
          }
     };


     const handleAddClick = () => {
          const newItem: ItemType = { id: Date.now(), name: "" };
          setState([...state, newItem]);
     };
     return (<ReactSortable list={state} setList={setState}>
          {state.map((item, index) => (
               <div key={item.id}>
                    <input
                         type="text"
                         value={item.name}
                         onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <button onClick={() => handleDeleteClick(item.id)}>删除</button>
                    <button onClick={() => handleShowData(item.id)}>SHOW</button>
               </div>
          ))}
          <button onClick={handleAddClick}>新增</button>
     </ReactSortable>
     )
}