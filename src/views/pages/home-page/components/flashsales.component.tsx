const flashSales = [
  {
    id: 1,
    image: "/images/diamond1.png",
    title: "300 Diamonds",
    price: "Rp50.000",
    discount: "-45%",
  },
  {
    id: 2,
    image: "/images/diamond2.png",
    title: "500 Diamonds",
    price: "Rp80.000",
    discount: "-50%",
  },
  // Add more items here...
];

export default function FlashSalesComponent() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">FLASH SALE</h2>
        <p className="text-gray-600 mb-10">
          Segera dapatkan penawaran terbaik dari kami, jangan sampai
          ketinggalan!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSales.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-red-500 font-bold mb-2">{item.price}</p>
              <p className="text-gray-500 text-sm mb-4">{item.discount}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
