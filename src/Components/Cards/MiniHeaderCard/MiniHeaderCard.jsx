import PropTypes from 'prop-types'

const MiniHeaderCard = ({headerText}) => {
    return (
        <div className="bg-forest-sunrise w-full flex flex-col items-center justify-center text-center ">
            <h1 className="my-6 text-3xl font-bold font-newAmsterdam">{headerText}</h1>
                
            {/* <p className="mb-12 font-playfair">
                Discover our featured collection of outstanding artworks, each piece handpicked for its  uniqueness and artistry. <br />These highlighted masterpieces represent the pinnacle of creativity <br /> and innovation from talented artists around the globe.
            </p> */}
        </div>
    );
};

export default MiniHeaderCard;

MiniHeaderCard.propTypes = {
    headerText: PropTypes.string
}