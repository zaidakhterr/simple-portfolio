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

        <meta property="og:url" content="https://zaidakhter.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zaid Akhter" />
        <meta
          property="og:description"
          content="Zaid Akhter's corner of the internet."
        />
        <meta
          property="og:image"
          content="https://zaidakhter.com/images/card.png"
        />

        <meta property="twitter:url" content="https://zaidakhter.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zaid Akhter" />
        <meta
          name="twitter:description"
          content="Zaid Akhter's corner of the internet."
        />
        <meta
          name="twitter:image"
          content="https://zaidakhter.com/images/card.png"
        />

        <link rel="icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="theme-color"
          content="#000"
          media="(prefers-color-scheme: dark)"
        ></meta>

        <meta itemProp="name" content="Zaid Akhter" />
        <meta
          itemProp="description"
          content="Zaid Akhter's corner of the internet."
        />
        <meta
          itemProp="image"
          content="https://zaidakhter.com/images/card.png"
        />
      </Head>
      <div className="header">
        <div className="gradient" />
      </div>
      <div className="content">
        <Image
          src="/images/zaid-light.png"
          alt="Zaid Akhter"
          width="120px"
          height="120px"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABtJREFUGFdj9Pf3///u3TsGRltb2/9v3rxhAABQrwkzPevuYAAAAABJRU5ErkJggg=="
          className="light"
        />
        <Image
          src="/images/zaid-dark.png"
          alt="Zaid Akhter"
          width="120px"
          height="120px"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABtJREFUGFdj9Pf3///u3TsGRltb2/9v3rxhAABQrwkzPevuYAAAAABJRU5ErkJggg=="
          className="dark"
        />

        <h1>Zaid Akhter</h1>
        <p className="sub">
          <a href="https://en.wikipedia.org/wiki/Karachi">The City of Lights</a>
          , Pakistan.
        </p>
        <p>I build awesome apps for people around the world.</p>
        {/* <h2>Reach out to me</h2> */}
        <hr />
        <ul>
          <li>
            <a href="mailto:zaidakhter1202@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.upwork.com/freelancers/zaid">Upwork</a>
          </li>
          <li>
            <a href="https://github.com/zaidakhterr">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zaidakhterr/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/zaidakhterr">Twitter</a>
          </li>
        </ul>
        {/* <a className="feedback" href="https://forms.gle/pVdALKuhwjLskJLx8">
          Help me improve
        </a> */}
      </div>
    </>
  );
}
