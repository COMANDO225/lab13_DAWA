import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BooksPage, HomePage } from "../pages";

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/libros' element={<BooksPage />} />
		</Routes>
	);
};
export default Router;
