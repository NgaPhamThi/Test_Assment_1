
const Product = ({ product }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Img
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.price}
                                </td>
                                <td className="px-6 py-4">
                                    <img className="w-[200px] h-[200px]" src={item.img} alt="" />

                                </td>
                                <td className="px-6 py-4 text-right flex gap-2">
                                    <button className="border border-l px-[15px] py-[5px] bg-red-600 text-white">Sua</button>
                                    <button className="border border-l px-[15px] py-[5px] bg-red-600 text-white">Xoa</button>
                                </td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>
        </div>

    )
}

export default Product