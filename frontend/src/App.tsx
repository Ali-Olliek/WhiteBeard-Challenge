import './App.css';
import BaseProvider from './context/Base';
import BaseRoute from './navigation/BaseRoute';
import { ArticleScreen, HomeScreen } from './screens';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BaseProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseRoute isProtected={false} />}>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/article' element={<ArticleScreen />} />
          </Route>
          <Route path='*' element={<>404</>} />
        </Routes>
      </BrowserRouter>
    </BaseProvider>
  );
}

export default App;
