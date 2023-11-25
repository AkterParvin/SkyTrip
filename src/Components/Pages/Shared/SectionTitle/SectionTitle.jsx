import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=" flex flex-col items-center justify-center space-y-4 mb-6">
            <p className="text-[#E8604C] text-xl ">
                {subHeading}</p>

            <h2 className="border-t-4 border-gray-100 text-gray-700 rounded border-b-4 py-2 px-8 text-3xl md:text-8xl ">{heading}</h2>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default SectionTitle;