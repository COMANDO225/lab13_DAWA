const BookItem = ({ book }) => {
	const { title, authors, imageLinks, description, publishedDate } =
		book.volumeInfo;

	return (
		<>
			{imageLinks?.thumbnail && (
				<div className='libroItem'>
					<div className='bookImage'>
						<img
							src={imageLinks?.thumbnail}
							alt={title}
							draggable='false'
						/>
					</div>
					<div className='bookInfo'>
						<h2>{title}</h2>
						<br />
						<strong>Autor: </strong>
						{authors
							? authors.map((author, i) => (
									<p key={i}>{author}</p>
							  ))
							: "No hay autores"}
					</div>
				</div>
			)}
		</>
	);
};

export default BookItem;
