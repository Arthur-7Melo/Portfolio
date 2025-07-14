import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiSwagger, SiPrisma, SiMongodb, SiJest, SiGithubactions } from 'react-icons/si';

const techCategories = [
  {
    title: 'Front-End',
    items: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Axios', icon: <FaJsSquare /> },
    ],
  },
  {
    title: 'Back-End',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <FaNodeJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Swagger', icon: <SiSwagger /> },
      { name: 'Prisma (SQL)', icon: <SiPrisma /> },
      { name: 'Mongoose (NoSQL)', icon: <SiMongodb /> },
      { name: 'REST APIs', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'CI/CD', icon: <SiGithubactions /> },
      { name: 'Testes (Jest)', icon: <SiJest /> },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Sobre mim</h2>
        <p className="text-lg mb-8">
          Sou desenvolvedor Fullstack, fazendo a transição da área de atendimento para desenvolvimento de software.
          Apaixonado por tecnologia desde a infância, adoro aprender novas ferramentas e tornar ideias em soluções reais.
        </p>
        {techCategories.map((cat) => (
          <div key={cat.title} className="mb-8">
            <h3 className='text-2xl font-semibold mb-4'>{cat.title}</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center'>
              {cat.items.map((tech) => (
                <div
                  key={tech.name}
                  className='flex items-center space-2-x bg-white rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-shadow'
                >
                  <span className="text-xl text-indigo-500">{tech.icon}</span>
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}