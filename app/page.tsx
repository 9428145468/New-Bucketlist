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

      {/* Flex Container for Slogan and Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen pt-16">
        {/* Slogan */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start p-6">
          <img
            src="../images/slogan.jpeg"
            alt="Decorative Photo"
            className="w-full h-auto max-w-md" 
          />
        </div>

        {/* Main Content */}
        <main className="w-full md:w-1/2 flex items-center justify-center md:justify-end p-6">
          <div className="w-full flex flex-col items-center">
            <section className="text-center mb-8 md:mb-12 mt-6 md:mt-40 backdrop-blur-md bg-teal/30 border border-white/30 shadow-2xl p-6 md:p-8 rounded-xl max-w-xl mx-auto w-full h-[400px] flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl mb-4 md:mb-6 anton-extra-bold text-gradient">
                Create Your Dream Bucket
              </h1>
              <p className="text-base md:text-md text-gray-600 mb-4 md:mb-10 leading-relaxed anton-extra-bold">
                Turn your aspirations into reality. Add your wishes, track your
                progress, and achieve your goals.
              </p>
              <button className="px-6 py-3 text-lg md:text-base bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-purple-500 hover:to-indigo-500 transition-transform transform hover:scale-105">
                View My Bucket List
              </button>
            </section>

            <section className="w-full max-w-lg p-4 rounded-lg mt-4 md:mt-8 flex justify-center">
              <button className="w-full py-3 text-black font-semibold bg-teal-100 shadow-2xl rounded-full hover:bg-teal-600 border border-white/30 transition gradient-border-button">
                Add a New Wish
              </button>
            </section>
          </div>
        </main>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}