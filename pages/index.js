import Head from "next/head";
import Image from "next/image";
import Polygon from "../polygon.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zaid Akhter</title>
        <meta
          name="description"
          content="Zaid Akhter's corner of the internet."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">
        <Polygon />
      </div>
      <div className="content">
        <Image src="/zaid.png" alt="Zaid Akhter" width="120px" height="120px" />
        <h1>Zaid Akhter</h1>
        <p className="sub">
          <a href="https://www.google.com/search?q=Karachi%3A+The+city+of+lights">
            The City of Lights
          </a>
          , Pakistan.
        </p>
        <p>I build awesome apps for people around the world.</p>
        <h4>Reach out to me</h4>
        <hr />
        <ul>
          <li>
            <a href="#">Email</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">Upwork</a>
          </li>
        </ul>
        <a className="feedback" href="#">
          Help me improve
        </a>
      </div>
    </>
  );
}
