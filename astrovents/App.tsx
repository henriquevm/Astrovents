import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import Login from './src/sreens/Login';
import Start from './src/sreens/Start';
import Theme from './src/theme';


export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <StatusBar style="auto" />
        <Login />
      </ThemeProvider>
    </>

  );
}
