import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideBar from "@/components/SideBar";
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
const MobileSideBar = () => {
  return (
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden" asChild>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SideBar/>
        </SheetContent>
      </Sheet>
  )
}

export default MobileSideBar