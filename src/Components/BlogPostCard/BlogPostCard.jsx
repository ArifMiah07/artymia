import PropTypes from "prop-types";

const BlogPostCard = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default BlogPostCard;


BlogPostCard.propTypes = {
  image: PropTypes.string,
  title:PropTypes.string,
  description:PropTypes.string,
}