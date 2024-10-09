import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Newsletter from './Newsletter'; // Adjust the path if necessary
import Newscard from './Newscard';
const Dashboard = () => {
  // const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:8000/api/categories');
  //       setCategories(res.data);
  //     } catch (err) {
  //       console.error('Error fetching categories:', err);
  //       setError('Failed to fetch categories');
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };

const[prompt,setPrompt] = useState("");
const[content,setContent] = useState("");
const handleSubmit = async (e)=>{
  e.preventDefault();
console.log("clicked");
try {
  const response = await axios.post('http://localhost:8000/api/content', { prompt });
  console.log('API Response:', response.data); // Debugging line
  
  const { heading, subheading, articles } = response.data;

  // Check if articles is an array
  if (!Array.isArray(articles)) {
    throw new Error('Articles should be an array ');
  }

  setGeneratedData([...generatedData, { heading, subheading, articles }]);
} catch (error) {
  console.error('Error fetching generated content:', error);
}
};


  return (
    <div>
      <div className='flex'>

       <input type="text" placeholder = " Enter a prompt " value = {prompt} onChange ={(e)=>setPrompt(e.target.value)} className='w-full h-10 outline-none border-2 border-blue-500 m-2 rounded-lg'/>
       <button  onClick = {handleSubmit } className='w-30 h-10 bg-blue-700 py-2 mt-2  mr-2 rounded-lg text-white px-3'>generate</button>
      </div>

      <Newscard/>
    </div>
  );
};

export default Dashboard;
