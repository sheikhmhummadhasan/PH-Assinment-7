import DeatilCard from '@/Compnent/DeatilCard';
import React from 'react';

const Detailpage = async({params}) => {

    let {detail} = await params;

    return (
        <div>
            <DeatilCard detail={detail}></DeatilCard>
        </div>
    );
};

export default Detailpage;