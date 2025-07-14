import Button from './Button';

export default function Card({ imageSrc, title, techDetails, githubLink, livelink }) {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col'>
      <div className='w-full max-h-60 overflow-hidden'>
        {imageSrc && (
          <img src={imageSrc} alt={title} className='w-full h-auto object-contain' />
        )}
      </div>
      <div className='p-6 flex-grow flex flex-col'>
        <h3 className='text-3xl font-semibold mb-4'>{title}</h3>
        <div className="mb-6 flex flex-wrap gap-2 max-h-24 overflow-y-auto">
          {techDetails.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 border border-gray-300 rounded text-sm font-mono"
            >
              <code>&lt;{tech.trim()} /&gt;</code>
            </span>
          ))}
        </div>
      </div>
      <div className='mt-auto flex space-x-4'>
        {githubLink && (
          <Button href={githubLink}>
            Github
          </Button>
        )}
        {livelink && (
          <Button href={livelink}>
            Ver Projeto
          </Button>
        )}
      </div>
    </div>
  );
}