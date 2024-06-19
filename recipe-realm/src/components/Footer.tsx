const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white p-4 text-center">
      <p className="mb-2">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/aronmilenait"
          className="hover:text-orange-300 hover:text-orange-300 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Milena S. Aron
        </a>
      </p>
      <a
        href="https://github.com/aronmilenait/recipe-realm"
        className="hover:text-orange-300 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source Code
      </a>
    </footer>
  );
};

export default Footer;
