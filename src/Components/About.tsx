
const About = () => {


    return (

        <div className="w-dvw mt-[5rem] px-[1rem] z-10 flex flex-col gap-8 
        md:flex-row md:px-[1.5rem]
        lg:justify-evenly">

            {/* About Text */}
            <div className="w-full md:w-[45%] lg:w-[50%]">
                <h1 className="font-bold font-h1 text-gradient-h3 text-6xl mb-[1rem] 
                lg:text-8xl lg:mb-9">About</h1>
                <h2 className="font-bold font-h1 text-gradient-h3 mb-2 text-2xl
                lg:text-5xl lg:mb-6">ARK Shipping Services</h2>
                <p className="font-p text-black/75 text-sm
                lg:text-lg
                ">
                    ARK Shipping Services has diversified its traditional freight forwarding activities into a fully integrated logistics provider and is equally evolved in air, sea and land freight operations.
                    The company has grown significantly over a year till today as one of the well-trusted logistics provider in Tuticorin.
                    ARK Shipping Services aims to provide quality services and strives to build and maintain relationship with customers.
                    Customers can be assured that ARK Shipping Services will be highly committed in offering efficient, prompt and value for money services.
                </p>
                <div className="w-full justify-start flex mt-6">
                    <button className="w-[50%] text-lg items-center bg-[#ff5c00] text-white font-bold font-p p-3 rounded-lg hover:bg-gray-800 transition-all duration-300" type="submit">Know More</button>
                </div>
            </div>

            {/* image */}

            <div className="w-full grid auto-rows-[170px] gap-8
                    md:w-[50%] md:h-full md:grid-cols-2 md:mt-[2rem]
                    lg:w-[44%] lg:mt-[0rem]
                    ">

                <div className="relative xl:row-span-2 bg-blue-900 rounded-2xl drop-shadow-xl/75 hover:scale-105 transition-all duration-300
                        ">
                    <p className="absolute top-[3%] right-[3%] text-xl font-bold font-h1 italic text-black/50 drop-shadow-xl/75">Sea Ways</p>
                    <img className="w-full h-full object-cover rounded-xl" src="./images/img4.jpeg" />
                </div>

                <div className="relative bg-blue-600 rounded-2xl drop-shadow-xl/75 hover:scale-110 transition-all duration-300
                         ">
                    <p className="absolute top-[3%] right-[3%] text-xl font-bold font-h1 italic text-black/50 drop-shadow-xl/75">Customs Clearance</p>
                    <img className="w-full h-full object-cover rounded-xl" src="./images/img6.jpg" />
                </div>

                <div className="relative xl:row-span-2 bg-blue-800 rounded-2xl drop-shadow-xl/75 hover:black-sky-700 hover:scale-108 transition-all duration-300
                        ">
                    <p className="absolute top-[3%] right-[3%] text-xl font-bold font-h1 italic text-black/50 drop-shadow-xl/75">Road Ways</p>
                    <img className="w-full h-full object-cover rounded-xl" src="./images/img3.jpg" />
                </div>

                <div className="relative bg-blue-700 rounded-2xl drop-shadow-xl/75 hover:scale-112 transition-all duration-300
                        ">
                    <p className="absolute top-[3%] right-[3%] text-xl font-bold font-h1 italic text-black/50 drop-shadow-xl/75">Air Ways</p>
                    <img className="w-full h-full object-cover object-top rounded-xl" src="./images/img1.jpg" />
                </div>
            </div>
        </div>



    )
}

export default About