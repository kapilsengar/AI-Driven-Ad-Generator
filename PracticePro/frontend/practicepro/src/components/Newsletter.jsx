// import React, { useState } from 'react';

// const NewsletterCard = ({ card, onImageChange }) => {
//   return (
//     <div className="border border-white rounded-lg p-5 mx-2 bg-white shadow-lg flex-shrink-0">
//       <h2 className="text-xl font-bold">{card.heading}</h2>
//       <h3 className="text-lg text-gray-700">{card.subheading}</h3>
//       {card.articles.map((article, articleIndex) => (
//         <div key={articleIndex} className="flex items-center my-2">
//           <img
//             src={article.imgUrl}
//             alt={`Article ${articleIndex + 1}`}
//             className={`w-20 h-20 rounded-lg mr-3 ${articleIndex % 2 === 0 ? 'rounded-full' : 'rounded-md'}`}
//           />
//           <p className="text-md">{article.text}</p>
//           <input
//             type="file"
//             onChange={(e) => onImageChange(card.id, articleIndex, e)}
//             className="ml-3 border border-gray-300 rounded-lg p-1"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// const Newsletter = ({ category }) => {
//   const [newsletterCards, setNewsletterCards] = useState([
//     {
//       id: 1,
//       heading: `Newsletter ${category.name} - Type 1`,
//       subheading: 'Subheading for Type 1',
//       articles: [
//         { text: 'Article 1 for Type 1', imgUrl: 'https://picsum.photos/200/150?random=1' },
//         { text: 'Article 2 for Type 1', imgUrl: 'https://picsum.photos/200/150?random=2' },
//       ],
//     },
//     {
//       id: 2,
//       heading: `Newsletter ${category.name} - Type 2`,
//       subheading: 'Subheading for Type 2',
//       articles: [
//         { text: 'Article 1 for Type 2', imgUrl: 'https://picsum.photos/200/150?random=3' },
//         { text: 'Article 2 for Type 2', imgUrl: 'https://picsum.photos/200/150?random=4' },
//         { text: 'Article 3 for Type 2', imgUrl: 'https://picsum.photos/200/150?random=5' },
//       ],
//     },
//     {
//       id: 3,
//       heading: `Newsletter ${category.name} - Type 3`,
//       subheading: 'Subheading for Type 3',
//       articles: [
//         { text: 'Article 1 for Type 3', imgUrl: 'https://picsum.photos/200/150?random=6' },
//         { text: 'Article 2 for Type 3', imgUrl: 'https://picsum.photos/200/150?random=7' },
//       ],
//     },
//     {
//       id: 4,
//       heading: `Newsletter ${category.name} - Type 4`,
//       subheading: 'Subheading for Type 4',
//       articles: [
//         { text: 'Article 1 for Type 4', imgUrl: 'https://picsum.photos/200/150?random=8' },
//         { text: 'Article 2 for Type 4', imgUrl: 'https://picsum.photos/200/150?random=9' },
//         { text: 'Article 3 for Type 4', imgUrl: 'https://picsum.photos/200/150?random=10' },
//       ],
//     },
//     {
//       id: 5,
//       heading: `Newsletter ${category.name} - Type 5`,
//       subheading: 'Subheading for Type 5',
//       articles: [
//         { text: 'Article 1 for Type 5', imgUrl: 'https://picsum.photos/200/150?random=11' },
//       ],
//     },
//   ]);

//   const handleImageChange = (cardId, articleIndex, e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewsletterCards((prevCards) => {
//           const updatedCards = prevCards.map((card) => {
//             if (card.id === cardId) {
//               const updatedArticles = card.articles.map((article, index) => {
//                 if (index === articleIndex) {
//                   return { ...article, imgUrl: reader.result }; // Change the specific article's image
//                 }
//                 return article;
//               });
//               return { ...card, articles: updatedArticles };
//             }
//             return card;
//           });
//           return updatedCards;
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex flex-wrap justify-center p-4">
//       {newsletterCards.map((card) => (
//         <div key={card.id} className="m-2">
//           <NewsletterCard card={card} onImageChange={handleImageChange} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Newsletter;
