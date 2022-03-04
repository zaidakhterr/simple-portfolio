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

      <div>
        <Traingle />
      </div>
      <div></div>
    </>
  );
}
