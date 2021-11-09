import React from 'react'
import { Facebook, Instagram, Linkedin } from 'react-feather'
function Footer() {
  return (
    <div className="container mx-auto px-2 py-10 flex flex-col items-center gap-5">
      <h3 className="font-mono">Maths N Tech Club | NIT Durgapur</h3>
      <div className="flex gap-5 items-center">
        <a href="https://www.facebook.com/mathsntechclub/" target="_blank">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/mntc.nitd/" target="_blank">
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/company/maths-n-tech-club-nit-durgapur/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer
