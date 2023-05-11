  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import { faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin ,faGithub } from '@fortawesome/free-brands-svg-icons'
import Wrapper from '../shared/Wrapper'

export const userDetails=[
    {
        id:1,
        icon:<FontAwesomeIcon width={100} height={50} icon={faUser} style={{color: "#ffffff",}} />,
        h2:"Muhammad Hammad Ali",
        href:""
    },
        {
        id:2,
        icon:<FontAwesomeIcon  width={100} height={50} icon={faLinkedin} style={{color: "#ffffff",}} />,
        h2:"LinkedIn",
        href:""
    },    {
        id:3,
        icon:<FontAwesomeIcon  width={100} height={50} icon={faGithub}  style={{color: "#ffffff",}} />,
        h2:"Github",
        href:""
    },    {
        id:4,
        icon:<FontAwesomeIcon  width={100} height={50} icon={faEnvelope} style={{color: "#ffffff",}} />,
        h2:"hammadali02..",
        href:""
    },    
    
]
const MeAt = () => {

  return (
  <section>
    <Wrapper>
         <div className='flex flex-col items-center  justify-center my-32'>
<div>
    
                <h1 className= ' flex justify-center items-center text-white text-4xl  tracking-tight font-extrabold border-b-4 border-b-primary pb-2 md:mx-[620px]'>ME AT</h1>
</div>
                <div className='flex flex-col justify-center items-center mt-10 -ml-20 md:flex-row  md:-ml-20 md:gap-x-16 md:my-10'>
                   {
                    userDetails.map((item:any,id)=>
                        <div key={item} className="flex flex-col justify-center  items-center  "> 
                            <div className=' border-b-8 border-primary  md:mx-20 py-2 my-4  justify-center  w-4'>
                                {item.icon}
                                
                            </div>
                            <div className='text-lg text-white  pl-20  md:ml-14 md:-pl-20'>
                                {item.h2}
                            </div>
                        </div>
                    )
                   }
                </div>
            </div>
    </Wrapper>
  </section>
  )
}

export default MeAt
