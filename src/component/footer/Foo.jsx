


import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';
import data from "../Data.json";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

        {/* ... سایر بخش‌های فوتر ... */}



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
            <a href="mailto:darkcodeit@protonmail.com" className="text-gray-300">darkcodeit@protonmail.com</a>
          </div>

          <p className="text-gray-500 text-sm mt-8">

            Developed by <a href="https://github.com/Darkcode-it" className="text-blue-600">Ahmad Rasouli</a>


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






        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social Media</h3>

          <div className="flex gap-4 mt-6">
            {[
              {
                icon: FaGithub,
                label: 'GitHub',
                url: 'https://github.com/Darkcode-it'
              },
              {
                icon: FaTelegram,
                label: 'Telegram',
                url: 'https://t.me/Darkcodeit'
              },
              {
                icon: FaFacebook,
                label: 'Facebook',
                url: 'https://www.facebook.com/DarkCodeit'
              }
            ].map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                aria-label={`${label} profile`}
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;