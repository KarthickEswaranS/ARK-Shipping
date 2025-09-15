

export const Feedback = () => {


    const customers = [
        {
            id: 1,
            img: "/images/people/2img.jpg",
            name: "John Doe",
            position: "CEO, Company A",
            feedback: "ARK Shipping's air freight services streamlined our supply chain, delivering on time every time. Exceptional support!",
        },
        {
            id: 2,
            img: "/images/people/3img.jpg",
            name: "Jane Smith",
            position: "CTO, Company B",
            feedback: "Their sea freight solutions are cost-effective and reliable. Highly recommend for global logistics needs.",
        },
        {
            id: 3,
            img: "/images/people/4img.jpg",
            name: "Alice Johnson",
            position: "Operations Manager, Company C",
            feedback: "Professional team, seamless customs clearance, and top-notch tracking. ARK is our go-to logistics partner.",
        },
        {
            id: 4,
            img: "/images/people/5img.jpg",
            name: "Michael Chen",
            position: "Supply Chain Director, Global Traders",
            feedback: "ARK's land transport services are efficient and punctual. They’ve transformed our regional distribution.",
        },
        {
            id: 5,
            img: "/images/people/6img.jpg",
            name: "Emma Davis",
            position: "Logistics Coordinator, Tech Imports",
            feedback: "The real-time tracking and dedicated support from ARK Shipping made our shipments stress-free.",
        },
        {
            id: 6,
            img: "/images/people/7img.jpg",
            name: "Rahul Sharma",
            position: "Managing Director, Export Solutions",
            feedback: "ARK’s global network and expertise in freight forwarding have been a game-changer for our business.",
        },
        {
            id: 7,
            img: "/images/people/8img.jpg",
            name: "Carlos Rivera",
            position: "Warehouse Manager, Industrial Supplies",
            feedback: "Fast, reliable, and transparent. ARK Shipping’s solutions have optimized our inventory management.",
        },
        {
            id: 8,
            img: "/images/people/9img.jpg",
            name: "Aisha Khan",
            position: "VP of Operations, Pharma Distributors",
            feedback: "ARK’s attention to detail in handling sensitive cargo like pharmaceuticals is unmatched. Truly professional!",
        },
        {
            id: 9,
            img: "/images/people/10img.jpg",
            name: "Liam Wilson",
            position: "Founder, EcoFreight",
            feedback: "Their sustainable shipping options align perfectly with our values. ARK is a trusted partner for eco-friendly logistics.",
        },
    ];

    return (
        <section className="w-dvw py-[3rem] px-[1rem] md:px-[1.5rem] lg:py-[5rem] ">
            <h1 className="font-bold font-h1 text-gradient-h3 text-center text-6xl mb-[3rem] 
                lg:text-8xl lg:mb-9">What Cutomer's Say</h1>

            {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto */}
            <div className="flex gap-8 py-[2rem] px-[1rem] overflow-x-auto no-scrollbar">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className="min-w-[400px] max-w-[400px] bg-white p-6 ms-2 rounded-lg shadow-lg flex flex-col gap-4 text-center drop-shadow-xl">

                        <img src={customer.img} alt={customer.name} className="w-44 h-44 rounded-lg mx-auto object-cover object-top" />

                        <div>
                            <p className="font-p text-gray-600 italic mb-2i">"{customer.feedback}"</p>
                            <h3 className="font-bold text-lg text-gray-800">{customer.name}</h3>
                            {/* <p className="font-p text-sm text-gray-500">{customer.position}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}