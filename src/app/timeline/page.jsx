'use client'
import { AppContext } from '@/Context/apps.provider';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { MdOutlineCall } from 'react-icons/md';

const Timelinepage = () => {

    const { click, det } = useContext(AppContext);
    console.log(det)
    // const data = det.map((elem)=>elem)
    // console.log(det)

    return (
        <div>
            <div className="mt-20 w-11/12 mx-auto">
                <h2 className='text-4xl font-bold'>TimeLine</h2>
                <div className="">
                    <select
                        className='border px-10 py-2 rounded my-4'
                        onChange={(e) => setFilter(e.target.value)} >
                        <option value="" className='font-semibold text-[#64748B]'>Filter Timeline</option>
                        <option value="Call" className='font-semibold text-[#64748B]'>Call</option>
                        <option value="Text" className='font-semibold text-[#64748B]'>Text</option>
                        <option value="Video" className='font-semibold text-[#64748B]'>Video</option>
                    </select>
                    <div className="">
                        {
                            click.map((e) => {
                                return (
                                    <div key={e.id} className="flex items-center gap-5 my-7 bg-[#fff] rounded-xl p-5">
                                        <h2 className='font-semibold text-4xl text-[#26292d]'>{e.Call}</h2>

                                        <div className="">
                                            <h3 className='text-xl font-semibold text-[#64748B]'><span className='font-bold text-[#000] text-2xl'>{e.text}</span> with {det.name}</h3>
                                            <h3 className='text-xl font-semibold text-[#64748B]'>{det.next_due_date}</h3>
                                        </div>


                                    </div>
                                )
                            })


                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Timelinepage;