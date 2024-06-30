const Navbar = () => {
  return (
    <div>
      <ul>
        {["home", "about", "services", "contact"].map((link, key) => (
          <li key={key}>
            <a href={`/${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Navbar;
