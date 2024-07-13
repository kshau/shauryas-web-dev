"use client"

import Link from "next/link"
import { Button } from "./ui/button"

export function Navbar({current, children}) {

    const pages = [
        {
            "name": "Home", 
            "url": "/"
        }, 
        {
            "name": "My work", 
            "url": "/my-work"
        }, 
        {
            "name": "Contact", 
            "url": "/contact"
        }
    ]

    return (

        <div>

            <div className="w-screen bg-background/95 h-16 fixed border-b flex flex-row lg:justify-end gap-x-3 justify-center lg:pr-16 z-[1]">
                {pages.map((page, index) => (
                    <Link href={page.url} key={index}>
                        <div className="flex flex-col justify-center h-full">
                            <Button variant={(page.name == current) ? "default" : "ghost"} className="text-xl m-auto">{page.name}</Button>
                        </div>
                    </Link>
                ))}
            </div>

            {children}

        </div>
    )

}