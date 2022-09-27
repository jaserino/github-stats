const Footer = () => {
  const footeryear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {footeryear} Created by JaySer</p>
      </div>
    </footer>
  );
};

export default Footer;
