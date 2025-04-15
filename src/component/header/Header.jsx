import data from "../Data.json";

export default function Header() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={data.data[1].logo}
            alt="Luxury Dubai Building"
            className="w-full h-auto rounded-2xl shadow-xl object-cover transition-all duration-300 hover:shadow-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-building.jpg";
            }}
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-600 leading-tight">
            Award Winning Real Estate Company in Dubai
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
            scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
            ornare magna.
          </p>

          {/* Stats Container */}
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {/* Previous Projects */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Previous Projects
              </h3>
              <p className="text-3xl font-bold text-blue-600">34+</p>
            </div>

            {/* Years Experience */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Years Experience
              </h3>
              <p className="text-3xl font-bold text-blue-600">20y</p>
            </div>

            {/* Ongoing Projects */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Ongoing Projects
              </h3>
              <p className="text-3xl font-bold text-blue-600">12</p>
            </div>
          </div>

          {/* Additional CTA Button */}
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Explore Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}