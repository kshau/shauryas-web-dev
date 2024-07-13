"use client"

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CircleDollarSign, Infinity, SquarePen } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function Home() {

  const learnMoreRef = useRef(null);

  const features = [
    {
      "title": "Costs around $80!", 
      "icon": <CircleDollarSign size={35}/>,
      "description": <span>Creating the website will cost only around $80. The price may vary based on how much content is on the website. <Link href="/contact" className="underline">Contact me</Link> to get started.</span>
    }, 
    {
      "title": "One Time Fee!", 
      "icon": <Infinity size={37}/>,
      "description": <span>Once the site is created, there will be no recurring fees. It's just a one time pay for the website to be hosted forever. </span>
    }, 
    {
      "title": "Updating The Website", 
      "icon": <SquarePen size={35}/>,
      "description": <span>Just contact me to update any content on your site. Minor changes will be free, but there may be a cost for big changes such as adding a new page. </span>
    }
  ]

  return (

    <Navbar current="Home">

      <div className="flex flex-col">

        <div className="flex justify-center h-screen">

          <div className="flex flex-row justify-center my-auto gap-10 w-fit flex-wrap">

            <img src="/assets/shaurya-kumar.png" alt="Shaurya Kumar" className="w-52 lg:w-64 aspect-square rounded-full object-cover m-auto animate-fadeIn opacity-0 delay-100"/>

            <div className="flex flex-col gap-5">
              
              <span className="text-[45px] lg:text-7xl leading-tight animate-fadeIn opacity-0 delay-300">Shaurya's Web <br /> Development</span>

              <div className="flex flex-row gap-5">
                <Button className="w-40 text-xl h-12 animate-fadeIn opacity-0 delay-500" onClick={() => {learnMoreRef.current.scrollIntoView({"behavior": "smooth"})}}>Learn more</Button>
                <Link href="/contact">
                  <Button className="w-40 text-xl h-12 animate-fadeIn opacity-0 delay-700" variant="outline">Contact</Button>
                </Link>
              </div>

            </div>

          </div>

        </div>

        <Separator/>

        <div className="flex justify-center m-20 gap-3 flex-wrap w-fit self-center" ref={learnMoreRef}>

          {features.map(feature => (
            <Card className="w-96">
              <CardHeader className="flex flex-row gap-3">
                {feature.icon}
                <CardTitle>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {feature.description}
              </CardContent>
            </Card>
          ))}

        </div>

      </div>

    </Navbar>

  )

}