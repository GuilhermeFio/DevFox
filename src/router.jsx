import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing'
import NotFound from './pages/notfound'


export default function Navegacao(){

return(

<BrowserRouter>

<Routes>

<Route path= '/' element= {<Landing />} />

<Route path= '*' element= {<NotFound />}> </Route>
</Routes>
</BrowserRouter>


)

}