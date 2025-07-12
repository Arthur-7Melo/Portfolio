export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Sobre mim</h2>
        <p className="text-lg mb-8">
          Sou desenvolvedor Fullstack, fazendo a transição da área de atendimento para desenvolvimento de software.
          Apaixonado por tecnologia desde a infância, adoro aprender novas ferramentas e tornar ideias em soluções reais.
        </p>
        <div className="text-left">
          <h3 className="text-3xl font-semibold mb-4">Tecnologias</h3>
          <ul className="space-y-4">
            <li>
              <strong>Front-End:</strong> Html, Css, Javascript, React, TailwindCss
            </li>
            <li>
              <strong>Back-End:</strong> Padrão REST de APIs, Node.js, Express ,TypeScript, Swagger, SQL (Prisma), NoSQL (Mongoose)
            </li>
            <li>
              <strong>DevOps:</strong> Git, Docker, testes automatizados, CI/CD básico
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}