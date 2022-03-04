import Head from "next/head";
import Traingle from "../triangle.svg";

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

      <div className="background">
        <Traingle />
      </div>
      <div className="content">
        <h1>Zaid Akhter</h1>
        <p>I create kool stuff</p>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
        </ul>
      </div>
    </>
  );
}
