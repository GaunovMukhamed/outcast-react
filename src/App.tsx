import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login-page/login-page';
import { PrimeReactProvider } from 'primereact/api';
import './App.scss';
import { AxiosInterceptor } from './tools/axios.interceptor';
import { CharacterSelectionPage } from './pages/character-selection-page/character-selection-page';

function App() {
  return (
    <div className="App">
      <AxiosInterceptor>
        <PrimeReactProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/game">
                <Route path="characters" element={<CharacterSelectionPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </BrowserRouter>
        </PrimeReactProvider>
      </AxiosInterceptor>
    
    </div>
  );
}

export default App;
