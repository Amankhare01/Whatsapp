import './App.css';
import Messenger from './component/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Accountprovider from './component/context/Accountprovider';
function App() {
  const clientId='549401463078-p6cguo6i1oupbkb6oqh7qlna31ue53un.apps.googleusercontent.com';
  return (

    <GoogleOAuthProvider clientId={clientId}>
      <Accountprovider>
      <Messenger/>
      </Accountprovider>
    </GoogleOAuthProvider>
  );
}

export default App;
