import { useState } from "react";

// can be declare interface instad of type
type ProductCartProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

//can be declare or use
// const ProductCart: React.FC<ProductCartProps> = for functional component

const ProductCart = ({
  //   id,
  name,
  price,
  description,
  image,
}: ProductCartProps) => {
  const [imageLoad, setImageLoad] = useState(false);
  const handleImageLoaded = () => {
    setImageLoad(true);
  };
  return (
    <div className="rounded-lg bg-white p-4 text-black shadow-md">
      <div className="h-48 w-full">
        {!imageLoad && (
          <div className="h-full w-full animate-pulse rounded-md bg-gray-200"></div>
        )}
        <img
          src={image}
          alt={name}
          className={`h-full w-full rounded-lg object-contain shadow-sm transition-opacity duration-300 ${imageLoad ? "opacity-100" : "opacity-0"}`}
          onLoad={handleImageLoaded}
        />
      </div>
      <p className="mt-4 text-center">{description}</p>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="opacity-60">${price}</p>
        </div>
        <button className="btn btn-primary rounded-md bg-black px-6 py-3 text-white shadow transition-colors duration-300 hover:bg-white hover:text-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
