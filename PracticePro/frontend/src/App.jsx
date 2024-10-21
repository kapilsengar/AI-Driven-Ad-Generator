import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Card1 from "./components/cards/Card1";
import Card2 from "./components/cards/Card2";
import Card3 from "./components/cards/Card3";
import Card4 from "./components/cards/Card4";
import LandingPage from "./components/landingpage/LandingPage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/navbar" element={<Navbar />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/card1" element={<Card1 />} />
				<Route path="/card2" element={<Card2 />} />
				<Route path="/card3" element={<Card3 />} />
				<Route path="/card4" element={<Card4 />} />
			</Routes>
		</>
	);
};

export default App;
