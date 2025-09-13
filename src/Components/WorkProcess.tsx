import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ApprovalIcon from '@mui/icons-material/Approval';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const WorkProcess = () => {

    const workProcess = [
        {
            id: 1,
            process: 'Consultation & Document',
            icon: <HistoryEduIcon style={{ fontSize: '6rem' }} className="text-[#ff5c00]" />,
            message: ' We assess your cargo requirements and prepare the right shipping and compliance strategy.',
        },
        {
            id: 2,
            process: 'IOR Assignment',
            icon: <GavelIcon style={{ fontSize: '6rem' }} className="text-[#ff5c00]" />,
            message: 'We act as your Importer of Record, ensuring all documentation is handled under our valid trade license.',
        },
        {
            id: 3,
            process: 'Customs Clearance',
            icon: <ApprovalIcon style={{ fontSize: '6rem' }} className="text-[#ff5c00]" />,
            message: 'We file declarations, manage duties & taxes, and ensure smooth, hassle-free clearance.'
        },
        {
            id: 4,
            process: 'Final Delivery & Disposal',
            icon: <LocalShippingIcon style={{ fontSize: '6rem' }} className="text-[#ff5c00]" />,
            message: 'We deliver your cargo safely to the destination, along with compliance reports and tax documents.',
        },
    ];

    return (
        <div className="w-dvw flex flex-col items-center justify-center mt-[5rem] px-[1rem] z-10 gap-8 md:px-[1.5rem] lg:mt-[7rem]">
            <h1 className="font-bold font-h1 text-gradient-h3 text-center text-6xl mb-[3rem] 
                lg:text-8xl lg:mb-9">Work Process</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
                {
                    workProcess.map((work, index) => (
                        <div key={index} className='min-w-[300px] max-w-[290px] h-[300px] mt-8 relative bg-[#003b5a] rounded-2xl drop-shadow-2xl/50 hover:drop-shadow-xl/75 hover:scale-105 transition duration-300 transform flex flex-col p-6'>
                            <div className='w-full h-[50%] flex justify-center items-center  cursor-pointer'>
                                <span className='w-full flex justify-center'>{work.icon}</span>
                            </div>

                            <h1 className='font-h text-xl font-bold text-white text-center'>{work.process}</h1>
                            <p className='font-p text-sm mt-2  text-white text-center'>{work.message}</p>


                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default WorkProcess