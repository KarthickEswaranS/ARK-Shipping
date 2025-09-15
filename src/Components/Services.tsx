
import { ArrowRight } from "@mui/icons-material";


const services = [
    { id: 1, name: 'Air Freight', img: '/images/img18.jpg' },
    { id: 2, name: 'Sea Freight', img: '/images/img25.jpg' },
    { id: 3, name: 'Land Freight', img: '/images/img24.jpg' },
    { id: 4, name: 'Customs Clearance', img: '/images/img6.jpg' },
    { id: 5, name: 'Project & Heavy Lift', img: '/images/Projects&HeavyLifts.jpg' },
    { id: 6, name: 'Packing & Removals', img: '/images/packing-remove-page.jpg' },
    { id: 7, name: 'Exhibition & Event', img: '/images/img22.jpg' },
    { id: 8, name: 'RORO & Breakbulk', img: '/images/roro.jpg' },
    { id: 9, name: 'Warehousing & Distribute', img: '/images/warehousing&distribution.jpg' },
    // { id: 10, name: 'Breakbulk', img: '/images/breakbulking.jpg' },

];

const ServiceCards = () => {
    return (
        <div className="w-dvw mt-[5rem] px-[1rem] z-10 flex flex-col justify-center items-center lg:mt-[7rem] lg:px-[5rem] ">

            <h1 className="font-bold font-h1 text-gradient-h3 text-center text-6xl mb-[3rem] 
                lg:text-8xl lg:mb-9">Service's</h1>
            {/* gap-6 py-[2rem] px-[1rem] overflow-x-auto no-scrollbar */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:mt-[4rem] gap-12   ">
                {
                    services.map((service) => {
                        return (
                            <div key={service.id}
                                className="max-w-[380px] h-[250px] relative bg-whiterounded-2xl drop-shadow-xl/75 hover:scale-105 transition-all duration-300 transform flex flex-col">
                                <img className="w-full h-full object-cover rounded-lg brightness-[70%]" src={service.img} />
                                <h1 className="text-2xl font-semibold text-white z-10 mt-4 absolute top-[1%] left-[5%]">{service.name}</h1>
                                <button className="bg-black/50 px-3 py-1 border border-white/50 rounded-lg text-sm font-medium text-white mt-2 absolute bottom-[10%] right-[10%] cursor-pointer hover:text-orange-500 ">
                                    <ArrowRight className="text-black\70" />
                                    Know More
                                </button>
                            </div>
                        );
                    })
                }

            </div>

        </div>
    );
};

export default ServiceCards;




{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((service) => {
                    // const Icon = service.icon;
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
            </div> */}