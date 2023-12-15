const NavBar = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fa-solid fa-bars" id="btn"></i>
        <i className="fa-solid fa-xmark" id="cancel"></i>
      </label>
      <a href="/">
        <img id="home" src="../logo.jpg" alt="LUXLOOM" />
      </a>
      <ul>
        <li className="show">
          <a href="/Dining">Dining Chairs</a>
          <ul>
            <li>
              <a href="../Dining/Modern">Modern Chairs</a>
            </li>
            <li>
              <a href="../Dining/Classic">Classic Chairs</a>
            </li>
          </ul>
        </li>
        <li className="show">
          <a href="/Comfort">Comfort Chairs</a>
          <ul>
            <li>
              <a href="../Comfort/Sofa">Sofa</a>
            </li>
            <li>
              <a href="../Comfort/Ottoman">Ottoman</a>
            </li>
            <li>
              <a href="../Comfort/Beach">Beach Chairs</a>
            </li>
          </ul>
        </li>
        <li className="show">
          <a href="/Office">Office Chairs</a>
          <ul>
            <li>
              <a href="../Office/Swivel">Swivel Chairs</a>
            </li>
            <li>
              <a href="../Office/Home">Home Office</a>
            </li>
          </ul>
        </li>
        <li className="show">
          <a href="/Accent">Accent Chairs</a>
          <ul>
            <li>
              <a href="../Accent/Arm">Arm Chairs</a>
            </li>
            <li>
              <a href="../Accent/Modern">Modern Accent</a>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  )
}

export default NavBar
