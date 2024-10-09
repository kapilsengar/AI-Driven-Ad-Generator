import React, { useState } from "react";

const Newscard = () => {

   
    
    

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {/* Card 1 */}
      <div className="bg-white text-black font-roboto p-4 border border-gray-300 rounded-lg shadow-md">
        <div>
          <header className="text-center border-b-2 border-black pb-2">
            <h1 className="text-xl font-bold">Fauget News</h1>
            <p className="text-right text-xs">Volume 10, Issue 3 March 2003</p>
          </header>

          <section className="text-center border-b-2 border-black py-2">
            <h2 className="text-lg font-bold">CLIMATE CHANGE</h2>
            <p className="text-sm mt-1">TEMPERATURES AND WEATHER PATTERNS</p>
          </section>

          <section className="flex flex-col mt-2">
            <div className="p-2">
              <img
                alt="A flooded walkway with a bench and railing"
                className="w-full h-24 object-cover"
                src="https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              />
              <h3 className="text-lg font-bold mt-1">The rising water</h3>
              <p className="text-xs mt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum ratione corporis voluptates ut provident. Molestias officiis quos est laboriosam. Dignissimos repudiandae magnam cum laudantium non adipisci amet debitis necessitatibus?</p>
            </div>

            <div className="p-2">
              <img
                alt="An abandoned, flooded building with peeling paint"
                className="w-full h-24 object-cover border-4 border-purple-500"
                src="https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              />
              <h3 className="text-lg font-bold mt-1">An overflow of water</h3>
              <p className="text-xs mt-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis perspiciatis fugiat qui, debitis aut quidem temporibus repellat quos, deleniti molestiae voluptas perferendis in adipisci ipsum ad architecto! Odit, aliquid ea eos quam et sit quibusdam suscipit nam eius accusantium placeat!
              </p>
            </div>
          </section>

          <footer className="text-center mt-2">
            <p className="text-xs">www.reallygreatsite.com</p>
          </footer>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="header text-center mb-2">
          <h1 className="new-arrival text-xl font-bold">New Arrival</h1>
        </div>
        <div className="header text-center mb-2">
          <h2 className="breaking-news text-lg font-bold">BREAKING NEWS</h2>
        </div>
        <div className="content text-center mb-2">
          <p className="text-base font-bold">
            New collection is available now! Check it on our website.
          </p>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-2">
            <p className="content text-justify text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, odio aliquam, reprehenderit sunt soluta nesciunt nemo, exercitationem molestias corporis tempore doloremque cumque explicabo accusantium. Possimus fugiat dolorem placeat deleniti ducimus magnam exercitationem ratione eum suscipit, consequuntur natus optio ea veniam cumque animi vitae id laborum quae eius, minima dolore similique?
              </p>
          </div>
          <div className="w-1/2">
            <img
              alt="A person sitting on a chair, wearing a black jacket and beige pants"
              className="border border-black"
              src="https://images.unsplash.com/photo-1721332149069-a470150ef51c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
            />
          </div>
        </div>
        <div className=" mt-2">
          <p className="text-xs ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A obcaecati quidem quisquam illo magnam alias fugit tempore, iste sunt asperiores magni non dolore rem debitis, esse temporibus ratione. Laudantium, exercitationem reiciendis! Error aperiam optio odit, maxime harum temporibus tenetur totam.</p>
        </div>
        <div className=" mt-2">
          <p className="text-xs ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A obcaecati quidem quisquam illo magnam alias fugit tempore, iste sunt asperiores magni non dolore rem debitis, esse temporibus ratione. Laudantium, exercitationem reiciendis! Error aperiam optio odit, maxime harum temporibus tenetur totam.</p>
        </div>
        <div className=" text-center mt-2">
          <p className="text-xl text-bold ">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100">
        <div className="header flex justify-between items-center px-4 py-2">
          <div className="text-sm">02 FEBRUARY, 2026</div>
          <div className="text-sm">FRADEL AND SPIES CO</div>
        </div>
        <div className="bg-gray-200 py-4">
          <div className="text-center text-xl font-bold">Sport Magazine</div>
        </div>
        <div className="container px-4 py-6">
          <div className="flex">
            <div className="w-1/2 pr-4">
              <div className="border-2 border-purple-500 p-4">
                <div className="subtitle font-bold text-lg">
                  PLAYERS WHO DIDN'T GET A MOVE
                </div>
              </div>
              <div className="mt-4 content italic text-sm">
                
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sapiente quae deleniti? Esse repellat, enim magni repudiandae nobis quia animi dolorem. Dolorem repellat soluta odio dolore tempore officiis saepe commodi enim natus eligendi, nemo mollitia blanditiis hic obcaecati ipsa culpa!</p>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <img
                alt="A person watching a sports game"
                className="w-full h-32 object-cover"
                src="https://images.unsplash.com/photo-1727452165826-920ea81d89e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
              />
               <div className="mt-4 content italic text-sm">
                
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sapiente quae deleniti? Esse repellat, enim magni repudiandae nobis quia animi dolorem. Dolorem repellat soluta odio dolore tempore officiis saepe commodi enim natus eligendi, nemo mollitia blanditiis hic obcaecati ipsa culpa!</p>
               </div>
            </div>
            
          </div>
          <div className=" text-center mt-2">
          <p className="text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis quidem consectetur obcaecati possimus neque quia eaque cumque non magnam rerum magni exercitationem molestias, sequi doloremque! Dolor sed adipisci dolores quibusdam laborum fugiat eveniet, sequi unde. Vel tempora deserunt recusandae.</p>
        </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-4 border border-gray-300">
        <div className="flex justify-between items-center mb-4">
          <span>21 August, 2025</span>
          <span>Larana, Inc.</span>
        </div>
        <div className="text-center border-b border-black pb-2 mb-4">
          <h1 className="text-lg font-bold">THE MAJESTIC MOUNTAINS</h1>
        </div>
        <div className="text-center border-b border-black pb-2 mb-4">
          <h2 className="text-xl font-bold">NATURE’S ELEGANCE</h2>
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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ratione voluptas eveniet perspiciatis officia quibusdam nulla dicta impedit dolorum earum voluptatibus, laboriosam quaerat voluptate culpa, doloremque consequatur nesciunt recusandae, in inventore ullam numquam! Maxime, iure odio sapiente vero ad repellendus.</p>
          </div>
          <div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem perferendis, explicabo, totam unde molestias dolor repellendus praesentium nulla expedita recusandae voluptate dolore natus nesciunt nobis minima placeat dolores repudiandae eos, facere quas? Aut distinctio illo consectetur ea ipsa at!</p>
          </div>
        </div>
        <footer className="text-center mt-2">
            <p className="text-xs">www.reallygreatsite.com</p>
          </footer>
      </div>
    </div>
  );
};

export default Newscard;
