
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialMediaIcon = [
    {
        name: 'X', icon: <XIcon className="w-5 h-5 text-white" />
    },
    {
        name: 'Instagram', icon: <InstagramIcon className="w-5 h-5 text-white" />
    },
    {
        name: 'WhatsApp', icon: <WhatsAppIcon className="w-5 h-5 text-white" />
    },
    {
        name: 'LinledIn', icon: <LinkedInIcon className="w-5 h-5 text-white" />
    },
    { name: 'Facebook', icon: <FacebookIcon className="w-5 h-5 text-white" /> }

]

const addresss = [
    {
        id: 1,
        city: 'Tuticorin',
        phones: ['+91 9894076146'],
        emails: ['arkshippingtut@gmail.com', 'admin@arkssnvocc.com', 'sales@arkssnvocc.com'],
        location: '49/4, 1st Floor, S.S.Moorthy Street, Tuticorin - 628002'
    },
    {
        id: 2,
        city: 'Chennai',
        phones: ['+91 9894076146'],
        location: '3, Gopal Chetty Street, 2nd Floor, Rajaji Salai, Chennai - 600 001'
    },
    {
        id: 3,
        city: 'Dubai',
        phones: ['00971508364706', '00971544022758'],
        location: '3010, 3rd P. O. No. 21706, Dubai, UAE.'
    },
]


const Contact = () => {

    return (

        <div className="bg-[#14506f] w-dvw mt-[3rem] px-[1rem] py-[1rem] z-10 flex flex-col gap-8 md:px-[1.5rem] lg:mt-[7rem] lg:pb-[4rem]">

            <div className="grid grid-cols-1 mt-[2rem] md:grid-cols-3 lg:grid-cols-4 gap-6 text-white text-center">
                {/* Main Title and Tagline */}
                <div className="flex flex-col gap-4 text-center">
                    <div className="w-full flex justify-center">
                        <img src="/images/logo.jpeg" className="w-full h-full rounded-2xl  xl:w-[17rem] xl:h-[6rem] " alt="" />
                    </div>
                    <div>
                        <p className="text-sm font-p text-white">
                            Your trusted logistics partner in Tuticorin. ARK Shipping Services offers seamless
                            solutions across air, sea, and land freight.
                        </p>
                    </div>

                    {/* Follow Us Section */}
                    <div className="text-center mt-2">
                        <h2 className="text-xl font-semibold text-white mb-2">Follow Us:</h2>
                        <div className="flex justify-center space-x-4">
                            {
                                socialMediaIcon.map((item, index) => (
                                    <div key={index} className="w-8 h-8 flex justify-center items-center  hover:bg-[#0a2a36] cursor-pointer">
                                        {item.icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Address */}
                {addresss.map((address, i) => (
                    <div className="w-full flex gap-4">
                        <div key={i} className='text-center'>
                            <h2 className="text-start text-2xl font-h font-semibold mb-4
                                                    lg:text-3xl">{address.city}</h2>
                            <ul className="list-none text-center px-4">
                                {
                                    address.phones.map((phone, i) => (
                                        <li key={`phone-${address.id}-${i}`} className="flex gap-3 mb-3">
                                            <PhoneIcon className="w-6 h-6 text-white" />
                                            <p className="text-sm font-p">{phone}</p>
                                        </li>
                                    ))
                                }
                                {
                                    address.emails && address.emails.map((email, i) => (
                                        <li key={`email-${address.id}-${i}`} className="flex gap-3 mb-3">
                                            <MailIcon className="w-5 h-5 text-white" />
                                            <p className="text-sm font-p ">{email}</p>
                                        </li>
                                    ))
                                }

                                <li className="flex gap-3 mb-3">
                                    <LocationPinIcon className="w-6 h-6 text-white" />
                                    <p className="text-sm font-p text-start ">{address.location}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
            <hr className='text-white' />


        </div>
    );
};

export default Contact