import co1 from "@/assets/images/coffee1.webp";
import co2 from "@/assets/images/coffee2.webp";
import co3 from "@/assets/images/coffee3.webp";
import ProductCart from "@/components/productCart";

const product = [
  {
    id: 1,
    name: "Espresso",
    price: 3.5,
    description: "Rich and bold espresso shot.",
    image: co1,
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4.0,
    description: "Creamy cappuccino with a frothy top.",
    image: co2,
  },
  {
    id: 3,
    name: "Latte",
    price: 4.5,
    description: "Smooth latte with steamed milk.",
    image: co3,
  },
];

export default function Shop() {
  return (
    <section className="flex grow bg-gradient-to-r from-slate-900 to-blue-500">
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-3">
          {product.map((products) => (
            <ProductCart {...products} />
          ))}
        </div>
      </div>
    </section>
  );
}
