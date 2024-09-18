import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="../images/bg4.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* slogan */}
      <div className="absolute left-10 top-1/4 transform -translate-y-1/4 z-5 w-1/2">
        <img
          src="../images/slogan.jpeg"
          alt="Decorative Photo"
          className="w-full h-auto" 
        />
      </div>

      {/* Main */}
      <main className="relative z-10 flex flex-col items-end justify-center min-h-screen p-6 mr-10">
        <section className="text-center mb-12 backdrop-blur-md bg-teal/30 border border-white/30 shadow-2xl p-8 rounded-xl max-w-xl">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Welcome to Your Bucket List!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Start adding your wishes, track your goals, and make them come true.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            View My Bucket List
          </button>
        </section>

        <section className="w-full max-w-lg p-4 rounded-lg mt-8">
          <button className="w-full py-3 text-black font-semibold bg-teal-100 shadow-2xl rounded-full hover:bg-teal-600 border border-white/30 transition gradient-border-button">
            Add a New Wish
          </button>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}