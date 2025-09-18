import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Randriamitsiry Manassé | Full Stack Developer</title>
        <meta
          name="description"
          content="Randriamitsiry Valimbavaka Manassé - Full Stack Developer specialized in Web and Mobile Development. Expert in Flutter, React, Symfony, and modern development tools."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Flutter, React, Symfony, PHP, Python, JavaScript, Mobile Development, Web Development, Docker, Kubernetes, Git, DevOps, Agile, Madagascar, Fianarantsoa"
        />
        <meta name="author" content="Randriamitsiry Valimbavaka Manassé" />
        <meta name="theme-color" content="#2c3e50" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
