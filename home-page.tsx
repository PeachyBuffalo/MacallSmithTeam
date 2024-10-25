import React from 'react'
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { Home, Phone, Mail, Award, Clock, Building, Star } from "lucide-react"
import Component from "./src/Component"
import Link from 'next/link'  // Add this import

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6" />
          <span className="sr-only">Macall Smith Real Estate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <Component />
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Your West Michigan Real Estate Expert
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Discover your dream home with Macall Smith. Expert guidance for buying, selling, and investing in West
                  Michigan.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Get a Free Consultation</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Macall Smith</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With nearly a decade of experience, Macall Smith is a dedicated real estate agent and broker
                  specializing in residential homes throughout West Michigan. Born and raised in Holland, MI, Macall
                  brings a wealth of local market knowledge and maintains a strong community network.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Certified Military Relocation Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span>Commitment to Excellence (C2EX) Designation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>Experience in Flipping Homes and Rental Properties</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <img
                  alt="Macall Smith"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                  height="300"
                  src="/placeholder.svg?height=300&width=300"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Home className="h-12 w-12" />
                <h3 className="text-xl font-bold">Residential Transactions</h3>
                <p className="text-gray-500">
                  Expert guidance for buying and selling homes, ensuring a smooth and stress-free experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Clock className="h-12 w-12" />
                <h3 className="text-xl font-bold">Timing and Property Management</h3>
                <p className="text-gray-500">
                  Strategic advice on when to buy or sell, maximizing your investment potential.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Building className="h-12 w-12" />
                <h3 className="text-xl font-bold">New Developments</h3>
                <p className="text-gray-500">
                  Stay informed about the latest trends and projects in West Michigan's vibrant real estate market.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-4">
                <p className="text-gray-500 italic">
                  "Macall's expertise made our home buying process smooth and stress-free. Highly recommended!"
                </p>
                <p className="font-semibold">- Sarah J.</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 italic">
                  "As a military family, Macall's understanding of our unique needs was invaluable during our
                  relocation."
                </p>
                <p className="font-semibold">- Mike and Lisa T.</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 italic">
                  "Macall's insights into the local market helped us find the perfect investment property."
                </p>
                <p className="font-semibold">- David R.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start your real estate journey? Contact Macall Smith today for expert guidance and
                  personalized service.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>macall@example.com</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="space-y-4">
                  <Input className="w-full" placeholder="Your Name" />
                  <Input className="w-full" type="email" placeholder="Your Email" />
                  <Input className="w-full" type="tel" placeholder="Your Phone" />
                  <Textarea className="w-full" placeholder="Your Message" />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Macall Smith Real Estate. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
