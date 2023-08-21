// import React from 'react'

// function Footer() {
//   return (
//     <>
//     <div className='support grid grid-cols-3 my-16 mx-auto'>
//         <div className="flex flex-col space-y-2 items-center justify-items-center">
//             <img src="shipped.png" className='h-10 w-10' alt="" />
//             <h1 className='text-xl font-medium'>Free Delivery</h1>
//             <p className='text-sm w-2/3 text-center'>If you are going to use of Lorem, you need to be sure there anything.</p>
//         </div>
//         <div className="flex flex-col space-y-2 items-center justify-items-center border-x-2 border-x-slate-400">
//             <img src="money.png" className='h-10 w-10' alt="" />
//             <h1 className='text-xl font-medium'>30 Day Return</h1>
//             <p className='text-sm w-2/3 text-center'>If you are going to use of Lorem, you need to be sure there anything.</p>
//         </div>
//         <div className="flex flex-col space-y-2 items-center justify-items-center">
//             <img src="support.png" className='h-10 w-10' alt="" />
//             <h1 className='text-xl font-medium'>24/7 support</h1>
//             <p className='text-sm w-2/3 text-center'>If you are going to use of Lorem, you need to be sure there anything.</p>
//         </div>
//     </div>
//     <div className="newletter grid grid-cols-2 bg-btn-red py-8 px-12 items-center mb-12">
//         <h1 className='text-2xl text-white font-medium font-sans'>Subscribe Our Newsletter</h1>
//         <div className='flex flex-row'>
//             <input type="text" placeholder='Enter Email Address' className='p-2 flex-1' />
//             <button className='bg-gray-900 text-white text-sm text-center py-3 px-5'>Subscribe</button>
//         </div>
//     </div>
//     <div className="references flex flex-col bg-black text-white font-sans">
//         <div className='flex-1 my-12 mx-14'>
//             <div className='flex space-x-8'>
//                 <div className='grow ml-18 space-y-4'>
//                   <div className='flex flex-row mx-auto space-x-2'>
//                     <img src="cart.png" className='h-12 w-12' alt="" />
//                     <h1 className='text-3xl font-medium font-sans pt-2'>Shopwise</h1>
//                   </div>
//                   <div>
//                   <p className='text-sm w-11/12'>If you are going to use of Lorem, you need to be sure there anything.</p>
//                   </div>
//                   <div className='grid grid-cols-5 gap-0 items-center w-3/4 justify-center'>
//                         <img className='h-7 w-7' src="fb.png" alt="" />
//                         <img className='h-7 w-7' src="twitter.png" alt="" />
//                         <img className='h-7 w-7' src="g.png" alt="" />
//                         <img className='h-7 w-7' src="y.png" alt="" />
//                         <img className='h-7 w-7' src="i.png" alt="" />
//                   </div>
//                 </div>
//                 <div className='grow-0 w-48 space-y-4'>
//                   <h1 className='text-xl font-medium'>Useful Links</h1>
//                   <ul className='text-sm space-y-2'>
//                     <li>About Us</li>
//                     <li>FAQ</li>
//                     <li>Location</li>
//                     <li>Affiliates</li>
//                     <li>Contact</li>
//                   </ul>
//                 </div>
//                 <div className='grow-0 w-48 space-y-4'>
//                 <h1 className='text-xl font-medium'>Category</h1>
//                   <ul className='text-sm space-y-2'>
//                     <li>Men</li>
//                     <li>Woman</li>
//                     <li>Kids</li>
//                     <li>Best Seller</li>
//                     <li>New Arrivals</li>
//                   </ul>
//                 </div>
//                 <div className='grow-0 w-48 space-y-4'>
//                 <h1 className='text-xl font-medium'>My Accounts</h1>
//                   <ul className='text-sm space-y-2'>
//                     <li>My Accounts</li>
//                     <li>Discount</li>
//                     <li>Returns</li>
//                     <li>Orders History</li>
//                     <li>Orders Tracking</li>
//                   </ul>
//                 </div>
//                 <div className='grow space-y-3'>
//                     <h1 className='text-xl font-medium mb-6'>Contact Info</h1>
//                     <div className='flex flex-row space-x-4'>
//                         <img src="marker.png" className='h-7 w-7' alt="" />
//                         <p className='text-sm'>123 Street, Thane West, Maharashtra, India</p>
//                     </div>
//                     <div className='flex flex-row space-x-4'>
//                         <img src="message.png" className='h-7 w-7' alt="" />
//                         <p className='text-sm'>info@sitename.com</p>
//                     </div>
//                     <div className='flex flex-row space-x-4'>
//                         <img src="mobile.png" className='h-7 w-7' alt="" />
//                         <p className='text-sm'>+91 123 456 7890</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr />
//         <div className='flex flex-row items-center'>
//             <div className='flex-1 py-4 pl-12'>
//                 @2020 All Rights Reserved by Bestwebcreator
//             </div>
//             <div className='grid grid-cols-5 space-x-1'>
//                 <img className='h-11 w-16' src="visa.png" alt="" />
//                 <img className='h-11 w-16' src="discover.png" alt="" />
//                 <img className='h-11 w-16' src="mc.png" alt="" />
//                 <img className='h-11 w-16' src="paypal.png" alt="" />
//                 <img className='h-11 w-16' src="ae.png" alt="" />
//             </div>
//             <div className='m-5 h-9 w-9 pt-2'>
//                 <img src="up.png" alt="" />
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Footer

