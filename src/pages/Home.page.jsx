import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl mb-4">Meet Mailbuddy</h1>
      <p className="text-2xl mb-4">
        Mailing solutions from developers for developers
      </p>
      <Link to="/singleEmail">
        <button className="px-8 py-3 text-white bg-black rounded-xl">
          Get Started
        </button>
      </Link>
    </main>
  );
};

export default Home;
