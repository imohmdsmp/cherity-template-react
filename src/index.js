import React from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './pages/index'
import Donate from './pages/donate'
import News from './pages/news'
import NewDetails from './pages/newDetails'
import NotFound from './pages/notFound'
import Menu from './pages/global/menu'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/templatemo-kind-heart-charity.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


function Main(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu />}>
                    <Route index element={<Index />} />
                    <Route path='Donate' element={<Donate />} />
                    <Route path='News' element={<News />} />
                    <Route path='NewDetails' element={<NewDetails />} />
                    <Route path='NotFound' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


let Exit = ReactDom.createRoot(document.getElementById('root'))

Exit.render(<Main />)