import data from "../Data.json";

function First() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-600">
          Ongoing Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Turpis facilisis tempor pulvinar in lobortis ornare magna.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[data.data[2], data.data[3], data.data[4]].map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.logo}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-project.jpg";
              }}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="text-white text-lg font-semibold px-6 py-2 border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-4 mt-8">
        <button
          aria-label="Previous projects"
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          aria-label="Next projects"
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default First;