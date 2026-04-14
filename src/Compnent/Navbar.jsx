'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center p-3 lg:navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Image src={'/logo.png'} height={50} width={200} alt={'this is logo'} ></Image>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={'/'}><button className={pathname === '/' ? 'bg-[#244D3F] text-white btn rounded' : 'btn'}><FaHome /> Home</button></Link></li>
                        <li><Link href={'/timeline'}><button className={pathname === '/timeline' ? 'bg-[#244D3F] text-white btn rounded' : 'btn'}><IoTimeOutline /> Timeline</button></Link></li>
                        <li><Link href={'/stats'}><button className={pathname === '/stats' ? 'bg-[#244D3F] text-white btn rounded' : 'btn'}><TfiStatsUp /> Stats</button></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;