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
                    <div className="relative group border-4 border-gray-400 overflow-hidden" key={i}>
                        {/* Image Container */}
                        <div className="p-3">
                            <img
                                className="w-full transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                                src={img.image_link}
                                alt={`img number ${i}`}
                            />
                        </div>

                        {/* Hover Details (Hidden initially, sliding in on hover) */}
                        <div className="absolute inset-0 bg-white bg-opacity-80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div className="flex flex-col justify-center items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <h1 className="text-lg font-bold">{img.name}</h1>
                                <h2 className="text-md text-gray-600">${img.price}</h2>
                                <p className="text-center mt-2">{img.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Arts;
