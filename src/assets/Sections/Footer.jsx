import { footerMedia, socialMedia } from '../Constants'
import nikeLogo from '../Icons/nikeIcon.png'
import copyRight from '../Icons/icons8-copyright-100.png'


const Footer = () => {
  return (
    <footer className="max-container">
      <div className='flex flex-wrap gap-20 
    items-center'>
        <div className="flex justify-between
        items-start gap-10 flex-wrap max-lg:flex-col lg:flex-col">
          <div className='flex flex-col items-start'>
            <a href="/">
              <img 
              src={nikeLogo} 
              alt="nikeLogo"
              width={150}
              height={46}/>
            </a>
          </div>
            <p className='font-Garamond text-xl leading-7 sm:max-w-sm
            text-slate-gray'>
              Get shoe ready for the new term at your
              nearest Nike store, Find Your perfect Size in
              Store, Get Reward.
            </p>
          <div className='flex justify-center items-center 
          gap-9'>
            {
              socialMedia.map((social,index)=>(
                <a key={index} href={social.href} 
                className='bg-white rounded-full 
                w-9 h-9 flex items-center justify-center'>
                  <img
                  src={social.icon} 
                  alt="Social Media Icon"
                  width={28}
                  height={28} /></a>
              ))
            }
          </div>
        </div>
        <div className='mt-14 flex flex-1 justify-between lg:gap-10 
        gap-20 flex-wrap'>
          {
            footerMedia.map((footerData)=>(
            <div className=''>
              <h2 className='text-2xl text-white font-bold 
              font-montserrat'>{footerData.title}</h2>
              <ul className=' mt-7'>
                {footerData.subs.map((sub)=>(
                  <li className='mt-3 text-slate-gray 
                  font-Garamond text-base cursor-pointer'><a>{sub}</a></li>
                ))}
              </ul>
            </div>

            ))
          }
          
        </div>
      </div>
      <div className='flex justify-between w-full items-center mt-20'>
          <div className='flex flex-1 justify-start items-center gap-4'>
            <img 
            src={copyRight}
            alt=""
            width={25}
            height={25} />
            <p className='font-montserrat text-base text-slate-gray'>copyright, All right reserved</p>
          </div>
          <div className='font-montserrat text-base text-slate-gray cursor-pointer flex-1 flex justify-end'>
            <a>Terms & Conditions</a>
          </div>
      </div>
    </footer>
  )
}

export default Footer