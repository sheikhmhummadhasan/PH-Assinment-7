import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-[#244D3F] text-primary-content p-10 flex flex-col gap-8">

            {/* Top Section */}
            <aside className="text-center md:text-left flex flex-col items-center  md:items-center mx-auto gap-3">
                <Image
                    src={'/logo-xl.png'}
                    alt='this is footer logo'
                    width={400}
                    height={100}
                />

                <p className="max-w-md text-center">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </aside>

            {/* Social */}
            <nav className="text-center mx-auto">
                <h2 className="text-2xl font-semibold mb-3">Social Links</h2>

                <div className="flex justify-center md:justify-start gap-4">
                    <FaTwitter size={24} /><FaYoutube size={24} /><FaFacebook size={24} />
                </div>
            </nav>

            {/* Bottom Section */}
            <div className="border-t-2 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 w-full">

                <p className="text-center md:text-left">
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>

                <div className="flex flex-col md:flex-row gap-4 text-center">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;