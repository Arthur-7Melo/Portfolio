import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
} from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact' className='py-20 px-6 bg-gray-50'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8'>Contato</h2>
        <div className='flex justify-center space-x-6 mb-12 text-2xl'>
          <a
            href='https://www.linkedin.com/in/arthur-melo-47040621a'
            target='_blank'
            rel="noopener noreferrer"
            aria-label='LinkedIn'
            className='hover:text-blue-700'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/Arthur-7Melo'
            target='_blank'
            rel="noopener noreferrer"
            aria-label='Github'
            className='hover:text-gray-800'
          >
            <FaGithub />
          </a>
          <a
            href='https://wa.me/5588981136035'
            target='_blank'
            rel="noopener noreferrer"
            aria-label='WhatsApp'
            className='hover:text-green-600'
          >
            <FaWhatsapp />
          </a>
        </div>

        <form
          action='https://formspree.io/f/mnnzalll'
          method='POST'
          className='space-y-6 text-left'
        >
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium mb-1'
            >
              Nome
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium mb-1'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium mb-1'
            >
              Mensagem
            </label>
            <input
              id='message'
              name='message'
              rows='5'
              required
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring'
            />
          </div>

          <button
            type='submit'
            className='inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none cursor-pointer'
          >
            Enviar
            <FaPaperPlane className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  )
}