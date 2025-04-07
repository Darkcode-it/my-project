import data from "./Data.json";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">LUGAR</h2>
          
          <div className="flex items-start gap-4">
            <img 
              src={data.data[8].logo} 
              alt="Location icon"
              className="h-5 w-5 mt-1"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-icon.svg";
              }}
            />
            <p className="text-gray-300">2118 Thornridge Cir. Dubai, UAE 35624</p>
          </div>
          
          <div className="flex items-center gap-4">
            <img 
              src={data.data[9].logo} 
              alt="Phone icon"
              className="h-5 w-5"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-icon.svg";
              }}
            />
            <p className="text-gray-300">+33 415 65356 - 9</p>
          </div>
          
          <div className="flex items-center gap-4">
            <img 
              src={data.data[10].logo} 
              alt="Email icon"
              className="h-5 w-5"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-icon.svg";
              }}
            />
            <p className="text-gray-300">contact@lugar.com</p>
          </div>
          
          <p className="text-gray-500 text-sm mt-8">
            Copyright © 2022 Lugar Inc. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Project', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Legal Links</h3>
          <ul className="space-y-3">
            {['Terms', 'Conditions', 'Policy'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social Media</h3>
          <ul className="space-y-3">
            {['Facebook', 'X', 'YouTube', 'LinkedIn'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4 mt-6">
            {['facebook', 'twitter', 'youtube', 'linkedin'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label={`${platform} link`}
              >
                <img 
                  src={`/icons/${platform}.svg`} 
                  alt={`${platform} icon`}
                  className="h-5 w-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;