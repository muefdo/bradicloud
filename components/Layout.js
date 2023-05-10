import Head from "next/head";
import Link from "next/link";
import foto from "../public/bradicloudpng.png";
import Image from "next/image";
import githubLogo from "../public/github.svg";
import linkedinLogo from "../public/linkedin.svg";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Bradi Cloud- Tüm Projelerimiz</title>
        <meta name="description" content="bradi cloud bradi.tech olarak geliştirdiğimiz projeler ve markalar hakkında bilgi alabileceğiniz bir websitesidir." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bradicloudpng.png" />
      </Head>
      <header>
        <div className="headerContainer">
          <div className="header">
            <Link href="/" passHref legacyBehavior>
              <a>
                <Image
                  className="logoImage"
                  src={foto}
                  alt="logo"
                  width={120}
                  height={120}
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="greatFooter">
          <div className="footer">
            <div className="footerImage">
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Image
                    className="logoImage"
                    src={foto}
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </a>
              </Link>
            </div>
            <div>
              <div className="footerLinks">
                <div className="Github">
                  <Link href="/" passHref legacyBehavior>
                    <a>
                      <Image
                     
                        src={githubLogo}
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/" passHref legacyBehavior>
                    <a>
                      <Image
                        className="Linkedin"
                        src={linkedinLogo}
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footerGrid">
              <a>footer grid</a>
              <a>2023 bradi.cloud all rights reserved</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
