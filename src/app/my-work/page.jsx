"use client"

import { Navbar } from "@/components/Navbar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollBar } from "@/components/ui/scroll-area"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

export default function MyWork() {

    const projects = [
        {
            "name": "Rader Works LLC", 
            "image": "/assets/websites/rader-works.png", 
            "description": "A static website created for a handyman company which includes details about their services, past work, contact information, and ways they can be paid for their work.", 
            "url": "https://raderworks.vercel.app"
        }
    ]

    return (
        <Navbar current="My work">
            <div className="flex flex-col">

                <span className="text-6xl font-bold mt-36 self-center animate-fadeIn opacity-0 delay-100">My Work</span>

                <ScrollArea className="w-[80vw] rounded-md border self-center mt-16 p-5 mb-16 animate-fadeIn opacity-0 delay-300">

                    <div className="flex flex-row gap-3 w-[80vw] self-center">
                            {projects.map((project, index) => (
                                <Card className="min-w-96 max-w-96" key={index}>
                                    <Link href={project.url}>
                                        <CardHeader>
                                            <img src={project.image} alt={project.name} className="h-56 rounded-xl object-cover"/>
                                        </CardHeader>
                                        <CardContent className="flex justify-center">
                                            <div className="flex flex-col gap-4">
                                                <span className="text-3xl font-bold self-center">{project.name}</span>
                                                <span className="text-center text-xl">{project.description}</span>
                                            </div>
                                        </CardContent>
                                    </Link>
                                </Card>
                            ))}
                        </div>

                    <ScrollBar orientation="horizontal" />

                </ScrollArea>

            </div>
        </Navbar>
    )

}