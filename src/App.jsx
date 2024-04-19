import './App.css'
import {Route,Routes} from 'react-router-dom'
import HOMEPAGE from './component/HOMEPAGE'
import Languages from './component/Languages'
import NavBar from './component/NavBar'
import Card from './component/Card'
import About from './component/About'
import ErrorPage from './component/ErrorPage'
import Product from './component/Product'
import Product1 from './component/Product1'
import Product2 from './component/Product2'
import Product3 from './component/Product3'
import Student from './Student'
import Counter from './component/Counter'
function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HOMEPAGE />}/>
        <Route path='/Card' element={<Card/>}/>
        <Route path='/Counter' element={<Counter />}/>
        <Route path='/Languages' element={<Languages/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/student' element={<Student />}>
        <Route path='/student/:name' element={<Student />}/>
        </Route>
        <Route path='/product' element={<Product />}>
          <Route path='product1' element={<Product1/>}/>
          <Route path='product2' element={<Product2/>}/>
          <Route path='product3' element={<Product3/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>

      </Routes>
    </div>
  )
}

export default App        