// Calavera dibujada a mano en trazo único, estilo grabado antiguo —
// sin relleno, sin fondo, para un acento delicado en vez de un ícono robusto.
function EngravedSkull({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 7c-11 0-19 8.5-19 19 0 7 3.5 12.5 8 16.5l1.5 5.5c.6 3.2 4.3 5 9.5 5s8.9-1.8 9.5-5l1.5-5.5c4.5-4 8-9.5 8-16.5 0-10.5-8-19-19-19Z" />
      <path d="M32 7 34 13 31 17 33 21" />
      <ellipse cx="24.5" cy="27" rx="4.6" ry="5.6" />
      <ellipse cx="39.5" cy="27" rx="4.6" ry="5.6" />
      <path d="M32 33 29 39q3 3 6 0Z" />
      <path d="M23.5 48h17M27 48v3M32 48v3.5M37 48v3" />
    </svg>
  )
}

export default EngravedSkull
