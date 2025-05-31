/* eslint-disable no-unused-vars */

const FeatureCard = ({logo:Logo,titre,description}) => {
    return (
        <div className="flex flex-col justify-evenly gap-2 rounded w-full h-auto bg-primary mx-4 px-4 lg:px-16 lg:mx-16 lg:py-2  ">
             <Logo className="w-8 h-8 bg-primary text-accent  rounded" />
            <h2 className="font-semibold text-sm font-poppins text-secondary">{titre}</h2>
            <p className="font-poppins text-sm lg:text-base text-gray-600" >{description}</p>
        </div>
    )
}

export default FeatureCard;