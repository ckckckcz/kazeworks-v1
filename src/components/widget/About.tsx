import { Button } from "@/components/ui/button";
import rio from "@/app/rio.png";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 justify-between">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Copy */}
          <div className="space-y-6">
            {/* small pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-lg text-muted-foreground">
              <span className="size-3 rounded-full bg-primary" aria-hidden="true" />
              About me

            </div>
            <h2 id="about-title" className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
              Who is <span className="text-[#32fb00]">Riovaldo Alfiyan Fahmi Rahman ???</span>
            </h2>

            <p className="max-w-prose text-gray-600 leading-relaxed">
              Hi! I’m Riovaldo Alfiyan Fahmi Rahman, a student at Malang State Polytechnic, majoring in Computer Engineering. <br /> <br /> I have a strong interest in Front-End Web Development and am dedicated to creating smooth and interactive web
              experiences. I specialize in working with technologies such as React, TypeScript, JavaScript, Astro, and Tailwind to build clean, responsive, and user-friendly interfaces. Currently living in the beautiful country of
              Indonesia, I am actively pursuing my passion for technology.
            </p>

            <Link href="https://github.com/ckckckcz"><Button className="rounded-tl-full rounded-bl-full cursor-pointer bg-white hover:bg-gray-200 border-border border text-black px-7 py-6">Github</Button></Link>
            <Link href="https://linkedin.com/in/riovaldorahman"><Button className="rounded-tr-full rounded-br-full cursor-pointer bg-white hover:bg-gray-200 border-border border text-black px-7 py-6">Linkedin</Button></Link>
          </div>

          {/* Right: Image */}
          <div className="relative flex items-center justify-center">
            <div className="overflow-hidden rounded-xl">
              <Image src={rio} alt="Our team collaborating in a modern workspace" className="w-96 h-auto object-cover mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
