import Card from '../components/Card';
import todoImg from '../assets/ToDo.png';
import avaliaImg from '../assets/AvaliaFilmes.png';

const projectsData = [
  {
    title: 'TodoApp',
    techDetails: [
      'React', 'Node.js', 'TypeScript', 'Express',
      'Mongoose', 'Autenticação JWT',
      'Arquitetura em Camadas', 'Validação Zod', 'Docker'
    ],
    imageSrc: todoImg,
    githubLink: 'https://github.com/Arthur-7Melo/fullstackTODO.git',
    liveLink: 'https://todoapp-two-zeta.vercel.app/login'
  },
  {
    title: 'AvaliaFilmes',
    techDetails: [
      'React', 'Tailwind CSS', 'Material-UI',
      'Node.js', 'TypeScript', 'Express',
      'Mongoose', 'Autenticação JWT',
      'Arquitetura em Camadas', 'Validação Zod',
      'Swagger', 'CI/CD', 'Testes automatizados',
      'Consumo de API TMDB', 'Docker'
    ],
    imageSrc: avaliaImg,
    githubLink: 'https://github.com/Arthur-7Melo/AvaliaFilmes-app.git',
    liveLink: 'https://avalia-filmes-app.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-6 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projetos</h2>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {projectsData.map((proj) => (
            <Card
              key={proj.title}
              title={proj.title}
              techDetails={proj.techDetails}
              imageSrc={proj.imageSrc}
              githubLink={proj.githubLink}
              livelink={proj.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}