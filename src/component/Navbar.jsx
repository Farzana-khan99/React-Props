const Navbar = () => {
  return (
    <div>
      <ul>
        {["home", "about", "services", "contact"].map((link, key) => (
          <li key={key}>
            <a href={`/${link}`} target="_blank" >{link}</a>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Navbar;
