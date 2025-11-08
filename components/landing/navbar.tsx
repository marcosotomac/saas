"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const menuItems = [
  {
    href: "#funcionalidades",
    label: "Funcionalidades",
    icon: "⚡",
    description: "Todas las herramientas que necesitas",
  },
  {
    href: "#beneficios",
    label: "Beneficios",
    icon: "💰",
    description: "Ahorra hasta 40% en costos",
  },
  {
    href: "#testimonios",
    label: "Testimonios",
    icon: "⭐",
    description: "Lo que dicen nuestros clientes",
  },
  {
    href: "#contacto",
    label: "Contacto",
    icon: "📧",
    description: "Comienza tu prueba gratis",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                S
              </span>
            </div>
            <span className="font-bold text-lg md:text-xl">SaaS PYME</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {menuItems.slice(0, 3).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link href="#contacto">Iniciar Sesión</Link>
          </Button>
          <Button asChild className="hidden md:flex font-semibold">
            <Link href="#contacto">Comenzar Gratis</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      S
                    </span>
                  </div>
                  SaaS PYME
                </SheetTitle>
                <SheetDescription>
                  La solución completa para tu negocio
                </SheetDescription>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-4">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-start gap-3 rounded-lg p-3 hover:bg-accent transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {item.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.description}
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-primary mt-1"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  ))}
                </nav>

                <Separator className="my-4" />

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start h-auto py-3"
                  >
                    <Link href="#contacto" onClick={() => setOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      Iniciar Sesión
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full justify-start h-auto py-3 font-semibold"
                  >
                    <Link href="#contacto" onClick={() => setOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      Comenzar Gratis
                    </Link>
                  </Button>
                </div>

                <Separator className="my-4" />

                {/* Trust Badge */}
                <div className="rounded-lg bg-primary/5 p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Promoción
                    </Badge>
                  </div>
                  <p className="text-sm font-semibold">
                    🎉 Obtén 30 días gratis
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Prueba todas las funcionalidades sin compromiso
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
