"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "/team", label: "Our Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            FREE Nigeria Foundation
          </a>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">Donate Now</a>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Donate Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}