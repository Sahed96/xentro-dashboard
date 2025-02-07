import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewlyAddedProduct = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [newProduct, setNewProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://api.restful-api.dev/objects/${id}`).then(res => {
      setNewProduct(res.data);
    });
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirmDelete.isConfirmed) {
      await axios.delete(`https://api.restful-api.dev/objects/${id}`);
      Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      Navigate('/products');
    }
  };

  return (
    <div className="grow p-8">
      {newProduct && (
        <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
          <div className="space-y-2 font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">
              {newProduct.name}
            </h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">
              {newProduct.id}
            </p>
            <p>${newProduct?.data?.price || 'coming soon'}</p>
          </div>
          <div className="flex justify-end text-sm md:text-base">
            <button
              onClick={handleDelete}
              className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewlyAddedProduct;
