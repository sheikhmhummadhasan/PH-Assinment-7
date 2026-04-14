import Image from 'next/image';
import React from 'react';
import { MdOutlineCall } from 'react-icons/md';

const Timelinepage = () => {
    return (
        <div>
            <div className="mt-20 w-11/12 mx-auto">
                <h2 className='text-4xl font-bold'>TimeLine</h2>
                <div className="">
                    <select className='border px-10 py-2 rounded my-4' >
                        <option value="" className='font-semibold text-[#777]'>Filter Timeline</option>
                        <option value="Call" className='font-semibold text-[#777]'>Call</option>
                        <option value="Text" className='font-semibold text-[#777]'>Text</option>
                        <option value="Video" className='font-semibold text-[#777]'>Video</option>
                    </select>
                    <div className="">
                        <div className="flex items-center gap-5 my-5 box rounded-xl p-5">
                            <h2 className='font-semibold text-6xl'><MdOutlineCall /></h2>
                            <div className="">
                                <h3 className='text-2xl font-semibold'>CAll with Shera Shen</h3>
                                <h3 className='text-2xl font-semibold'>march-12/2013</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Timelinepage;