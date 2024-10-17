"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";

export default function NewWishPage() {
  // States to hold form data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Personal");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      title,
      description,
      priority,
      category,
      notes,
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="../images/bg6.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 flex-grow">
        <main className="w-full flex items-center justify-center p-6">
          <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center">
            {/* Add a New Wish Section */}
            <section className="text-center mb-4 md:mb-12 mt-2 md:mt-16 lg:mt-32 backdrop-blur-md bg-teal/30 border border-white/30 shadow-2xl p-6 md:p-8 rounded-2xl max-w-xl mx-auto w-full h-auto flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 anton-extra-bold text-gradient">
                Add a new Wish
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 lg:mb-8 leading-relaxed anton-extra-bold">
                Create a new wish and start making your dreams a reality!
              </p>

              <form
                onSubmit={handleSubmit}
                className="w-full p-4 md:p-6 text-gray-600 rounded-lg flex flex-col items-center"
              >
                <div className="mb-4 w-full">
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="title"
                  >
                    Wish Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your wish"
                    required
                  />
                </div>

                <div className="mb-4 w-full">
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Describe your wish"
                    rows={4}
                    required
                  />
                </div>

                <div className="mb-4 w-full">
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="priority"
                  >
                    Priority
                  </label>
                  <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="mb-4 w-full">
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Personal">Personal</option>
                    <option value="Travel">Travel</option>
                    <option value="Career">Career</option>
                    <option value="Health">Health</option>
                  </select>
                </div>

                <div className="mb-4 w-full">
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="notes"
                  >
                    Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Any additional notes..."
                    rows={4}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center w-full">
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                    onClick={
                      () => console.log("Cancelled") /* Handle cancel logic */
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
                  >
                    Add Wish
                  </button>
                </div>
              </form>
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