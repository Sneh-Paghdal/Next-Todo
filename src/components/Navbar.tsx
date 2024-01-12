'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"

const Navbar = () => {

    const searchParams = useSearchParams();
    const currentState = searchParams.get('todo');

  return (
    <nav className=" flex justify-evenly mt-6">
        <Link href='/' className={` ml-10 hover:border-b-2 hover:border-black mr-10 cursor-pointer ${currentState === null ? "border-b-2 border-black" : ""} ` }> All </Link>
        <Link href='/?todo=active' className={`hover:border-b-2 hover:border-black ml-10 mr-10 cursor-pointer ${currentState === "active" ? "border-b-2 border-black" : ""} ` }> Active </Link>
        <Link href='/?todo=complete' className={`hover:border-b-2 hover:border-black ml-10 mr-10 cursor-pointer ${currentState === "complete" ? "border-b-2 border-black" : ""} ` }> Complete </Link>
    </nav>
  )
}

export default Navbar
