/* eslint-disable react/prop-types */
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useData } from "../../context/DataProvider";

const Card4 = () => {
	const { props } = useData();
	const [styles, setStyles] = useState({
		bgColor: "#ffffff",
		textColor: "#000000",
	});
	const [content, setContent] = useState({
		title: props?.heading || "THE MAJESTIC MOUNTAINS",
		date: props?.date || "21 August, 2025",
		subheading: props?.subheading || "NATURE’S ELEGANCE",
		articles: [
			{
				body: props?.articles
					? props.articles[2].body
					: "Lorem ipsum dolor sit amet...",
			},
			{
				body: props?.articles
					? props.articles[2].body
					: "Lorem ipsum dolor sit amet...",
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
							{isEditing ? (
								<>
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
								</>
							) : (
								<p className="text-xs">{article.body}</p>
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

export default Card4;
