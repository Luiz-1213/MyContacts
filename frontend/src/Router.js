import { Route, Routes } from 'react-router-dom';

import EditCategory from './pages/EditCategory';
import EditContact from './pages/EditContact';
import Home from './pages/Home';
import ListCategories from './pages/ListCategories';
import NewCategory from './pages/NewCategory';
import NewContact from './pages/NewContact';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<ListCategories />} />
      <Route path="/contact/new" element={<NewContact />} />
      <Route path="/category/new" element={<NewCategory />} />
      <Route path="/contact/edit/:id" element={<EditContact />} />
      <Route path="/category/edit/:id" element={<EditCategory />} />
    </Routes>
  );
}
