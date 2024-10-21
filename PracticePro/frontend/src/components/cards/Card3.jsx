/* eslint-disable react/prop-types */
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useData } from "../../context/DataProvider";

const Card3 = () => {
	const { props } = useData();
	const [styles, setStyles] = useState({
		bgColor: "#ffffff",
		textColor: "#000000",
	});
	const [images, setImages] = useState({
		image1: "https://images.unsplash.com/photo-1727452165826-920ea81d89e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
		image2: "",
	});

	const [content, setContent] = useState({
		date: props?.date || "02 FEBRUARY, 2026",
		head: props?.head || "Sport Magazine",
		subhead: props?.subhead || "PLAYERS WHO DIDN'T GET A MOVE",
		articles: [
			{
				body:
					props?.articles && props.articles.length > 0
						? props.articles[0].body
						: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			},
			{
				body:
					props?.articles && props.articles.length > 1
						? props.articles[1].body
						: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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
		pdf.save("sports-card.pdf");
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
				className="p-4 border border-2 overflow-auto"
				style={{
					width: "595px",
					height: "842px",
					backgroundColor: styles.bgColor,
					color: styles.textColor,
				}}>
				<div className="flex justify-between items-center px-4 py-2">
					<div className="text-sm">{content.date}</div>
				</div>
				<div className="bg-gray-200 py-4">
					<div className="text-center text-xl font-bold">
						{content.head}
					</div>
				</div>
				<div className="px-4 py-6">
					<div className="flex">
						<div className="w-1/2 pr-4">
							<div className="border-2 border-purple-500 p-2 tracking-tight w-auto">
								<div className="font-bold text-md text-justify">
									{content.subhead}
								</div>
							</div>
							<div className="mt-4 content italic text-sm">
								{isEditing ? (
									<textarea
										value={content.articles[0].body}
										onChange={(e) => {
											const newArticles = [
												...content.articles,
											];
											newArticles[0].body =
												e.target.value;
											setContent({
												...content,
												articles: newArticles,
											});
										}}
										className="w-full h-24 border p-1"
									/>
								) : (
									<p>{content.articles[0].body}</p>
								)}
							</div>
							{isEditing && (
								<input
									type="file"
									accept="image/*"
									onChange={(e) => handleImageUpload(e, 0)}
									className="mt-2"
								/>
							)}
							{images.image1 && (
								<img
									alt="Article Image"
									className="w-full h-32 object-cover mt-2"
									src={images.image1}
								/>
							)}
						</div>
						<div className="w-1/2 pl-4">
							<img
								alt="A person watching a sports game"
								className="w-full h-32 object-cover"
								src={images.image2}
							/>
							<div className="mt-4 content italic text-sm">
								{isEditing ? (
									<textarea
										value={content.articles[1].body}
										onChange={(e) => {
											const newArticles = [
												...content.articles,
											];
											newArticles[1].body =
												e.target.value;
											setContent({
												...content,
												articles: newArticles,
											});
										}}
										className="w-full h-24 border p-1"
									/>
								) : (
									<p>{content.articles[1].body}</p>
								)}
								{isEditing && (
									<input
										type="file"
										accept="image/*"
										onChange={(e) =>
											handleImageUpload(e, 1)
										}
										className="mt-2"
									/>
								)}
							</div>
						</div>
					</div>
					<div className="text-center mt-2">
						<p className="text-xs">{content.articles[1].body}</p>
					</div>
				</div>
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

export default Card3;
