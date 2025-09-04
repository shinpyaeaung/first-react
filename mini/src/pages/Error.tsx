import { Link } from "react-router";

export default function Error() {
  return (
    <section className="flex grow bg-gradient-to-r from-slate-900 to-blue-500 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist.
        </p>
        <Link to={"/"}>
          <button className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Go Back Home
          </button>
        </Link>
      </div>
    </section>
  );
}
