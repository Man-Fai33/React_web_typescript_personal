import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import RouterList from './routers/routerlist'
import React, { useState } from 'react';
import User from './context/model/user';
function App() {

  const [user, setUser] = useState<typeof User>()
  const _data = {
    user: user
  }
  return (
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
  );
}

export default App;
