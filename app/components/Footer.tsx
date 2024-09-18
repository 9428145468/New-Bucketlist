// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-sky-950 text-rose-100 rounded-t-[50px] py-6 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Left: About/Title Section */}
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-2">
            <img
              src="../images/w_logo.jpeg"
              alt="URBUCKET Logo"
              className="h-8 w-auto"
            />
          </div>
          <p className="text-xs md:text-sm">
            Track your dreams, one wish at a time. Create and manage your bucket
            list with ease.
          </p>
        </div>

        {/* Footer Center: Links */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-6 md:mb-0">
          <a
            href="/bucketlist"
            className="text-rose-100 hover:text-rose-500 transition text-sm md:text-base"
          >
            My Bucket
          </a>
          <a
            href="/add"
            className="text-rose-100 hover:text-rose-500 transition text-sm md:text-base"
          >
            Add Wish
          </a>
        </div>

        <div className="flex gap-3">
          <a href="/" className="text-rose-500 hover:text-rose-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-4 0H9m-4 0H3a2 2 0 01-2-2V10a2 2 0 012-2h2m4 0V6a4 4 0 014-4m0 0h2m-2 4v4m4-4v4m4-4v4"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#4A4B43] mt-6 pt-4 text-center text-xs md:text-sm">
        © 2024 urBucket. All Rights Reserved.
      </div>

      {/* Footer Big Image */}
      <div className="mt-8">
        <img
          src="../images/w_logo.jpeg"
          alt="Footer Big Image"
          className="w-full h-auto max-h-[400px] object-cover rounded-lg"
        />
      </div>
    </footer>
  );
}
