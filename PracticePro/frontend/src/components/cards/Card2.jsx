/* eslint-disable react/prop-types */
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useData } from "../../context/DataProvider";

const Card2 = () => {
	const { props } = useData();
	const [styles, setStyles] = useState({
		bgColor: "#ffffff",
		textColor: "#000000",
	});

	const [images, setImages] = useState({
		image1: "https://media.istockphoto.com/id/1255579097/photo/wooden-house.jpg?s=612x612&w=0&k=20&c=HzXXReDZX8Z49XzzOyiVuW9DTCuKyQRWKurPmy-Jt-A=",
	});

	const [content, setContent] = useState({
		title: props?.heading || "New Arrival",
		subheading: props?.subheading || "BREAKING NEWS",
		articles: [
			{
				body: props?.articles
					? props.articles[0].body
					: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
			},
		],
	});

	const [isEditing, setIsEditing] = useState(false);

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImages({ image1: reader.result });
			};
			reader.readAsDataURL(file);
		}
	};

	const toggleEdit = () => {
		setIsEditing((prev) => !prev);
	};

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

	return (
		<div className="mt-4 p-4 flex flex-col items-center justify-center rounded bg-gray-100">
			<div
				id="pdf-card"
				className="p-4 border-2"
				style={{
					width: "210mm", // A4 width
					height: "297mm", // A4 height
					backgroundColor: styles.bgColor,
					color: styles.textColor,
					position: "relative",
					overflow: "hidden",
				}}>
				<div className="text-center mb-2">
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
							className="text-xl font-bold border-b border-black w-full text-center"
						/>
					) : (
						<h1 className="text-xl font-bold">{content.title}</h1>
					)}
				</div>

				<div className="text-center mb-2 border-b-2 border-black py-1">
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
							className="text-lg font-bold border-b border-black w-full text-center"
						/>
					) : (
						<h2 className="text-lg font-bold">
							{content.subheading}
						</h2>
					)}
				</div>

				<div className="relative">
					{isEditing ? (
						<textarea
							value={content.articles[0].body}
							onChange={(e) =>
								setContent({
									...content,
									articles: [{ body: e.target.value }],
								})
							}
							className="text-xs w-full mb-4"
						/>
					) : (
						<p className="content text-justify text-xs mb-4">
							{content.articles[0].body}
						</p>
					)}
					<img
						alt="Article Image"
						className="border border-black float-right mb-4 ml-4 h-36"
						src={images.image1}
					/>
				</div>

				{isEditing && (
					<input
						type="file"
						accept="image/*"
						onChange={handleImageUpload}
						className="mt-2"
					/>
				)}
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

			{/* Download button */}
			<button
				onClick={downloadPDF}
				className="mt-4 p-2 bg-blue-500 text-white rounded">
				Download PDF
			</button>
		</div>
	);
};

export default Card2;
