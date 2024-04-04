import Image from 'next/image';

import { User } from '~/utils/types';

const Navbar = ({ user }: { user: User }) => {

    const handleSignOut = () => {
        fetch('/api/login', {
            method: 'DELETE'
        }).then((res) => res.json()).then(() => {
            window.location.reload();
        }).catch(err => console.log(err));
    }

    return (
        <nav className='w-full mb-16 bg-[#1E28320D] py-4 px-6'>
            <div className='flex justify-center w-full relative'>
                <Image src='/assets/logo.png' width={150} height={150} className='w-auto h-full' alt='logo' />
                <div className='absolute flex items-center space-x-4 right-0'>
                    <p>Hi {user?.isLoggedIn ? user.name : 'Guest'}!</p>
                    {user?.isLoggedIn ?
                        <button onClick={handleSignOut}>
                            Sign out
                        </button>
                        : null}
                </div>
            </div>
        </nav>
    )
}

export default Navbar