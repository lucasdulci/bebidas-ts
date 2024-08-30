import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPages } from "./pages/IndexPages";
import { FavoritesPage } from "./pages/FavoritesPage";
import { Layout } from "./layouts/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<IndexPages/>} index/>
            <Route path="/favoritos" element={<FavoritesPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};
