/* eslint-disable react/prop-types */
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useData } from "../../context/DataProvider";
const Card1 = () => {
	const { props } = useData();
	const [styles, setStyles] = useState({
		bgColor: "#ffffff",
		textColor: "#000000",
	});
	const [images, setImages] = useState({
		image1: "https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
		image2: "https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
	});

	const [content, setContent] = useState({
		title: props?.heading || "Fauget News",
		date: props?.date || "Issue 3 March 2003",
		subheading: props?.subheading || "CLIMATE CHANGE",
		articles: [
			{
				title: props?.articles
					? props.articles[0].title
					: "The rising water",
				body: props?.articles
					? props.articles[0].body
					: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sit, ea obcaecati possimus excepturi, neque dolor recusandae itaque quisquam, voluptates dicta voluptatum totam laudantium. Pariatur aut at, nostrum doloribus a ullam velit eius nihil libero numquam aperiam quia, architecto itaque similique dolores perferendis debitis quas sequi neque saepe laudantium provident incidunt impedit! Deleniti atque ducimus, rem tempore pariatur dolorum. Veritatis suscipit iste laboriosam reiciendis id, non quia quo vitae commodi laudantium aperiam, similique sapiente porro amet inventore expedita iusto debitis odio hic velit aspernatur corrupti eveniet fugit! Eum veritatis eius alias animi fuga at, non reiciendis ipsa ex porro. Optio!",
			},
			{
				title: props?.articles
					? props.articles[1].title
					: "An overflow of water",
				body: props?.articles
					? props.articles[1].body
					: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sit, ea obcaecati possimus excepturi, neque dolor recusandae itaque quisquam, voluptates dicta voluptatum totam laudantium. Pariatur aut at, nostrum doloribus a ullam velit eius nihil libero numquam aperiam quia, architecto itaque similique dolores perferendis debitis quas sequi neque saepe laudantium provident incidunt impedit! Deleniti atque ducimus, rem tempore pariatur dolorum. Veritatis suscipit iste laboriosam reiciendis id, non quia quo vitae commodi laudantium aperiam, similique sapiente porro amet inventore expedita iusto debitis odio hic velit aspernatur corrupti eveniet fugit! Eum veritatis eius alias animi fuga at, non reiciendis ipsa ex porro. Optio!",
			},
		],
	});
	const [isEditing, setIsEditing] = useState(false);

	const downloadPDF = async () => {
		const element = document.getElementById("pdf-card");

		const canvas = await html2canvas(element, {
			backgroundColor: null,
			scale: 3,
		});

		const imgData = canvas.toDataURL("image/png");
		const pdf = new jsPDF("p", "pt", "a4");
		const imgWidth = pdf.internal.pageSize.getWidth();
		const imgHeight = (canvas.height * imgWidth) / canvas.width;

		pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
		pdf.save("card.pdf");
	};

	const handleImageUpload = (event, index) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImages((prevImages) => ({
					...prevImages,
					[`image${index + 1}`]: reader.result,
				}));
			};
			reader.readAsDataURL(file);
		}
	};

	const toggleEdit = () => {
		setIsEditing((prev) => !prev);
	};

	return (
		<div className="mt-4 p-2 flex flex-col items-center justify-center rounded bg-gray-100">
			<div
				id="pdf-card"
				className="p-4 border-2 overflow-auto"
				style={{
					width: "595px",
					height: "842px",
					backgroundColor: styles.bgColor,
					color: styles.textColor,
				}}>
				<header className="text-center border-b-2 border-black pb-2">
					{isEditing ? (
						<input
							type="text"
							value={content.title}
							onChange={(e) =>
								setContent({
									...content,
									title: e.target.value,
								})
							}
							className="text-2xl font-bold border-b border-black w-full text-center"
						/>
					) : (
						<h1 className="text-2xl font-bold">{content.title}</h1>
					)}
					{isEditing ? (
						<input
							type="text"
							value={content.date}
							onChange={(e) =>
								setContent({ ...content, date: e.target.value })
							}
							className="text-xs border-b border-black w-full text-right"
						/>
					) : (
						<p className="text-right text-xs">{content.date}</p>
					)}
				</header>

				<section className="text-center border-b-2 border-black py-2">
					{isEditing ? (
						<input
							type="text"
							value={content.subheading}
							onChange={(e) =>
								setContent({
									...content,
									subheading: e.target.value,
								})
							}
							className="text-xl font-bold border-b border-black w-full text-center"
						/>
					) : (
						<h2 className="text-xl font-bold">
							{content.subheading}
						</h2>
					)}
				</section>

				<section className="flex flex-col mt-2">
					{content.articles.map((article, index) => (
						<div key={index} className="p-2">
							<img
								alt={`Article ${index + 1}`}
								className="w-full h-24 object-cover"
								src={images[`image${index + 1}`]}
							/>
							{isEditing ? (
								<>
									<input
										type="text"
										value={article.title}
										onChange={(e) => {
											const newArticles = [
												...content.articles,
											];
											newArticles[index].title =
												e.target.value;
											setContent({
												...content,
												articles: newArticles,
											});
										}}
										className="text-lg font-bold border-b border-black w-full mt-1"
									/>
									<textarea
										value={article.body}
										onChange={(e) => {
											const newArticles = [
												...content.articles,
											];
											newArticles[index].body =
												e.target.value;
											setContent({
												...content,
												articles: newArticles,
											});
										}}
										className="text-xs w-full mt-1"
									/>
									<input
										type="file"
										accept="image/*"
										onChange={(e) =>
											handleImageUpload(e, index)
										}
										className="mt-1"
									/>
								</>
							) : (
								<>
									<h3 className="text-lg font-bold mt-1">
										{article.title}
									</h3>
									<p className="text-xs">{article.body}</p>
								</>
							)}
						</div>
					))}
				</section>
			</div>

			{/* Color changing fields, visible only in edit mode */}
			{isEditing && (
				<div className="flex mt-4">
					<input
						type="color"
						value={styles.bgColor}
						onChange={(e) =>
							setStyles({ ...styles, bgColor: e.target.value })
						}
						className="mr-4 border-0 rounded"
					/>
					<input
						type="color"
						value={styles.textColor}
						onChange={(e) =>
							setStyles({ ...styles, textColor: e.target.value })
						}
						className="border-0 rounded"
					/>
				</div>
			)}

			{/* Edit button */}
			<button
				onClick={toggleEdit}
				className="mt-4 p-2 bg-yellow-500 text-white rounded">
				{isEditing ? "Save" : "Edit"}
			</button>

			{/* Download button outside the pdf-card */}
			<button
				onClick={downloadPDF}
				className="mt-4 p-2 bg-blue-500 text-white rounded">
				Download PDF
			</button>
		</div>
	);
};

export default Card1;
