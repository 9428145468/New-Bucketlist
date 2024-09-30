"use client";
import React, { useState } from "react";

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
    <div className="bg-white min-h-screen pt-20">
      {" "}
      {/* White background & pt-20 to start after navbar */}
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Add a New Wish</h1>
          <p className="text-gray-600">
            Create a new wish and start making your dreams a reality!
          </p>
        </section>

        {/* Wish Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="title">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="notes">
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
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              onClick={() => console.log("Cancelled") /* Handle cancel logic */}
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
      </div>
    </div>
  );
}
