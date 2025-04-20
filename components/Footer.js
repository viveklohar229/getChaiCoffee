import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#373636] text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai Or Coffee - All rights reserved!</p>
    </footer>
  )
}

export default Footer
