import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'

export function Router () {
    return(
        <Routes>
            <Route path='/Coffee-Delivery/' element={<DefaultLayout/>}>
                <Route path='/Coffee-Delivery/' element={<Home/>}/>
                <Route path='/Coffee-Delivery/checkout' element={<Checkout/>}/>
                <Route path='/Coffee-Delivery/success' element={<Success/>}/>
            </Route>
        </Routes>
    )
}