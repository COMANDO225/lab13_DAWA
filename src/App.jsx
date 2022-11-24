import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Router from "./router";

const App = () => {
	return (
		<BrowserRouter>
			<MainLayout>
				<Router />
			</MainLayout>
		</BrowserRouter>
	);
};

export default App;
