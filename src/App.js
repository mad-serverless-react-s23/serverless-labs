import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Lord Glablok welcomes {user.username}</h1>
          <button onClick={signOut}>Sign Me Out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
