import Link from "next/link";
export default function Home() {
  return (
    <div>
      <p>Home page</p>
      Click <Link href="/documents/123">&nbsp;<span className="text-blue-500 underline">here</span>&nbsp;
      </Link> to go to document Id.
    </div>
  );
}
