const CarPrice = ({price}:{price:string}) => {
    return ( 
<div className="absolute bottom-0 bg-white text-black w-1/3 mx-auto  flex justify-between h-[10vh]">
    {price} <p className="text-gray-600">/DAY</p>
    <button className="w-20 h-10 bg-background ">Rent Now</button>
</div>

     );
}
 
export default CarPrice;