import { useEffect, useState } from "react";

const Arts = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);  // State to store selected image

    useEffect(() => {
        fetch('/arts.json')
            .then(res => res.json())
            .then(data => {
                setImages(data);
            });
    }, []);

    const openModal = (img) => {
        setSelectedImage(img); // Set selected image to display in the modal
        document.getElementById('image_modal').showModal();
    };

    const closeModal = () => {
        setSelectedImage(null); // Reset the selected image on modal close
        document.getElementById('image_modal').close();
    };

    return (
        <div className="p-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {images.map((img, i) => (
                    <div
                        className="relative group border-2 border-gray-400 hover:border-8 hover:border-gray-800 transition-all duration-500 ease-in-out overflow-hidden aspect-w-4 aspect-h-3"
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

                        {/* Hover Details */}
                        <div className="absolute inset-0 bg-white bg-opacity-80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div className="flex flex-col justify-center items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <h1 className="text-lg font-bold">{img.name}</h1>
                                <h2 className="text-md text-gray-600">${img.price}</h2>
                                <p className="text-center p-2 mt-2">{img.description}</p>
                                <button 
                                    className="text-black hover:text-white border hover:bg-gray-600 p-3 " 
                                    onClick={() => openModal(img)} // Open modal with the clicked image
                                >
                                    View full image
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <dialog id="image_modal" className="modal">
                    
                    <div className="modal-box w-11/12 max-w-5xl flex flex-col items-center ">
                            <form onClick={closeModal} className=" modal-action" method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm md:btn-md lg:btn-lg btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        <h3 className="font-bold text-lg">{selectedImage.name}</h3>
                        <div className="md:w-[300px] lg:w-[400px] p-3 h-full">
                            <img
                                className="w-full h-full object-cover"
                                src={selectedImage.image_link}
                                alt={selectedImage.name}
                            />
                        </div>
                        <p className="py-4">{selectedImage.description}</p>
                        {/* <div className="modal-action">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </div> */}
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Arts;
