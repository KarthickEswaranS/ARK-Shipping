
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
        <>
            <div className="w-full ">
                {/* nav logo */}
                <nav className="w-full">
                    <div className="w-[200px] h-[70px] drop-shadow-xl/30 hover:scale-105 transition-all duration-300">
                        <img className="w-full rounded-xl" src="/resized.jpg" alt="ARK logo" />
                    </div>
                </nav>

                <div className="w-full h-full flex gap-8 justify-center relative mt-18">
                    <div className="w-[55%] grid grid-cols-2 auto-rows-[170px] gap-8">

                        <div className="absolute top-[45%] left-[10%] z-10 text-white text-center">
                            <h1 className="text-5xl font-bold italic drop-shadow-xl/75 grayscale-50">ARK SHIPPING SERVICE</h1>
                            <h2 className="text-2xl text-center drop-shadow-xl/75 grayscale-50 ">Delivering Confidence Beyond Logistics</h2>
                        </div>

                        <div className="relative row-span-2 bg-blue-900 rounded-2xl drop-shadow-xl/75 hover:scale-105 transition-all duration-300">
                            <p className="absolute top-[3%] right-[3%] text-xl font-bold italic text-white/45 drop-shadow-xl/75">Sea Ways</p>
                            <img className="w-full h-full object-cover rounded-xl" src="./images/img4.jpeg" />
                        </div>

                        <div className="relative bg-blue-600 rounded-2xl drop-shadow-xl/75 hover:scale-110 transition-all duration-300">
                            <p className="absolute top-[3%] right-[3%] text-xl font-bold italic text-white/45 drop-shadow-xl/75">Customs Clearance</p>
                            <img className="w-full h-full object-cover rounded-xl" src="./images/img6.jpg" />
                        </div>

                        <div className="relative row-span-2 bg-blue-800 rounded-2xl drop-shadow-xl/75 hover:black-sky-700 hover:scale-108 transition-all duration-300">
                            <p className="absolute top-[3%] right-[3%] text-xl font-bold italic text-white/45 drop-shadow-xl/75">Road Ways</p>
                            <img className="w-full h-full object-fill rounded-xl" src="./images/img3.jpg" />
                        </div>

                        <div className="relative bg-blue-700 rounded-2xl drop-shadow-xl/75 hover:scale-112 transition-all duration-300">
                            <p className="absolute top-[3%] right-[3%] text-xl font-bold italic text-white/45 drop-shadow-xl/75">Air Ways</p>
                            <img className="w-full h-full object-cover object-top rounded-xl" src="./images/img1.jpg" />
                        </div>
                    </div>

                    {/* Get Quotes area */}
                    <div className="w-[35%] bg-[#14506f] rounded-2xl p-[16px] drop-shadow-xl/75">
                        <h1 className="text-white text-4xl font-semi-bold text-center">Get quote</h1>
                        <div className="w-[80%] mx-auto">
                            <form className="flex flex-col gap-4 mt-4 text-white justify-center">
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

        </ >

    )
}

export default Hero