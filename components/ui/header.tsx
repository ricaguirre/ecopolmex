'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6'
import { TbBrandYoutubeFilled } from 'react-icons/tb'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([])
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(menuName) ? prev.filter((item) => item !== menuName) : [...prev, menuName],
    )
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('button')) {
  //       setIsMobileMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Inicio", id: "top" },
    { name: "Nosotros", id: "nosotros" },
    {
      name: "Servicios", href: "/#servicios",
      subItems: [
        { name: "TR", href: "/tr" },
        { name: "Inyección de Suelas", href: "/inyeccion-suelas" },
        { name: "Prototipos e Inyección", href: "/prototipos" },
        { name: "Servicios de Reciclaje", href: "/reciclaje" },
      ],
    },
    { name: "Portafolio", id: "portafolio" },
    { name: "Clientes", id: "clientes" },
    { name: "Procesos", id: "procesos" },
    { name: "Contacto", id: "contacto" },
  ]

  const socialIcons = [
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/ecopolmex" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/ecopolmex" },
    { name: "YouTube", icon: TbBrandYoutubeFilled, href: "https://youtube.com/@ECOPOLIMEROSMEXICANOS" },
    { name: "TikTok", icon: FaTiktok, href: "https://tiktok.com/@ecopolmex" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Social Icons - Desktop */}
      <div className="bg-[#003B7E] text-white hidden lg:block">
        <div className="container mx-auto flex justify-end py-2">
          <div className="flex gap-4">
            {socialIcons.map((social) => (
              <Link key={social.name} href={social.href} className="transition-colors hover:text-[#00BFB3]">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
          <Link href="/" className="flex items-center" onClick={() => scrollToSection("top")}>
            <Image
              src={`/images/logo.svg`}
              alt="Ecopolmex Logo"
              width={400}
              height={300}
              className="h-16 w-auto lg:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="text-sm font-medium text-gray-900 transition-colors hover:text-[#00BFB3]">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="min-w-[200px] p-2 bg-white">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.href}>
                                <Link
                                  href={subItem.href}
                                  className="block px-3 py-1.5 text-sm text-gray-900 hover:font-bold hover:underline"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-sm font-medium text-gray-900 transition-colors hover:text-[#00BFB3]"
                      >
                        {item.name}
                      </button>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="https://wa.me/+524776701328?text=Buen%20dia%2C%20me%20gustaria%20recibir%20mas%20informacion%20acerca%20de%20sus%20productos"
              className="rounded-full border-2 border-[#00BFB3] px-6 py-2 text-sm font-medium text-[#00BFB3] transition-colors hover:bg-[#00BFB3] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mandar mensaje
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center lg:hidden">
            <a
              href="https://wa.me/+524776701328?text=Buen%20dia%2C%20me%20gustaria%20recibir%20mas%20informacion%20acerca%20de%20sus%20productos"
              className="mr-4 rounded-full border-2 border-[#00BFB3] px-4 py-1 text-sm font-medium text-[#00BFB3] transition-colors hover:bg-[#00BFB3] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mandar mensaje
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-[72px] right-0 w-1/3 h-[70vh] bg-white shadow-lg overflow-y-auto z-50">
            {/* <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900">
                <X className="h-6 w-6" />
              </button>
            </div> */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name} className="py-1">
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleSubMenu(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-900 hover:text-[#00BFB3]"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${openSubMenus.includes(item.name) ? "transform rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openSubMenus.includes(item.name) && (
                        <div className="pl-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#00BFB3]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        scrollToSection(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className="block w-full px-3 py-2 text-base font-medium text-left text-gray-900 hover:text-[#00BFB3]"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="px-5 py-4 border-t border-gray-200">
              <div className="flex justify-center space-x-2">
                {socialIcons.map((social) => (
                  <Link key={social.name} href={social.href} className="text-gray-600 hover:text-[#00BFB3]">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

