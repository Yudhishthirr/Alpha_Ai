import React from 'react'
import MobileSideBar from './MobileSideBar'
import {UserButton} from "@clerk/nextjs"
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      {/* <Button className='md:hidden' size="icon" variant="ghost">
        <Menu/>
      </Button> */}
      <MobileSideBar/>
      <div className="flex w-full justify-end gap-x-2">
        <div className="my-auto">
          <UserButton afterSignOutUrl="/"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar