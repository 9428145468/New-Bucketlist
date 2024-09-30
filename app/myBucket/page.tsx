import React from "react";

const wishes = [
  {
    id: 1,
    title: "Skydive in New Zealand",
    description: "Experience the thrill of free-falling.",
  },
  {
    id: 2,
    title: "Learn French",
    description: "Master conversational French in 6 months.",
  },
  {
    id: 3,
    title: "Visit Tokyo",
    description: "Explore the vibrant streets and culture of Japan.",
  },
  // Add more dummy wishes here
];

export default function MyBucketPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {" "}
      {/* White background & pt-20 to start after navbar */}
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">My Bucket List</h1>
          <p className="text-gray-600">
            Keep track of all the goals you want to achieve!
          </p>
        </section>

        {/* Bucket List Display */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{wish.title}</h2>
              <p className="text-gray-600 mb-4">{wish.description}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          ))}
        </section>

        {/* Add New Wish Button */}
        <section className="text-center mt-12">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">
            Add a New Wish
          </button>
        </section>
      </div>
    </div>
  );
}
