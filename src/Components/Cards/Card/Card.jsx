const Card = ({ image, title, price }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>
      <div className="p-4 text-center">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600">from {price}</p>
      </div>
    </div>
  );
};

export default Card;
