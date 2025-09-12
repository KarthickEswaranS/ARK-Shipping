import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
const Contact = () => {
    return (

        <div className="bg-[#14506f]  w-dvw mt-[3rem] px-[1rem] z-10 flex flex-col gap-8 md:px-[1.5rem] lg:mt-[7rem]">
            <h1 className="font-bold font-h1 text-gradient-h1 text-center text-6xl mb-[3rem]  mt-[2rem]
                lg:text-8xl lg:mb-9">Contact</h1>

            {/* Main Title and Tagline */}
            <div className="flex flex-col gap-4 text-center mb-8">
                <div className="flex justify-center ">
                    <img src="/images/logo.jpeg" className="w-[10rem] h-[4rem] rounded-2xl  xl:w-[17rem] xl:h-[6rem] " alt="" />
                </div>
                <div>
                    <p className="text-lg text-white">
                        Your trusted logistics partner in Tuticorin. ARK Shipping Services offers seamless
                        solutions across air, sea, and land freight.
                    </p>
                </div>

            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
                {/* Tuticorin Address */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Our Address (Tuticorin)</h2>
                    <ul className="list-none space-y-1">
                        <li>+91 98940 76146</li>
                        <li>arkshippingtut@gmail.com</li>
                        <li>admin@arkssnvocc.com</li>
                        <li>sales@arkssnvocc.com</li>
                        <li>49/4, 1st Floor, S.S.Moorthy Street, Tuticorin - 628002</li>
                    </ul>
                </div>

                {/* Chennai Address */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Chennai</h2>
                    <ul className="list-none space-y-1">
                        <li>+91 98940 76146</li>
                        <li>3, Gopal Chetty Street, 2nd Floor, Rajaji Salai, Chennai - 600 001.</li>
                    </ul>
                </div>

                {/* Dubai Address */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Our Address (Dubai)</h2>
                    <ul className="list-none space-y-1">
                        <li>00971508364706, 00971544022758</li>
                        <li>3010, 3rd P. O. No. 21706, Dubai, UAE.</li>
                    </ul>
                </div>
            </div>

            {/* Follow Us Section */}
            <div className="text-center mt-8">
                <h2 className="text-xl font-semibold text-white mb-2">Follow Us:</h2>
                <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 rounded-full">
                        <TwitterLogoIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full">
                        <InstagramLogoIcon className="w-8 h-8 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact