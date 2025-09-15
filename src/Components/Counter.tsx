export const Counter = () => {
    const counters = [
        { id: 1, number: "500+", title: "Satisfied Clients" },
        { id: 2, number: "1000+", title: "Successful Shipments" },
        { id: 3, number: "50+", title: "Global Partners" },
    ]

    return (
        <div className="w-dvw mt-[5rem] py-[3rem] px-[1rem] z-10 flex flex-col gap-8 bg-gray-100 lg:mt-[7rem] lg:flex-row lg:justify-around lg:items-center">
            {
                counters.map((counter) => (
                    <div key={counter.id} className="flex flex-col justify-center items-center">
                        <h1 className="font-bold font-h1 text-gradient-h3 text-6xl lg:text-7xl">{counter.number}</h1>
                        <p className="font-p text-sm lg:text-lg">{counter.title}</p>
                    </div>
                ))
            }

        </div>
    )
}
