
const About = () => {

    const services = [
        { id: 1, name: "Air Freight" },
        { id: 2, name: "Sea Freight" },
        { id: 3, name: "Breakbulk" },
        { id: 4, name: "Customs Clearance" },
        { id: 5, name: "RORO" },
        { id: 6, name: "Land Freight" },
        { id: 7, name: "Documenting Process" },
        { id: 8, name: "Warehousing & Distribution" },
        { id: 9, name: "Project & Heaby Lift" },
        { id: 10, name: "Exihibition & Event" },
        { id: 11, name: "Packing & Removals" },

    ];

    return (
        <>

            <div className="w-full mt-32">
                <div className="w-full flex justify-evenly">

                    {/* About Text */}
                    <div className="w-[55%]">
                        <h1 className="text-8xl font-bold mb-4">About</h1>
                        <h2 className="text-3xl font-bold mb-4">ARK Shipping Services</h2>
                        <p className="text-lg text-justify">
                            ARK Shipping Services has diversified its traditional freight forwarding activities into a fully integrated logistics provider and is equally evolved in air, sea and land freight operations.
                            The company has grown significantly over a year till today as one of the well-trusted logistics provider in Tuticorin.
                            ARK Shipping Services aims to provide quality services and strives to build and maintain relationship with customers.
                            Customers can be assured that ARK Shipping Services will be highly committed in offering efficient, prompt and value for money services.
                        </p>
                    </div>

                    {/* image */}
                    <div className="w-[30%]">
                        <img className=" object-cover rounded-xl" src="./images/img3.jpg" />
                    </div>

                </div>
            </div>

            <div className="w-full mt-32">
                <h1 className="text-8xl text-center font-bold mb-16">Services</h1>
                <div className=" flex gap-2 overflow-x-auto ">
                    {/* image */}
                    {
                        services.map((service, i) => (
                            <div className="w-80 h-64 bg-blue-500 rounded-xl p-8" key={i}>
                                <h1>{service.name}</h1>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>

    )
}

export default About