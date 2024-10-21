import { useState } from "react";
import axios from "axios";
import Newscard from "./Newscard";
import { useData } from "../context/DataProvider";
import Navbar from "./navbar/Navbar";

const Dashboard = () => {
	const [prompt, setPrompt] = useState("");
	const [content, setContent] = useState({});
	const [generatedData, setGeneratedData] = useState([]);
	const { setProps } = useData();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:8000/api/content/generate-content",
				{ prompt }
			);
			console.log("API Response:", response.data); // Debugging line
			const { heading, subheading, date, articles } = response.data;
			setContent(response.data);
			if (!Array.isArray(articles)) {
				throw new Error("Articles should be an array ");
			}
			setGeneratedData([
				...generatedData,
				{ heading, subheading, date, articles },
			]);
			setProps({ heading, subheading, date, articles });
		} catch (error) {
			console.error("Error fetching generated content:", error);
		}
	};

	return (
		<>
		<Navbar/>
			<div className="flex w-[70%] ml-[15%] mb-5">
				<div className="flex w-full">
					<input
						type="text"
						placeholder=" Enter a prompt "
						value={prompt}
						onChange={(e) => setPrompt(e.target.value)}
						className="w-full h-10 outline-none border-2 border-blue-500 m-2 rounded-lg"
					/>
					<button
						onClick={handleSubmit}
						className="w-30 h-10 bg-blue-700 py-2 mt-2  mr-2 rounded-lg text-white px-3">
						generate
					</button>
				</div>
			</div>
			<Newscard props={content} />
		</>
	);
};

export default Dashboard;
