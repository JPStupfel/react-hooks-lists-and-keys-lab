import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"].map(e=><a key={e} href={`#${e}`}>{e}</a>);

  return <nav>
    {links}
  </nav>;
}

export default NavBar;
