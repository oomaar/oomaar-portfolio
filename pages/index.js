import { Navbar } from "../components";
import { NextHead } from "../global/NextHead";

export default function Home() {
  return (
    <div>
      <NextHead title="Omar's Resume" />

      <Navbar />
    </div>
  );
}
