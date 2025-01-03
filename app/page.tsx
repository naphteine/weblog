import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mx-8 my-8">
        <h1 className="text-4xl">Personal weblog</h1>
      </header>
      <main className="mx-8 my-8">
        <h2 className="text-2xl font-bold">List of posts</h2>
      </main>
      <footer className="mx-8 my-8">
        <Link className="underline" href="https://gokay.works">
          Gökay Gültekin
        </Link>{" "}
        &copy; 2019-2025{" | "}
        <Link className="underline" href="https://github.com/naphteine/weblog">
          Source code
        </Link>
      </footer>
    </>
  );
}
