export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-teal-highlight hover:opacity-75 text-blue-dark uppercase font-sansAlt font-semibold py-3 px-8 rounded-full ${className}`}
    >
      {children}

      <style jsx>
        {`
          button:hover {
            box-shadow: var(--outline-box-shadow);
          }
        `}
      </style>
    </button>
  );
}
