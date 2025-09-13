

const Hero = () => {

    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of the Congo",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "São Tomé and Príncipe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ]

    return (

        <div className="w-dvw h-dvh px-[1rem] pt-[1rem] 
        md:px-[1.5rem] lg:px-[5rem]">

            {/* Background Image */}
            <img className="w-full h-dvh object-cover absolute top-0 left-0 brightness-75"
                src="./images/img13.jpg" alt="Hero Background" />

            {/* nav logo */}
            <nav className="w-full flex relative mt-[1rem]">
                <div className="drop-shadow-xl/90">
                    <img className="w-[3rem] h-[3rem] rounded-xl z-10 md:hidden" src="/images/logo.png" alt="ARK logo" />
                    <img className="w-[12rem] h-[4rem] rounded-xl z-10 hidden md:block" src="/images/logo.jpeg" alt="ARK logo" />

                </div>
                <div className="absolute top-0 left-[20%] drop-shadow-xl/90 sm:hidden">
                    <h1 className="text-gradient-h1 text-xl font-medium">ARK SHIPPING SERVICE</h1>
                </div>
            </nav>

            <div className="w-full mt-[2rem] z-10 flex justify-center
                md:gap-4 md:relative">

                {/* Head lines */}
                <div className="hidden 
                    md:block md:w-[50%] md:mt-[4rem] md:text-center">
                    <h1 className="text-3xl font-bold italic drop-shadow-xl/50 text-gradient-h1 font-h1 mb-3 xl:text-5xl">ARK SHIPPING SERVICE</h1>
                    <h2 className="text-xl font-medium text-center drop-shadow-xl/50 text-gradient-h2 font-p xl:text-2xl">Delivering Confidence Beyond Logistics</h2>
                </div>

                {/* Get Quotes area */}
                <div className="w-full bg-white/30 rounded-2xl p-[1rem] drop-shadow-xl 
                    md:py-[1rem] md:px-[.5rem] md:w-[45%] lg:px-[1.5rem] lg:py-[2rem]">
                    <h1 className="text-white text-3xl font-bold font-h1 text-center 
                        md:text-3xl">Get quote</h1>
                    <div className="w-full mx-auto md:px-[1rem] xl:w-[88%] ">
                        <form className="flex flex-col gap-4 mt-4 text-white font-p justify-center">
                            <div className="flex flex-col gap-1">
                                <label className="text-white text-sm">Name</label>
                                <input className="p-2 rounded-lg bg-white text-black" type="text" placeholder="Name" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-white text-sm">Email Address</label>
                                <input className="p-2 rounded-lg bg-white text-black" type="email" placeholder="Email" />
                            </div>

                            <div className="flex gap-2">
                                <div className="flex flex-col gap-1 w-[30%]">
                                    <label className="text-white text-sm">Country</label>
                                    <select className="p-2 rounded-lg bg-white text-black/50">
                                        <option value="Select">Select</option>
                                        {
                                            countries.map((country, i) => (
                                                <option key={i} value={country}>{country}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1 w-[70%]">
                                    <label className="text-white text-sm">Phone</label>
                                    <input className="p-2 rounded-lg p-2 rounded-lg bg-white text-black" type="tel" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-white text-sm">Message</label>
                                <textarea className="p-2 rounded-lg p-2 rounded-lg bg-white text-black" placeholder="Additional Details" rows={4}></textarea>
                            </div>

                            <div className="w-full justify-center flex mt-4">
                                <button className="w-full items-center bg-[#ff5c00] text-white font-semi-bold p-3 rounded-lg hover:bg-gray-800 transition-all duration-300" type="submit">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero