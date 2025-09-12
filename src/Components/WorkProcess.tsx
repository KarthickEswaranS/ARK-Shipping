import {
    ClockIcon,
    HandIcon,
    GlobeIcon,
    LightningBoltIcon,
    AccessibilityIcon,
} from '@radix-ui/react-icons';
const WorkProcess = () => {

    const workProcess = [
        { id: 1, process: 'Expertise & Experience', message: 'With years of industry expertise, ARK Shipping Services ensures your logistics needs are handled with precision and professionalism.', icon: ClockIcon },
        { id: 2, process: 'Comprehensive Services', message: 'We offer a complete range of logistics solutions, including air, sea, and land freight, tailored to meet your unique requirements', icon: HandIcon },
        { id: 3, process: 'Global Network', message: 'Our extensive global network ensures smooth and reliable logistics connections across borders and continents.', icon: GlobeIcon },
        { id: 4, process: 'Customized Solutions', message: 'We design flexible, customized solutions that cater to specific shipping needs, ensuring your cargo arrives on time', icon: LightningBoltIcon },
        { id: 5, process: 'Technology & Tracking', message: 'Stay informed with advanced tracking technology, giving you real-time updates on your shipments’ progress.', icon: AccessibilityIcon },
    ];

    return (
        <div className="w-dvw mt-[3rem] px-[1rem] z-10 flex flex-col gap-8 md:px-[1.5rem] lg:mt-[7rem]">
            <h1 className="font-bold font-h1 text-gradient-h3 text-center text-6xl mb-[3rem] 
                lg:text-8xl lg:mb-9">Work Process</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                {workProcess.map((work) => {
                    const Icon = work.icon;
                    return (
                        <div
                            key={work.id}
                            className="flex flex-col items-center justify-center h-full p-6 bg-[#14506f]  rounded-2xl drop-shadow-xl/50 hover:drop-shadow-xl/75 transition duration-300 transform hover:scale-105"
                        >
                            <Icon className="h-[170px] w-[80px] text-white" />
                            <h1 className="text-xl lg:text-2xl font-bold text-white mt-4">{work.process}</h1>
                            <p className="text-sm font-p text-white mt-2 text-center">
                                {work.message}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Statistics Section */}
            {/* <div className="flex flex-col gap-8 justify-around mt-[7rem]">
                <div className="bg-pink-600/50 text-center p-4 rounded-2xl shadow-md text-white">
                    <h3 className="text-2xl font-bold">200+</h3>
                    <p className="text-sm">Team Members</p>
                </div>
                <div className="bg-pink-600/50 text-center p-4 rounded-2xl shadow-md text-white">
                    <h3 className="text-2xl font-bold">60+</h3>
                    <p className="text-sm">Shipping Solutions</p>
                </div>
                <div className="bg-pink-600/50 text-center p-4 rounded-2xl shadow-md text-white">
                    <h3 className="text-2xl font-bold">300+</h3>
                    <p className="text-sm">Client Reviews</p>
                </div>
            </div> */}
        </div>
    )
}

export default WorkProcess