import { useMatch } from "react-router";
import AsideMenu from "../components/AsideMenu";
import GitHubIcon from "../components/icons/GitHubIcon";
import SendIcon from "../components/icons/SendIcon";
import { useState, useEffect } from "react";
import { searchBooks } from "../services";
import { useAtom } from "jotai";
import { booksAtom, menuAtom, searchAtom } from "../atoms/booksAtoms";

const MainLayout = ({ children }) => {
	const isInicioRouter = useMatch("/");
	const [search, setSearch] = useAtom(searchAtom);
	const [books, setBooks] = useAtom(booksAtom);
	const [loading, setLoading] = useState(false);
	const [Alee, setAlee] = useState(false);
	const listParaAlee = ["❤️", "💕", "💘", "💖", "💓", "💞", "🥵"];
	const [mensajeLove, setMensajeLove] = useState(listParaAlee[0]);

	const [menu, setMenu] = useAtom(menuAtom);

	const handleMenu = () => {
		setMenu(!menu);
	};

	const handleSearch = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	// useEffect(() => {
	// 	if (Alee) {
	// 		setInterval(() => {
	// 			setMensajeLove(listParaAlee[Math.floor(Math.random() * 8)]);
	// 		}, 4000);
	// 	}
	// }, [Alee]);

	const getBooks = async () => {
		if (
			search.toLowerCase().includes("alee") ||
			search.toLowerCase().includes("quien es") ||
			search.toLowerCase().includes("como se llama") ||
			search.toLowerCase().includes("evelyn") ||
			search.toLowerCase().includes("blas") ||
			search.toLowerCase().includes("chap") ||
			search.toLowerCase().includes("llamita")
		) {
			console.log("Buscaste a Alee");
			setAlee(true);
			return;
		}
		setLoading(true);
		if (search.length > 0) {
			setAlee(false);
			const booksData = await searchBooks(search);
			const books = booksData.items;
			setBooks(books);
		}

		if (search.length === 0) {
			setAlee(false);
			const booksData = await searchBooks("Dragon Ball Z");
			const books = booksData.items;
			setBooks(books);
			setSearch("Dragon Ball");
		}
		setLoading(false);
		console.log(books);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			getBooks();
		}
	};

	useEffect(() => {
		getBooks();
	}, []);

	return (
		<>
			<main className='book_app_masna'>
				<AsideMenu />
				<section>
					<div className='headmasna'>
						<div className='search_container'>
							{!isInicioRouter && (
								<div className='search_wrapper'>
									<input
										className='search'
										type='text'
										placeholder='Busca tu libro mano'
										value={search}
										onChange={handleSearch}
										onKeyPress={handleKeyPress}
									/>
									<button
										className='search_button'
										onClick={getBooks}
									>
										<SendIcon size={22} />
									</button>
								</div>
							)}
						</div>
						<div className='social_container'>
							<a
								href='https://github.com/COMANDO225'
								target='_blank'
								rel='noreferrer'
								className='social_link'
							>
								<GitHubIcon size={20} />
							</a>
						</div>
						<div className='burgerMenu' onClick={handleMenu}>
							<div className='burgerMenu_line lin1'></div>
							<div className='burgerMenu_line lin2'></div>
							<div className='burgerMenu_line lin3'></div>
						</div>
					</div>
					{loading ? (
						<div className='bodymasna'>
							<div className='estacargandocausa'>
								<div className='lds-hourglass'></div>
								<p>Esta cargando mano...</p>
							</div>
						</div>
					) : Alee ? (
						<div className='bodymasna'>
							<div className='estacargandocausa'>
								<h1>Encontraste a una chica muy hermosa</h1>
								<h1
									style={{
										position: "relative",
										fontSize: "10rem",
										animation: "respirar 2s infinite",
									}}
									className='tequiero'
								>
									{mensajeLove}
								</h1>
								<a
									href='https://www.youtube.com/watch?v=JW4-MO05EN8'
									target={"_blank"}
									style={{ color: "#fff" }}
								>
									<h3>Abrete sesamo</h3>
								</a>
							</div>
						</div>
					) : (
						<div className='bodymasna'>{children}</div>
					)}
				</section>
			</main>
		</>
	);
};

export default MainLayout;
