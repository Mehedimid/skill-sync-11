import React from 'react';

function SectionTitle({children}) {
    return (
        <div className='text-3xl md:text-5xl font-bold font-section-title border-l-8 border-[#B33030] pl-1 py-1'>
           {children}
        </div>
    );
}

export default SectionTitle;