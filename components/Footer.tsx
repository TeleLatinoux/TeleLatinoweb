export default function Footer() {
  return (
    <footer className="bg-[#111827] py-8">
      <div className="container mx-auto px-4 text-center">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-4">
            {["Términos de servicio", "Política de privacidad", "Contacto"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => console.log(`Navigate to ${item}`)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-gray-400">&copy; 2025 Tele Latino (Oxslin). Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

