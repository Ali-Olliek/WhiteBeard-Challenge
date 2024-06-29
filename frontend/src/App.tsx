import './App.css';
import BaseRoute from './navigation/BaseRoute';
import { ArticleScreen, HomeScreen } from './screens';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseRoute isProtected={false} />}>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/article' element={<ArticleScreen />} />
        </Route>
        <Route path='*' element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
