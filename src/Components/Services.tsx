import {
    RocketIcon,
    TargetIcon,
    CubeIcon,
    CheckCircledIcon,
    DoubleArrowRightIcon,
    StackIcon,
    FileTextIcon,
    ArchiveIcon,
    LinkNone2Icon,
    StarIcon,
    BoxIcon,
} from '@radix-ui/react-icons';



const services = [
    { id: 1, name: 'Air Freight', icon: RocketIcon },
    { id: 2, name: 'Sea Freight', icon: TargetIcon },
    { id: 3, name: 'Breakbulk', icon: CubeIcon },
    { id: 4, name: 'Customs Clearance', icon: CheckCircledIcon },
    { id: 5, name: 'RORO', icon: DoubleArrowRightIcon },
    { id: 6, name: 'Land Freight', icon: StackIcon },
    { id: 7, name: 'Documenting Process', icon: FileTextIcon },
    { id: 8, name: 'Warehousing & Distribute', icon: ArchiveIcon },
    { id: 9, name: 'Project & Heavy Lift', icon: LinkNone2Icon },
    { id: 10, name: 'Exhibition & Event', icon: StarIcon },
    { id: 11, name: 'Packing & Removals', icon: BoxIcon },
];

const ServiceCards = () => {
    return (
        <div className="w-dvw mt-[5rem] px-[1rem] z-10 flex flex-col gap-8 md:px-[1.5rem] lg:mt-[7rem]">
            <h1 className="font-bold font-h1 text-gradient-h3 text-center text-6xl mb-[3rem] 
                lg:text-8xl lg:mb-9">Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={service.id}
                            className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-2xl drop-shadow-xl/50 hover:drop-shadow-xl/75 transition duration-300 transform hover:scale-105"
                        >
                            <Icon className="h-9 w-12 text-black/70" />
                            <h1 className="text-2xl font-bold text-black/70 mt-4">{service.name}</h1>
                            <a className="text-sm font-bold text-blue-500 mt-2 cursor-pointer hover:text-blue-900">
                                Know More
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceCards;