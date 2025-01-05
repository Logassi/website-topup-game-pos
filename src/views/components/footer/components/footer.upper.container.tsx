import "@fortawesome/fontawesome-free/css/all.min.css";

export default function UpperContainer() {
  return (
    <div className="bg-black text-white py-8 px-4 grid grid-cols-4 gap-6">
      {/* Logo Section */}
      <div>
        <div className="flex items-center">
          <div className="bg-white w-10 h-10 rounded-full"></div>
          <span className="ml-3 font-bold text-lg">YOURWEBSITE LOGO</span>
        </div>
      </div>

      {/* Site Map */}
      <div>
        <h4 className="font-semibold mb-3">PETA SITUS</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:underline">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Semua Game
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Masuk
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Daftar
            </a>
          </li>
        </ul>
      </div>

      {/* Top-Up Links */}
      <div>
        <h4 className="font-semibold mb-3">TOP UP LAINNYA</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:underline">
              Mobile Legends
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Free Fire
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Pubg Mobile
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Undawn
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="font-semibold mb-3">IKUTI KAMI</h4>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div>
          <h4 className="font-semibold">PERTANYAAN BISNIS</h4>
          <a href="mailto:contact@email.id" className="hover:underline">
            contact@email.id
          </a>
        </div>
      </div>
    </div>
  );
}
