/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
      <div className="space-y-2 font-semibold">
        <h6 className="text-sm md:text-base lg:text-lg">{product.name}</h6>
        <p className="text-xs font-semibold md:text-sm">
         <a>Color :</a> {product?.data?.color || product?.data?.Color || 'N/A'}
        </p>
        <p><a className="mr-2">Price :$</a>{product?.data?.price || product?.data?.Price || 'coming soon'}</p>
        <p><a className="mr-2">Capacity : </a>{product?.data?.Capacity || product?.data?.capacity || 'N/A'}</p>
      </div>
      <div className="flex justify-end text-sm md:text-base">
        <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
