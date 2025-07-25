import Card from '../components/Card';
import todoImg from '../assets/ToDo.png';
import avaliaImg from '../assets/AvaliaFilmes.png';
import { motion } from 'framer-motion';

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut'
    },
  }),
}

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-6 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projetos</h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {projectsData.map((proj, idx) => (
            <motion.div
              key={proj.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="w-full sm:w-[45%] lg:w-[30%]"
            >
              <Card
                key={proj.title}
                title={proj.title}
                techDetails={proj.techDetails}
                imageSrc={proj.imageSrc}
                githubLink={proj.githubLink}
                livelink={proj.liveLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}