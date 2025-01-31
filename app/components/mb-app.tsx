import infos from '../data/mobileApp.json';
import Image from 'next/image';

const MbApp = () => {
    return ( 

        <div className=' mb-10 h-[60vh] mt-20 w-3/4 mx-auto flex flex-shrink-0 flex-grow-0'>
            <div className='gap-8 flex flex-col items-center justify-center w-full'>
                <p className='text-5xl  font-bold'>{infos.title}</p>
                <p className='text-gray-500'>{infos.description}</p></div>
                <Image src={infos.imgUrl} alt="img" width={450}height={400}  />


        </div>
     );
}
 
export default MbApp;

