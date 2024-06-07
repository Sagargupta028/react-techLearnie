import React from 'react'

const Footer = () => {
    var year = new Date().getFullYear()
  return (
    <footer className='w=100 bg-light text-center'>
    <p>© {year} TechLearnie. All Right Reserved | Terms and Condition</p>
    </footer>
  )
}

export default Footer
