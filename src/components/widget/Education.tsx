import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Polinema from "@/app/assets/polinema.png"
import Nmc from "@/app/assets/nmc.png"

const educationData = [
  {
    logo: Polinema.src,
    schoolName: "Politeknik Negeri Malang",
    major: "Teknologi Informasi, D4 Teknik Informatika",
    startYear: 2023,
    endYear: 2027,
  },
  {
    logo: Nmc.src,
    schoolName: "SMK National Media Center",
    major: "Rekayasa Perangkat Lunak",
    startYear: 2020,
    endYear: 2023,
  },
]

export default function Education() {
  return (
    <div className="bg-background ">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-10">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <h2 id="projects-title" className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
              Dari sini semua <span className="text-[#32fb00]">perjalanan dimulai</span> 🧑🏻‍💻
            </h2>
          </div>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              logo={education.logo}
              schoolName={education.schoolName}
              major={education.major}
              startYear={education.startYear}
              endYear={education.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface EducationCardProps {
  logo: string
  schoolName: string
  major: string
  startYear: number
  endYear: number
}

export function EducationCard({ logo, schoolName, major, startYear, endYear }: EducationCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex justify-start mb-4">
          <Image
            src={logo}
            alt={schoolName}
            width={72}
            height={72}
            className="w-18 h-18 object-contain rounded-lg"
          />
        </div>
        <h3 className="text-lg font-semibold text-start text-foreground mb-1">{schoolName}</h3>
        <p className="text-start text-muted-foreground text-md mb-2">{major}</p>
        <div className="flex justify-start items-start gap-2 text-sm text-muted-foreground">
          <span className="font-medium">{startYear}</span>
          <span>-</span>
          <span className="font-medium">{endYear}</span>
        </div>
      </CardContent>
    </Card>
  )
}
