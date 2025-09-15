import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PublicIcon from '@mui/icons-material/Public';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const Why = () => {

    const features = [
        {
            id: 1,
            title: "Expertise and Experience",
            description: "With years of industry knowledge, ARK Shipping ensures your logistics are managed with precision and professionalism.",
            icon: <MapsHomeWorkIcon className="w-9 h-9 " />
        },
        {
            id: 2,
            title: "Comprehensive Services",
            description: "We provide complete logistics solutions—covering air, sea, and land freight—tailored to your requirements.",
            icon: <HomeRepairServiceIcon className="w-9 h-9 " />
        },
        {
            id: 3,
            title: "Global Network",
            description: " Our strong global network guarantees smooth and reliable shipping connections across borders and continents.",
            icon: <PublicIcon className="w-9 h-9 " />
        },
        {
            id: 4,
            title: "Technology & Customized Solutions",
            description: " We combine advanced tracking with flexible, tailored shipping strategies, ensuring timely delivery and real-time visibility.",
            icon: <DeveloperBoardIcon className="w-9 h-9 " />
        },
    ]

    return (
        <div className="w-dvw mt-[5rem] lg:mt-[7rem] lg:px-[5rem] flex flex-col justify-center items-center">

            <img className="w-full h-full -z-10 object-cover rounded-3xl" src="/images/img15.jpg" />

            <div className=" absolute w-full z-10 px-[1rem] py-[1rem] flex flex-col justify-center items-center gap-4 ">

                <h1 className="font-bold font-h1 text-gradient-h3 text-6xl mb-[1rem] 
                lg:text-8xl">Why Choose Us?</h1>
                <p className="font-p text-sm lg:text-lg text-center w-[70%]">At ARK Shipping, we combine expertise, innovation, and global reach to deliver reliable logistics solutions, ensuring your cargo moves seamlessly, on time, and with complete transparency.</p>


                <div className="w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[2rem]">
                    {
                        features.map((feature) => (
                            <div key={feature.id} className="flex justify-center  gap-10 bg-white/[60%] p-6 rounded-lg drop-shadow-2xl/50">
                                <div className="">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Why
