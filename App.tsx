import { ThemeProvider } from './src/context/ThemeContext';
import Home from './src/screens/Home';
import ThemeSwitcher from './src/screens/ThemeSwitcher';

export default function App() {
  return (
    <ThemeProvider>
      <Home/>
      <ThemeSwitcher/>
    </ThemeProvider>
  );
}

