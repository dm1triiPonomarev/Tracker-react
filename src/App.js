import { Route, Routes } from "react-router-dom";
import TrackerPage from "./pages/TrackerPage";
import RecordsPage from './pages/RecordsPage'
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import CreateBy from "./components/CreateBy";



function App() {
	return (
		<>
			<Navigation />

			<Routes>
				<Route path="/" element={<TrackerPage />} />
				<Route path="/records" element={<RecordsPage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
			<CreateBy />
		</>
	)

}

export default App;
