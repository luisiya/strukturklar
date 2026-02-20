const Footer = () => {
  return (
    <footer
      className="text-white py-8"
      style={{ backgroundColor: 'rgb(3 105 161 / var(--tw-text-opacity, 1))' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} StrukturKlar. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
