import Head from "next/head";
import Image from "next/image";

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
        <div className="gradient" />
      </div>
      <div className="content">
        <Image src="/zaid.png" alt="Zaid Akhter" width="120px" height="120px" />
        <h1>Zaid Akhter</h1>
        <p className="sub">
          <a href="https://en.wikipedia.org/wiki/Karachi">The City of Lights</a>
          , Pakistan.
        </p>
        <p>I build awesome apps for people around the world.</p>
        <h4>Reach out to me</h4>
        <hr />
        <ul>
          <li>
            <a href="mailto:zaidakhter1202@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zaidakhterr/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/zaidakhterr">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/zaidakhterr">GitHub</a>
          </li>
          <li>
            <a href="https://www.upwork.com/freelancers/~01c3f1d9695773d1f0">
              Upwork
            </a>
          </li>
        </ul>
        <a className="feedback" href="https://forms.gle/pVdALKuhwjLskJLx8">
          Help me improve
        </a>
      </div>
    </>
  );
}
