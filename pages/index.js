import { useState } from "react";
import { Navbar, Sidebar } from "../components";
import { NextHead } from "../global/NextHead";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <NextHead title="Omar's Resume" />

      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
