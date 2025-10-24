import Header from "@/components/widget/Header";
import About from "@/components/widget/About";
import Education from "@/components/widget/Education";
import Award from "@/components/widget/Award";
import Project from "@/components/widget/Project";
import Tech from "@/components/widget/Tech";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Award/>
      <Project />
      <Tech />
    </>
  );
}
