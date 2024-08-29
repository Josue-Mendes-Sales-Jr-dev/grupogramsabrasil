import CardProject from "@/components/cardProject";
import H1 from "@/components/h1";
import Imag from "../../../images/ludmila04.jpeg";
import Imag01 from "../../../images/gr05.jpeg";
import Imag02 from "../../../images/GRAMSA05.png";
import Imag03 from "../../../images/gramsa03.jpeg";
import Imag04 from "../../../images/gr01.jpeg";
import Imag05 from "../../../images/gr02.jpeg";
import Imag06 from "../../../images/gramsa Ludmila.jpeg";
import Imag07 from "../../../images/gr04.jpeg";

export default function Projects() {
  // Array de projetos para facilitar a manutenção e a expansão
  const projects = [
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais", img: Imag},
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais", img: Imag01},
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais", img: Imag02},
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais", img: Imag03},
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais", img: Imag04},
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais", img: Imag05},
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais", img: Imag06},
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais", img: Imag07},
  ];

  return (
    <section className="flex flex-col gap-20 items-center w-full min-h-screen py-10">
      <H1 className="text-3xl text-blue-400">Projetos</H1>
      
      <div className="flex items-center justify-center flex-wrap gap-10 w-[90%]">
        {projects.map((project, index) => (
          <CardProject
            key={index}
            Icon="Saiba mais"
            img={project.img}
            title={project.title}
            subtitle={project.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
