"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Friends = () => {

    const [frd, setFrd] = useState([])

    const handelfetching = async () => {
        const res = await fetch('/friend.json');
        const prom = await res.json();
        // console.log(prom)
        setFrd(prom)
    }

    useEffect(() => {
        handelfetching();
    }, []);
    // console.log(frd)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3 mb-6 w-11/12 mx-auto">
                <div className="p-10 flex flex-col items-center justify-center gap-3 box rounded-xl">
                    <p className='text-5xl font-semibold'>10</p>
                    <p className='text-2xl font-semibold'>Total friends</p>
                </div>
                <div className="p-10 flex flex-col items-center justify-center gap-3 box rounded-xl">
                    <p className='text-5xl font-semibold'>3</p>
                    <p className='text-2xl font-semibold'>On-Track</p>
                </div>
                <div className="p-10 flex flex-col items-center justify-center gap-3 box rounded-xl">
                    <p className='text-5xl font-semibold'>6</p>
                    <p className='text-2xl font-semibold'>Need Attention</p>
                </div>
                <div className="p-10 flex flex-col items-center justify-center gap-3 box rounded-xl">
                    <p className='text-5xl font-semibold'>{frd.length}</p>
                    <p className='text-2xl font-semibold'>Interactions This Month</p>
                </div>
                
            </div>
            <div className=" w-11/12 mx-auto">
                <h1 className='font-semibold text-3xl'>Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
                    {
                        frd.map((e) => {
                            return (
                                <Link key={e.id} href={`/${e.id}`}>
                                    <div className="flex flex-col items-center justify-center gap-2 box rounded-2xl py-3 ">
                                        <Image src={e.picture} alt='hero' height={100} width={100} />
                                        <h2 className="text-3xl font-semibold">{e.name}</h2>
                                        <p className='text-[#7e7e7e]'>{e.days_since_contact} days</p>
                                        <div className="flex items-center gap-2">
                                            <p className=' font-semibold bg-[#CBFADB] py-1 px-2 rounded-full'>{e.tags[0]}</p>
                                            <p className=' font-semibold bg-[#CBFADB] py-1 px-2 rounded-full'>{e.tags[1]}</p>
                                        </div>
                                        <h4 className={
                                            e.status === 'overdue' ?
                                                'text-xl bg-[#ef4444] px-2 rounded-full text-white'
                                                : e.status === 'almost due'
                                                    ? 'text-xl bg-[#efad44] px-2 rounded-full text-white' :
                                                    'text-xl bg-[#244d3f] px-2 rounded-full text-white'}>
                                            {e.status}</h4>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    );
};

export default Friends;