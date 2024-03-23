import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login-page/login-page';
import { PrimeReactProvider } from 'primereact/api';
import './App.scss';
import { AxiosInterceptor } from './tools/axios.interceptor';
import { CharactersPage } from './pages/characters-page/characters-page';
import { GamePage } from './pages/game-page/game-page';
import { CharacterCreationPage } from './pages/character-creation-page/character-creation-page';
import { getLoginFromStorage } from './tools/general.tools';
import Protected from './tools/protectedRoute';

function App() {

  const authProtect = (component: React.ReactElement): React.ReactElement => {
    if(getLoginFromStorage()) {
      return component;
    } else {
      return <Navigate to="/login" replace />
    };
  }

  return (
    <div className="App">
      <AxiosInterceptor>
        <PrimeReactProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/game" element={<Protected><GamePage /></Protected>}>
                <Route path="characters" element={<CharactersPage />} />
                <Route path="create" element={<CharacterCreationPage />} />
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
