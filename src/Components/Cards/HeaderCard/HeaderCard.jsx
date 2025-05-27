import PropTypes from 'prop-types'

const HeaderCard = ({headingText, }) => {
    return (
        // <div className="mx-auto my-12 drop-shadow-2xl xs:[320px] sm:[450px] md:[724px] lg:w-[1024px] xl:[1280px]  border-2 border-r-emerald-400 ">
        // </div>
            <div className="my-12 w-full flex flex-col items-center justify-center text-center ">
                <h1 className="mt-6 mb-4 text-3xl font-bold font-playfair">{headingText}</h1>
                {/* Masterpieces, Exceptional Artworks */}
                <p className="mb-12 text-gray-900 lg:text-lg font-roboto">
                Discover our featured collection of outstanding artworks, each piece handpicked for its  uniqueness and artistry. <br />These highlighted masterpieces represent the pinnacle of creativity <br /> and innovation from talented artists around the globe.
                </p>
            </div>
    );
};

export default HeaderCard;


HeaderCard.propTypes = {
    headingText: PropTypes.string,
    // bg_clr:PropTypes.string,
}