import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import BooksPage from "./pages/BooksPage";
import AuthorsPage from "./pages/AutorsPage";
import Layout from "./Layouts/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />

          <Route path="/books" element={<BooksPage />} />
          <Route path="/autors" element={<AuthorsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
