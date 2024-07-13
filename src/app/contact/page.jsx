"use client"

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Clipboard, Mail, Phone } from "lucide-react"

export default function Contact() {

    const {toast} = useToast();

    const contactMethods = [
        {
            "name": "Phone number", 
            "icon": <Phone/>,
            "value": "(404)-432-9074"
        }, 
        {
            "name": "Email", 
            "icon": <Mail size={27}/>,
            "value": "kshaurya731@gmail.com"
        }, 
        {
            "name": "Discord", 
            "icon": <img src="/assets/discord.svg" className="w-8"/>,
            "value": "kshau_"
        }, 
    ]

    const copyContact = (method) => {
        navigator.clipboard.writeText(method.value);
        toast({"title": `${method.name} copied to clipboard!`})
    }

    return (
        <Navbar current="Contact">
            <div className="flex flex-col">

                <span className="text-6xl font-bold mt-36 self-center animate-fadeIn opacity-0 delay-100">Contact</span>

                <div className="flex flex-col self-center m-16 gap-3">

                    <Card className="sm:w-[90vw] lg:w-[70vw] animate-fadeIn opacity-0 delay-300">
                
                        <CardHeader>

                            <CardTitle className="text-3xl">
                                Shaurya Kumar
                            </CardTitle>

                        </CardHeader>

                        <CardContent className="flex flex-row">
                        <div className="text-xl flex flex-col gap-5">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row gap-3 flex-wrap">
                                    <img src="/assets/shaurya-kumar.png" alt="Shaurya Kumar" className="w-36 rounded-lg object-cover my-auto animate-fadeIn opacity-0"/>
                                    {contactMethods.map((method, index) => (

                                        <Card className={`w-[70rem] self-center w-fit animate-fadeIn opacity-0`} key={index}>
                                
                                            <CardHeader className="flex flex-row gap-3">

                                                <div className="mt-2">
                                                    {method.icon}
                                                </div>

                                                <CardTitle className="text-2xl">
                                                    {method.name}
                                                </CardTitle>

                                            </CardHeader>

                                            <CardContent className="flex flex-row gap-5">
                                                <Button variant="ghost" className="text-lg" onClick={() => {copyContact(method)}}>
                                                    {method.value}
                                                </Button>
                                            </CardContent>

                                        </Card>

                                    ))}
                                </div>
                            </div>
                            <span>
                                Hello! I'm Shaurya Kumar, and I specialize in creating stunning portfolio websites for individuals and businesses. With six years of experience in computer programming and two years specifically in web development, I bring a wealth of knowledge and expertise to every project.
                            </span>
                            <span>
                                My programming journey began at the age of nine, shortly after my family moved to the United States. Starting with basic block coding on Scratch, I quickly advanced to learning Python and expanded my skill set to include JavaScript, MongoDB, ReactJS, NodeJS, and SQL.
                            </span>
                            <span>
                                Currently, I am a high school sophomore based in Metro Atlanta, where I continue to hone my skills and pursue my passion for web development. Let me help you create a professional and captivating online presence!
                            </span>
                        </div>
                        </CardContent>

                    </Card>

                </div>

            </div>
        </Navbar>
    )

}