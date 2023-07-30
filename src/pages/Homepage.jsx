import { Link } from "react-router-dom";
const Homepage = ({ product }) => {
    console.log(product);
    return (
        <div>
            <h2 className="text-xl text-red-600">Home Page</h2>
            <div className="grid grid-cols-4 gap-4 w-[1200px] p-[120px]">

                {product.map((item) => {
                    return (
                        <div className="text-center" key={item.id}>
                            <img className="w-[200px] h-[200px]" src={item.img} alt="" />
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <Link to={`/detail/${item.id}`}> <button className="border border-l px-[20px] py-[7px] bg-red-600">Show Detail</button></Link>

                        </div>
                    )
                })}


            </div>

        </div>


    )
}

export default Homepage