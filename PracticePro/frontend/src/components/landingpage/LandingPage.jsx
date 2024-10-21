/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
	return (
		<div
			className="flex flex-col items-center justify-center w-full min-h-screen bg-black bg-opacity-50 text-white"
			style={{
				backgroundImage:
					"url('https://images.pexels.com/photos/8294657/pexels-photo-8294657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}>
			<div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
				<div className="text-4xl font-bold text-red-600">
					<span>Ad-Spark</span>
				</div>
				<div className="flex items-center space-x-4">
					<button className="bg-transparent text-white border border-white px-4 py-2 rounded">
						English <i className="fas fa-caret-down"></i>
					</button>
				</div>
			</div>
			<div className="text-center mt-20">
				<p className="text-lg mb-8">
					Unlock the power of AI to create engaging, personalized
					advertisements in seconds.
				</p>

				<div className="flex justify-center">
					<button onClick={()=>navigate('/dashboard')} className="bg-red-600 text-white text-xl px-8 py-6 rounded-lg hover:bg-red-700 hover:scale-110 transition-transform duration-500 ease-in-out">
						Get Started <i className="fas fa-chevron-right"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
