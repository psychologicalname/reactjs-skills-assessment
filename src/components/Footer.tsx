import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaArrowUp } from 'react-icons/fa6';
import { footerLinks } from '~/constants';

const Footer = () => {
    return (
        <footer className='flex-center flex-col w-full mt-[200px]'>
            <div className='container md:grid grid-cols-4 gap-8'>
                <div className='flex flex-col'>
                    <div>
                        <img src='/assets/logo.png' width={150} height={150} className='w-auto h-full' alt='logo' />
                    </div>
                    <p className='text-gray-500 text-sm my-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <div className='flex items-center space-x-8'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaInstagram />
                    </div>
                </div>

                {footerLinks.map((item) => (
                    <div key={item.id} className='flex flex-col'>
                        <h2 className='font-semibold mb-3 text-base'>{item.title}</h2>
                        {item.links.map((link, key) => (
                            <Link key={key} href={link.url} className='flex flex-col mb-3'>
                                <p className='text-xs'>{link.text}</p>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            <div className='w-full bg-black py-4 text-white text-center mt-[90px] flex-center'>
                <div className='flex justify-between items-center container'>
                    <p>&copy; 2022 Coral, Inc.</p>
                    <img src='/assets/payment_methods.png' width={150} height={150} className='w-auto h-full' alt='cards' />
                    <div className='flex items-center space-x-2 cursor-pointer' onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <p>Scroll To Top</p>
                        <FaArrowUp />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
