'use client'

import {
    NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '../../components/ui/navigation-menu'
import Link from "next/link"
import { BookOpenIcon } from '@heroicons/react/24/outline'


export default function Sidebar() {
    return (
        <>
    <aside
    className="fixed top-0 left-0 z-40 w-[180px] h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav"
    id="drawer-navigation"
  >
    <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/tailwindui-navbar" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <BookOpenIcon className="h-4 w-4 mr-1 text-orange-400" aria-hidden="true" />
              <div className='text-orange-400'>Documentation</div>
            </NavigationMenuLink>
          </Link>
          <Link href="/tailwindui-navbar" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <BookOpenIcon className="h-4 w-4 mr-1" aria-hidden="true" />
              Documentation2
            </NavigationMenuLink>
          </Link>
          <Link href="/tailwindui-navbar" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <BookOpenIcon className="h-4 w-4 mr-1" aria-hidden="true" />
              Documentation3
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  </aside>
        </>
    )
}