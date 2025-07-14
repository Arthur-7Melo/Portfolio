export default function Button({ children, onClick, href, type = 'button' }) {
  const baseStyles = 'inline-block px-6 py-2 rounded-md font-medium focus:outline-none';
  const btnStyles = href
    ? `bg-blue-600 text-white hover:bg-blue-700 ${baseStyles}`
    : `bg-gray-200 text-gray-800 hover:bg-gray-300 ${baseStyles}`;

  if (href) {
    return (
      <a href={href} target='_blank' rel="noopener noreferrer" className={btnStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={btnStyles}>
      {children}
    </button>
  );
}