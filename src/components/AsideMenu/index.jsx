import { NavLink } from "react-router-dom";
import { rutas } from "../../routes";
import { useAtom } from "jotai";
import { menuAtom } from "../../atoms/booksAtoms";

const AsideMenu = () => {
	const [menu, setMenu] = useAtom(menuAtom);

	return (
		<aside className='asideMenu'>
			<div className={menu ? "aside_wrapper active" : "aside_wrapper"}>
				<div className='aside_head'>
					<h1>BookLab13</h1>
				</div>
				<div className='aside_body'>
					{rutas &&
						rutas.map((ruta, i) => (
							<NavLink key={i} to={ruta.path} className='linkNav'>
								{ruta.name}
							</NavLink>
						))}
				</div>
			</div>
		</aside>
	);
};

export default AsideMenu;
