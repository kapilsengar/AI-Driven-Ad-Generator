/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";
import data from "../data/data";
// Create the context
const ContextData = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
	const [props, setProps] = useState(data);

	return (
		<ContextData.Provider value={{ props, setProps }}>
			{children}
		</ContextData.Provider>
	);
};

// Custom hook to use the context
export const useData = () => {
	return useContext(ContextData);
};

export default ContextData;
