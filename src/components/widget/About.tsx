import { Button } from "@/components/ui/button";
import rio from "@/app/assets/rio.jpg";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-10 justify-between">
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
              Hi! I’m Riovaldo Alfiyan Fahmi Rahman, a student at Malang State Polytechnic, majoring in Computer Engineering. <br /> <br /> I’m a Full-Stack Developer passionate about building modern, interactive, and efficient web applications from frontend to backend. Experienced in technologies such as React, Next.js, TypeScript, Astro, Tailwind CSS, Laravel, and Node.js, I focus on creating scalable and user-friendly digital solutions.

I’m also exploring the field of Data Analysis, with a growing interest in data visualization, statistical modeling, and insight-driven applications to create smarter, data-informed web experiences.
            </p>

            <Link href="https://github.com/ckckckcz"><Button className="rounded-tl-full rounded-bl-full cursor-pointer bg-white hover:bg-gray-200 border-border border text-black px-7 py-6">Github</Button></Link>
            <Link href="https://linkedin.com/in/riovaldorahman"><Button className="rounded-tr-full rounded-br-full cursor-pointer bg-white hover:bg-gray-200 border-border border text-black px-7 py-6">Linkedin</Button></Link>
          </div>

          {/* Right: Image */}
          <div className="relative flex items-center justify-center">
            <div
              className="relative overflow-hidden rounded-full border-4 border-border w-full max-w-xs sm:max-w-sm md:max-w-md"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={rio}
                alt="Riovaldo Alfiyan Fahmi Rahman"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 18rem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
