import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = (e) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageStoreKey = "e86bb22883b47f23918d5642f858a7e4";

  const onSubmit = async (data) => {
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.display_url;
          const product = {
            name: data.name,
            minimumQuantity: parseInt(data.minimumQuantity),
            availableQuantity: parseInt(data.availableQuantity),
            price: parseInt(data.price),
            description: data.des,
            img: img,
          };
          fetch("https://secret-temple-83800.herokuapp.com/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                toast.success("Product added successfully");
              } else {
                toast.error("Failed to added product. Try again letter");
              }
            });
        }
      });
  };

  return (
    <div>
      <div className="mt-6 md:ml-16">
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Add Product </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("availableQuantity", {
                    required: {
                      value: true,
                      message: "Maximum Quantity is Required",
                    },
                  })}
                  type="number"
                  placeholder="Maximum Quantity"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.maxQuantity?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-medium">
                      {errors.maxQuantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("minimumQuantity", {
                    required: {
                      value: true,
                      message: "MinQuantity is Required",
                    },
                  })}
                  type="number"
                  placeholder="Minimum Quantity"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.minQuantity?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-medium">
                      {errors.minQuantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is Required",
                    },
                  })}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-medium">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("des", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                  })}
                  type="text"
                  placeholder="Product Description"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("img", {
                    required: {
                      value: true,
                      message: "Photo is Required",
                    },
                  })}
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn btn-accent btn-outline text-white w-full max-w-xs"
                type="submit"
                value="ADD"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
