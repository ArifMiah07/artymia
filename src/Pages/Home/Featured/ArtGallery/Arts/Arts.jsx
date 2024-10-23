import { useEffect, useState } from "react";

const Arts = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/arts.json')
            .then(res => res.json())
            .then(data => {
                setImages(data);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {images.map((img, i) => (
                    <div
                        className="relative group border-2 border-gray-400 hover:border-8 hover:border-gray-800 transition-all duration-500 ease-in-out overflow-hidden aspect-w-4 aspect-h-3" // Adjust the aspect ratio here
                        key={i}
                    >
                        {/* Image Container */}
                        <div className="p-3 h-full">
                            <img
                                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                                src={img.image_link}
                                alt={`img number ${i}`}
                            />
                        </div>

                        {/* Hover Details (Hidden initially, sliding in on hover) */}
                        <div className="absolute inset-0 bg-white bg-opacity-80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div className="flex flex-col justify-center items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <h1 className="text-lg font-bold">{img.name}</h1>
                                <h2 className="text-md text-gray-600">${img.price}</h2>
                                <p className="text-center p-2 mt-2">{img.description}</p>
                                <a href={img.image_link} target="_blank">
                                    <button className="border border-gray-300 p-3 text-black hover:text-white hover:bg-gray-600 ">View full image</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Arts;
