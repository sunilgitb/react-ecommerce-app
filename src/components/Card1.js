// import React from 'react'

// function Card1() {
//   return (
//     <div className='flex flex-row bg-[#fee5d3] h-60 pt-36 pb-36 items-center shadow-lg shadow-slate-300'>
//         <div className="left flex flex-1 flex-col justify-items-start space-y-4 pl-10 pr-10">
//             <p className='text-sm'>50% off in all products</p>
//             <p className='text-4xl font-bold text'>Man Fashion</p>
//             <button className='bg-btn-red text-white text-xs w-fit pl-5 pr-5 pt-2 pb-2'>SHOP NOW</button>
//         </div>
//         <div className="right mr-10">
//             <img src="card1.png" className='h-72' alt="" />
//         </div>
//     </div>
//   )
// }

// export default Card1


import React from 'react';

function Card1() {
  return (
    <div className='flex flex-col bg-[#fee5d3] md:flex-row h-auto md:h-60 p-4 md:p-8 items-center shadow-lg shadow-slate-300'>
      <div className="left flex flex-1 flex-col justify-start md:justify-center md:items-start space-y-2 md:space-y-4 md:pl-4 md:pr-10">
        <p className='text-xs md:text-sm'>50% off in all products</p>
        <p className='text-lg md:text-4xl font-bold'>Man Fashion</p>
        <button className='bg-btn-red text-white text-xs md:text-sm w-fit px-3 md:px-5 py-1 md:py-2'>SHOP NOW</button>
      </div>
      <div className="right mt-4 md:mt-0 mx-4 md:mx-10">
        <img src="card1.png" className='h-40 md:h-62 w-full object-cover' alt="" />
      </div>
    </div>
  );
}

export default Card1;
