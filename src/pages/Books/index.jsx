import { BookItem } from "../../components";

import { useAtom } from "jotai";
import { searchAtom, booksAtom } from "../../atoms/booksAtoms";

const BooksPage = () => {
	const [search] = useAtom(searchAtom);
	const [books, setBooks] = useAtom(booksAtom);

	return (
		<>
			<h1>Libros: {search}</h1>
			<div className='gridLibros_masna'>
				{books.length > 0 &&
					books.map((book, i) => <BookItem key={i} book={book} />)}
			</div>
		</>
	);
};

export default BooksPage;
