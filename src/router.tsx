
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import FavoritesPage from './pages/FavoritesPage'
import BooksPage from './pages/BooksPage'
import AutorsPage from './pages/AutorsPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/Autors' element={<AutorsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
