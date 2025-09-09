
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import HomePage from './pages/home/homepage'

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme' >
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
		</ThemeProvider>
	)
}

export default App