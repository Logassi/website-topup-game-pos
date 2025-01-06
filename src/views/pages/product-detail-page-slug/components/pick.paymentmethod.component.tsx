const paymentMethods = [
  { id: 1, name: "QRIS", image: "/images/qris.png" },
  { id: 2, name: "Gopay", image: "/images/gopay.png" },
  { id: 3, name: "OVO", image: "/images/ovo.png" },
];

export default function PickPaymentMethod() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Pilih Metode Pembayaran
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
            >
              <img
                src={method.image}
                alt={method.name}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">{method.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
