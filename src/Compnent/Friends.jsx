"use client"
import Image from 'next/image';
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
    console.log(frd)
    return (
        <div>
            <div className="grid grid-cols-4 gap-3 mb-6 w-11/12 mx-auto">
                <div className="p-10 flex flex-col items-center justify-center gap-3 border rounded-xl">
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
                <div className="p-10 flex flex-col items-center justify-center gap-3 border rounded-xl">
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
                <div className="p-10 flex flex-col items-center justify-center gap-3 border rounded-xl">
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
                <div className="p-10 flex flex-col items-center justify-center gap-3 border rounded-xl">
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
            </div>
            <div className=" w-10/12 mx-auto">
                <h1 className='font-semibold text-3xl'>Friends</h1>
                <div className="grid grid-cols-4 gap-3 my-5">
                    {
                        frd.map((e)=>{
                            return(
                                <div key={e.id} className="flex flex-col items-center justify-center gap-1 border rounded-2xl py-3 ">
                        <Image src={e.picture} alt='hero' height={100} width={100}/>
                        <h2 className="text-3xl font-semibold">{e.name}</h2>
                        <p className='text-[#7e7e7e]'>{e.days_since_contact} days</p>
                        <div className="flex items-center gap-2">
                            <p className=' font-semibold bg-green-300 px-2 rounded-full'>{e.tags[0]}</p>
                            <p className=' font-semibold bg-green-300 px-2 rounded-full'>{e.tags[1]}</p>
                        </div>
                        <h4 className='text-xl bg-red-500 px-2 rounded-full text-white'>Overdev</h4>
                    </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Friends;