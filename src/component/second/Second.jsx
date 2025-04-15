import data from "../Data.json";

function Second() {
  return (
    <section className=" py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            Few Smiles and Comments
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </p>
        </div>

        {/* Testimonial Card */}
        <article className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden md:flex md:max-w-4xl mx-auto">
          {/* Image Section */}
          <figure className="md:w-1/3 relative">
            <img
              src={data.data[5].logo}
              alt="Brooklyn Simmons portrait"
              className="w-full h-64 md:h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-person.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </figure>

          {/* Content Section */}
          <div className="p-8 md:p-12 md:w-2/3 space-y-6">
            <img
              src={data.data[6].logo}
              alt="Quote icon"
              className="h-8 w-8 opacity-75"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Dream house isn't dream anymore
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
              scelerisque. Ipsum, turpis facilisis tempor pulvinar.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Brooklyn Simmons</h3>
              <p className="text-gray-500">Artist</p>
            </div>
          </div>
        </article>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((dot) => (
            <button
              key={dot}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors"
              aria-label={`Testimonial ${dot}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Second;