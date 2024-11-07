
import './App.css'
import { MainFooter } from './components/MainFooter/MainFooter'
import { MainNav } from './components/MainNav/MainNav'
import { Home } from './page/Home/Home'

function App() {

  return (
    <>
    <MainNav listPage={['features', 'pricing', 'resources']}/>
    <Home/>
    <MainFooter/>
    </>
  )
}

export default App
