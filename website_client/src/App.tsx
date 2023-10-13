/* eslint-disable @typescript-eslint/no-use-before-define */
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import RouterList from './routers/routerlist'
import React, { useState, createContext } from 'react';
import { User } from './context/model/user';
import ContextProvide, { Context, _data } from './context/provider/user';
function App() {

  const [user, setUser] = useState<User | null>(null);




  return (
    <Context.Provider value={_data}>
      <BrowserRouter>
        <Routes>
          {RouterList.map(route => (
            <Route
              key={route.name}
              path={`/${route.name}`}
              element={route.element}
            />
          ))
          }
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
