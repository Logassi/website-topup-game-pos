export default function LowerContainer() {
  return (
    <div className="bg-black text-gray-500 text-sm py-4 px-4 border-t border-gray-700 flex justify-between">
      <span>© PT BERMAIN BERSAMA INDONESIA, 2023</span>
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">
          Kebijakan Privasi
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Hubungi Kami
        </a>
      </div>
    </div>
  );
}