import React from 'react';

function Footer() {
  return (
    <>
      <div className='support grid grid-cols-1 md:grid-cols-3 my-6 md:my-16 mx-4 md:mx-auto md:w-4/5'>
        <div className="flex flex-col space-y-4 md:items-center md:justify-items-center md:border-r-2 md:border-x-slate-400">
          <img src="shipped.png" className='h-10 w-10 mx-auto' alt="" />
          <h1 className='text-xl font-medium text-center'>Free Delivery</h1>
          <p className='text-sm text-center'>If you are going to use of Lorem, you need to be sure there anything.</p>
        </div>
        <div className="flex flex-col space-y-4 md:items-center md:justify-items-center md:border-r-2 md:border-x-slate-400">
          <img src="money.png" className='h-10 w-10 mx-auto' alt="" />
          <h1 className='text-xl font-medium text-center'>30 Day Return</h1>
          <p className='text-sm text-center'>If you are going to use of Lorem, you need to be sure there anything.</p>
        </div>
        <div className="flex flex-col space-y-4 md:items-center md:justify-items-center">
          <img src="support.png" className='h-10 w-10 mx-auto' alt="" />
          <h1 className='text-xl font-medium text-center'>24/7 support</h1>
          <p className='text-sm text-center'>If you are going to use of Lorem, you need to be sure there anything.</p>
        </div>
      </div>
      <div className="newletter bg-btn-red py-4 md:py-8 px-6 md:px-12 flex flex-col md:flex-row items-center mb-6 md:mb-12">
        <h1 className='text-xl md:text-2xl text-white font-medium font-sans mb-4 md:mb-0'>Subscribe to Our Newsletter</h1>
        <div className='flex flex-col md:flex-row md:ml-4 space-y-2 md:space-y-0 md:space-x-2 md:flex-1'>
          <input type="text" placeholder='Enter Email Address' className='p-2 md:flex-1' />
          <button className='bg-gray-900 text-white text-sm text-center py-2 px-4 md:py-3 md:px-5'>Subscribe</button>
        </div>
      </div>
      <div className="references flex flex-col bg-black text-white font-sans md:flex-row">
        <div className='flex-1 my-6 md:my-12 md:mx-14'>
          <div className='flex space-x-4 items-center md:mx-auto space-x-2'>
            <img src="cart.png" className='h-12 w-12' alt="" />
            <h1 className='text-2xl font-medium font-sans'>Shopwise</h1>
          </div>
          <p className='text-sm md:w-2/3'>If you are going to use of Lorem, you need to be sure there anything.</p>
          <div className='grid grid-cols-5 gap-1 mt-4 md:justify-center'>
            <img className='h-7 w-7' src="fb.png" alt="" />
            <img className='h-7 w-7' src="twitter.png" alt="" />
            <img className='h-7 w-7' src="g.png" alt="" />
            <img className='h-7 w-7' src="y.png" alt="" />
            <img className='h-7 w-7' src="i.png" alt="" />
          </div>
        </div>
        <hr className='border-gray-600 md:hidden' />
        <div className='md:grow-0 md:w-48 space-y-4 md:border-t-2 md:border-t-slate-400'>
          <h1 className='text-xl font-medium'>Useful Links</h1>
          <ul className='text-sm space-y-2'>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Location</li>
            <li>Affiliates</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='md:grow-0 md:w-48 space-y-4 md:border-t-2 md:border-t-slate-400'>
          <h1 className='text-xl font-medium'>Category</h1>
          <ul className='text-sm space-y-2'>
            <li>Men</li>
            <li>Woman</li>
            <li>Kids</li>
            <li>Best Seller</li>
            <li>New Arrivals</li>
          </ul>
        </div>
        <div className='md:grow-0 md:w-48 space-y-4 md:border-t-2 md:border-t-slate-400'>
          <h1 className='text-xl font-medium'>My Accounts</h1>
          <ul className='text-sm space-y-2'>
            <li>My Accounts</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Orders Tracking</li>
          </ul>
        </div>
        <div className='md:grow space-y-3'>
          <h1 className='text-xl font-medium mb-3'>Contact Info</h1>
          <div className='flex flex-row space-x-4 items-center'>
            <img src="marker.png" className='h-7 w-7' alt="" />
            <p className='text-sm'>123 Street, Thane West, Maharashtra, India</p>
          </div>
          <div className='flex flex-row space-x-4 items-center'>
            <img src="message.png" className='h-7 w-7' alt="" />
            <p className='text-sm'>info@sitename.com</p>
          </div>
          <div className='flex flex-row space-x-4 items-center'>
            <img src="mobile.png" className='h-7 w-7' alt="" />
            <p className='text-sm'>+91 123 456 7890</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center md:flex-row md:justify-between bg-gray-900 text-white py-2 px-4'>
        <div className='py-2'>
          @2020 All Rights Reserved by Bestwebcreator
        </div>
        <div className='flex space-x-1'>
          <img className='h-7 w-10' src="visa.png" alt="" />
          <img className='h-7 w-10' src="discover.png" alt="" />
          <img className='h-7 w-10' src="mc.png" alt="" />
          <img className='h-7 w-10' src="paypal.png" alt="" />
          <img className='h-7 w-10' src="ae.png" alt="" />
        </div>
        <div className='m-2'>
          <img src="up.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer;
