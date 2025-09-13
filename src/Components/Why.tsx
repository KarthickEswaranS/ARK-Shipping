

const Why = () => {

    const features = [
        {
            id: 1,
            title: "Expertise and Experience",
            description: "With years of industry knowledge, ARK Shipping ensures your logistics are managed with precision and professionalism."
        },
        {
            id: 2,
            title: "Comprehensive Services",
            description: "We provide complete logistics solutions—covering air, sea, and land freight—tailored to your requirements."
        },
        {
            id: 3,
            title: "Global Network",
            description: " Our strong global network guarantees smooth and reliable shipping connections across borders and continents."
        },
        {
            id: 4,
            title: "Technology & Customized Solutions",
            description: " We combine advanced tracking with flexible, tailored shipping strategies, ensuring timely delivery and real-time visibility."
        }
    ]

    return (
        <div className="w-dvw h-full mt-[5rem] lg:mt-[7rem]">

            {/* <img className="w-full h-dvh -z-10 object-cover" src="/images/img15.jpg" /> */}

            <div className="w-full z-10 px-[1rem] py-[1rem] flex flex-col justify-center items-center gap-4 
             lg:flex-row ">

                <div className="w-full z-10 p-6
                lg:w-[45%]">
                    <h1 className="font-bold font-h1 text-gradient-h3 text-start text-3xl mb-[1rem] lg:text-4xl lg:mb-4">Why Choose Us?</h1>
                    <p className="font-p text-sm lg:text-lg">At ARK Shipping, we combine expertise, innovation, and global reach to deliver reliable logistics solutions, ensuring your cargo moves seamlessly, on time, and with complete transparency.</p>

                    <button className="w-full items-center bg-[#ff5c00] text-white font-semi-bold p-3 mt-4 rounded-lg 
                    hover:bg-gray-800 transition-all duration-300 md:w-[40%] lg:w-[50%]"
                        type="submit">Start your Shipment</button>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6
                lg:w-[50%]">
                    {
                        features.map((feature) => (
                            <div key={feature.id} className="bg-white p-6 rounded-lg drop-shadow-2xl/50">
                                <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
                                <p>{feature.description}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Why
