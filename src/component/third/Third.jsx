import data from "../Data.json";
import { useState } from "react"; 

  function Third() {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: ""
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
    };

    return (
      <section className=" py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src={data.data[7].logo}
              alt="Contact illustration"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-contact.jpg";
              }}
            />
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 w-full space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-600">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600">
                Turpis facilisis tempor pulvinar in lobortis ornare magna.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="How can we help you?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
                <p className="text-sm text-gray-500 text-center">
                  We don’t sell your email and spam
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

export default Third;