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

      {/* Main Content Area with Slogan and Content */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen pt-16">
        {/* Slogan Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start p-6 mt-8 md:mt-0">
          <img
            src="../images/slogan.jpeg"
            alt="Decorative Photo"
            className="w-full h-auto max-w-md md:max-w-xl lg:max-w-2xl"
          />
        </div>

        {/* Main Content Section */}
        <main className="w-full md:w-1/2 flex items-center justify-center md:justify-end p-6">
          <div className="w-full flex flex-col items-center">
            {/* Create Your Dream Bucket Section */}
            <section className="text-center mb-4 md:mb-12 mt-2 md:mt-32 backdrop-blur-md bg-teal/30 border border-white/30 shadow-2xl p-6 md:p-8 rounded-2xl max-w-xl mx-auto w-full h-auto flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl mb-4 md:mb-6 anton-extra-bold text-gradient">
                Create Your Dream Bucket
              </h1>
              <p className="text-base md:text-md text-gray-600 mb-4 md:mb-10 leading-relaxed anton-extra-bold">
                Turn your aspirations into reality. Add your wishes, track your
                progress, and achieve your goals.
              </p>
              <a
                href="/myBucket"
                className="px-8 py-4 text-lg md:text-base bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-purple-500 hover:to-indigo-500 transition-transform transform hover:scale-105"
              >
                View My Bucket List
              </a>
            </section>

            {/* Add New Wish Section */}
            <section className="flex justify-center mt-8 mb-6">
              <a
                href="/newWish"
                className="bg-teal/30 backdrop-blur-md border border-white/30 text-gray-600 shadow-2xl rounded-full px-12 py-4 flex items-center justify-center transition duration-300 ease-in-out hover:bg-white/50"
              >
                <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#191834] via-[#2d2d91] to-[#61bdaf]">
                  Add a New Wish
                </span>
              </a>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
