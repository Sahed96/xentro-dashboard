/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProducts = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const newProduct = {
      name: data.name,
      data: {
        price: data.price,
        color: data.color,
        capacity: data.capacity,
      },
    };

    axios.post('https://api.restful-api.dev/objects', newProduct).then(res => {
      console.log(res.data);

      if (res.data && res.data.id) {
        Swal.fire({
          title: 'Success!',
          text: 'Product added successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          Navigate(`/new-products/${res.data.id}`);
        });
      }
    });
  };

  return (
    <div className="grow p-8">
      <div className="w-full mx-auto max-w-md rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
        <div className="mb-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            Add Products
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="name">
              Name
            </label>
            <input
              {...register('name', { required: true })}
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="name"
              placeholder="Device Name"
              name="name"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              Price
            </label>
            <input
              {...register('price', { required: true })}
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="price"
              placeholder="Product Price"
              name="price"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              Capacity
            </label>
            <input
              {...register('capacity', { required: true })}
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="capacity"
              placeholder="Device Storage Capasity"
              name="capacity"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_message">
              Color
            </label>
            <input
              {...register('color', { required: true })}
              className="h-10 w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="color"
              placeholder="Variant Color"
              name="color"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
