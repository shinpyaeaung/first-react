import { Link } from "react-router";

function Home() {
  return (
    <section className="flex grow items-center bg-gradient-to-r from-slate-900 to-blue-500">
      <div className="container mx-auto p-8 text-center text-white md:text-left">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
          Welcome to Our Coffee Shop
        </h1>
        <p className="mb-6 text-lg text-white/70 md:text-xl lg:text-2xl">
          Discover the best Coffee and shop your favorite coffee.
        </p>
        <Link
          to="/shop"
          className="btn btn-primary rounded-md bg-white px-6 py-3 text-black shadow transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Home;
