import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';
import { Menu } from './components/Menu/MenuComponent';
import { Item } from './components/ItemPage/ItemPage';
import { Order } from './components/Order/Order';
import { Careers } from './components/Careers/Careers';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/" element={<Layout />}>
          <Route path='careers' element={<Careers/>}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="menu/item=:id" element={<Item />}/>
          <Route path='order' element={ <Order /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
