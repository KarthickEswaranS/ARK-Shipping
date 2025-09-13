
export const Counter = () => {

    const counters = [
        { id: 1, number: "100+", title: "Countries Served" },
        { id: 2, number: "500+", title: "Satisfied Clients" },
        { id: 3, number: "1000+", title: "Successful Shipments" },
        { id: 4, number: "50+", title: "Global Partners" },
    ]

    return (
        <div className="w-dvw mt-[5rem] px-[1rem] z-10 flex flex-col gap-8 lg:mt-[7rem] lg:flex-row lg:justify-around lg:items-center">

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
