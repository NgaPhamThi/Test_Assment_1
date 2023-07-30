import { useState } from "react"


const AddProduct = ({ addProduct }) => {
    console.log(addProduct);
    const [inputValue, setInputValue] = useState()
    const onHandleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputValue({ ...inputValue, [name]: value })
        // console.log({ "name": event.target.value })

    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        addProduct(inputValue)
        // console.log(inputValue);
    }

    return (
        <div>
            <h2 className="text-3xl pb-[50px]">Add Product</h2>
            <form onSubmit={onHandleSubmit}>
                <div className="flex gap-[30px] pb-[20px]">
                    <label className="text-black">Name</label>
                    <input name="name" className="border border-l border-black px-[30px]" type="text" onChange={onHandleChange} />
                </div>
                <div className="flex gap-[35px] pb-[20px]">
                    <label className="text-black">Price</label>
                    <input name="price" className="border border-l border-black px-[30px]" type="text" onChange={onHandleChange} />
                </div>
                <div className="flex gap-[25px] pb-[20px]">
                    <label className="text-black">image</label>
                    <input name="image" className="border border-l border-black px-[30px]" type="text" onChange={onHandleChange} />
                </div>

                <button type="submit" className="border border-l px-[15px] py-[5px] bg-blue-400">Add New</button>
            </form>
        </div>
    )
}

export default AddProduct