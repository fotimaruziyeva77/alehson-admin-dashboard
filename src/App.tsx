
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import HomePage from './pages/home/homepage'
import Login from './components/login'

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme' >
      <Routes>
        <Route path='/' element={<HomePage/>} />
				<Route path='/login' element={<Login/>}></Route>
      </Routes>
		</ThemeProvider>
	)
}

export default App