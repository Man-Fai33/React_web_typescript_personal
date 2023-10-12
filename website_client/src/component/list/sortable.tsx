import { TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'

import { ReactSortable } from "react-sortablejs";
import User from '../../context/model/user';
import { ApiHelper } from '../../helper/api/apiHelper';
// class for data Types  
interface ItemType {
     id: number;
     name: string;
}

export default function Sortable() {


     const [users, setUsers] = useState<typeof User[]>()

     useEffect(() => {
          ApiHelper.AsyncAllUser().then(value => { setUsers(value.users) })
          console.log(users)


     }, [users === undefined])



     const [state, setState] = useState<ItemType[]>([
          { id: 1, name: "shrek" },
          { id: 2, name: "fiona" },
     ]);

     const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: number) => {
          const updatedState = state.map((item) => {
               if (item.id === id) { return { ...item, name: e.target.value }; }
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
          const newItem: ItemType = { id: Date.now(), name: "" }; setState([...state, newItem]);
     };

     return (
          <ReactSortable list={state} setList={setState}>
               {state.map((item, index) => (
                    <div key={item.id}>
                         <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue={item.name} onChange={(e) => handleInputChange(e, item.id)} />
                         <button onClick={() => handleDeleteClick(item.id)}>删除</button>
                         <button onClick={() => handleShowData(item.id)}>SHOW</button>
                    </div>
               ))}
               <button onClick={handleAddClick}>新增</button>
          </ReactSortable>
     )
}