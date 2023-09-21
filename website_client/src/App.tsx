import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import RouterList from './routers/routerlist'

function App() {
  const _data = {
   
  }
  return (
    <BrowserRouter>
      <Routes>
        {RouterList.map(route => (
          <Route
            key={route.name}
            path={`/${route.name}`}
            element={<route.component />}
          />
        ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
