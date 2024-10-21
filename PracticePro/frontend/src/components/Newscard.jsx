/* eslint-disable react/prop-types */
import { useState } from "react";
import "./NewsCard.css";
import { useNavigate } from "react-router-dom";
// import

const Newscard = ({ props }) => {
	const head = props?.heading || "";
	const subhead = props?.subheading || "";
	const date = props?.date || "";
	const articles = props?.articles || [];
	const [float] = useState(false);

	const navigate = useNavigate();

	const handlecard1 = (args) => {
		console.log(args);
	};
	const dummy =
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti unde libero dicta dolores, quo adipisci natus numquam eius, nostrum tempore. Placeat libero delectus aliquam quaerat ducimus sed laudantium consequatur, iusto explicabo facere tempore porro et molestias reiciendis modi consequuntur incidunt ex error totam! Reiciendis, nesciunt odit. Eius suscipit modi voluptatum consectetur ipsum et nemo beatae, labore obcaecati, expedita optio esse deleniti quae reiciendis, iusto facilis animi? Minima quidem nobis cum sequi expedita. Placeat laboriosam consequatur provident autem amet aliquam mollitia quas deserunt, laudantium tenetur dolorum maxime iure, repellat natus reiciendis incidunt fuga eos! Accusamus ducimus est provident fuga perspiciatis.";
	return (
		<div
			id="slider-disable"
			className=" border-2 grid grid-cols-2  w-full gap-4 p-4 border-black  text-justify ">
			{/* Card 1 */}
			<div
				onClick={() => {
					navigate("/card1");
				}}
				id="slider-disable"
				className={`${
					!float
						? "bg-white text-black font-roboto h-screen p-4 overflow-auto border-2"
						: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-50 ml-52 mr-52 border-black border-2 overflow-auto"
				}`}>
				<div>
					<header className="text-center border-b-2 border-black pb-2">
						<h1 className="text-xl font-bold">
							{props?.heading || "Fauget News"}
						</h1>
						<p className="text-right text-xs">
							{props?.date || "Issue 3 March 2003"}
						</p>
					</header>

					<section className="text-center border-b-2 border-black py-2">
						<h2 className="text-lg font-bold">
							{props?.subheading || "CLIMATE CHANGE"}
						</h2>
					</section>

					<section className="flex flex-col mt-2">
						<div className="p-2">
							<img
								alt="A flooded walkway with a bench and railing"
								className="w-full h-24 object-cover"
								src="https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
							/>
							<h3 className="text-lg font-bold  mt-1">
								{props?.articles
									? articles[0].titlecls
									: "The rising water"}
							</h3>
							<p className="text-xs  ">
								{props?.articles ? articles[0].bodycls : dummy}
							</p>
						</div>

						<div className="p-2">
							<img
								alt="An abandoned, flooded building with peeling paint"
								className="w-full h-24 object-cover border-4 border-purple-500"
								src="https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
							/>
							<h3 className="text-lg font-bold mt-1">
								{props?.articles
									? articles[1].title
									: "An overflow of water"}
							</h3>
							<p className="text-xs mt-1">
								{props?.articles ? articles[1].bodycls : dummy}
							</p>
						</div>
					</section>
				</div>
			</div>

			{/* Card 2 */}
			<div
				id="slider-disable"
				onClick={() => handlecard1("Breaking News")}
				className={`bg-white p-4 border font-serif border-gray-300 rounded-lg shadow-md overflow-auto`}>
				<div className="header text-center mb-2">
					<h1 className="new-arrival text-xl font-bold">
						{head || "New Arrival"}
					</h1>
				</div>
				<div className="header text-center mb-2 border-b-2 border-black py-1">
					<h2 className="breaking-news text-lg font-bold py-1">
						{subhead || "BREAKING NEWS"}
					</h2>
				</div>

				<div>
					<div className="relative">
						<p className="content text-justify text-xs mb-4">
							{props?.articles && props.articles.length > 2
								? props.articles[0].bodycls
								: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?"}
						</p>

						<img
							alt="A person sitting on a chair, wearing a black jacket and beige pants"
							className="border border-black float-right mb-4 ml-4 h-36"
							src="https://media.istockphoto.com/id/1255579097/photo/wooden-house.jpg?s=612x612&w=0&k=20&c=HzXXReDZX8Z49XzzOyiVuW9DTCuKyQRWKurPmy-Jt-A="
						/>
					</div>
				</div>
				<div className=" mt-2">
					<p className="text-xs ">
						{props?.articles && articles.length > 2
							? articles[2].body
							: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?"}
					</p>
				</div>
				<div className=" mt-2">
					<p className="text-xs ">
						{props?.articles && articles.length > 2
							? articles[2].body
							: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?"}
					</p>
				</div>
				<div className=" text-center mt-2">
					<p className="text-xl text-bold ">
						Lorem ipsum dolor sit amet.
					</p>
				</div>
			</div>

			{/* Card 3 */}
			<div
				id="slider-disable"
				onClick={() => handlecard1("Sports")}
				className="text-md font-thin text-justify tracking-tight border border-gray-300 rounded-lg shadow-md overflow-auto">
				<div className=" flex justify-between items-center px-4 py-2">
					<div className="text-sm">{date || "02 FEBRUARY, 2026"}</div>
				</div>
				<div className="bg-gray-200 py-4">
					<div className="text-center text-xl font-bold">
						{head || "Sport Magazine"}
					</div>
				</div>
				<div className=" px-4 py-6">
					<div className="flex">
						<div className="w-1/2 pr-4">
							<div className="border-2 border-purple-500 p-2  tracking-tight w-auto">
								<div className=" font-bold text-md text-justify">
									{subhead || "PLAYERS WHO DIDN'T GET A MOVE"}
								</div>
							</div>
							<div className="mt-4 content italic text-sm">
								<p>
									{props?.articles && articles.length > 2
										? articles[0].body
										: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?"}
								</p>
							</div>
						</div>
						<div className="w-1/2 pl-4">
							<img
								alt="A person watching a sports game"
								className="w-full h-32 object-cover"
								src="https://images.unsplash.com/photo-1727452165826-920ea81d89e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
							/>
							<div className="mt-4 content italic text-sm">
								<p>
									{props?.articles && articles.length > 2
										? articles[2].body
										: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?"}
								</p>
							</div>
						</div>
					</div>
					<div className=" text-center mt-2">
						<p className="text-xs ">
							{props?.articles && articles.length > 2
								? articles[2].body
								: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?"}
						</p>
					</div>
				</div>
			</div>

			{/* Card 4 */}
			<div
				id="slider-disable"
				onClick={() => handlecard1("Nature")}
				className="bg-white p-4 border border-gray-300 overflow-auto">
				<div className="flex justify-between items-center mb-4">
					<span>{date || "21 August, 2025"}</span>
				</div>
				<div className="text-center border-b border-black pb-2 mb-4">
					<h1 className="text-lg font-bold">
						{head || "THE MAJESTIC MOUNTAINS"}
					</h1>
				</div>
				<div className="text-center border-b border-black pb-2 mb-4">
					<h2 className="text-xl font-bold">
						{subhead || "NATURE’S ELEGANCE"}
					</h2>
				</div>
				<div className="mb-4">
					<img
						alt="A majestic mountain"
						className="w-full h-32 object-cover"
						src="https://images.unsplash.com/photo-1727527412074-2a6ed61440c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4 text-sm">
					<div>
						<p>
							{props?.articles && articles.length > 2
								? articles[2].body
								: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?"}
						</p>
					</div>
					<div>
						<p>
							{props?.articles && props.articles.length > 2
								? articles[2].body
								: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newscard;
