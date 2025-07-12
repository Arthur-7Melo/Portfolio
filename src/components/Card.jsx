import Button from './Button';

export default function Card({ imageSrc, title, techDetails, githubLink, livelink }) {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col'>
      {imageSrc && (
        <img src={imageSrc} alt={title} className='w-full h-48 object-cover' />
      )}
      <div className='p-6 flex-grow flex flex-col'>
        <h3 className='text-3xl font-semibold mb-4'>{title}</h3>
        <p className='text-sm text-gray-600 mb-6 flex-grow'>{techDetails}</p>
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