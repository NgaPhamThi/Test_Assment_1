import { useParams } from "react-router-dom"

const Detail = ({ product }) => {
    const { id } = useParams()
    const detailProduct = product.find((item) => item.id === Number(id))
    console.log(detailProduct);
    return (
        <div>
            <h2 className="text-2xl mb-[50px]">Detail</h2>
            <div className="flex gap-[20px]">
                <div className="">
                    <img className="w-[300px] h-[300px]" src={detailProduct.img} alt="" />
                </div>
                <div className="">
                    <h3 className="text-xl">{detailProduct.name}</h3>
                    <p>{detailProduct.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail