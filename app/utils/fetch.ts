
// import type { car } from "../components/cars-section"
// import cars from "../data/carsData.json"
// import places from "../data/places.json"
// export async function fetchCars(pos:String){
//     console.log(places[0].name===pos)
//     const place=places.filter((place)=>place.name===pos)[0]
//     console.log(place.carsId[0])
//     let returndCars:car[]=[];
//     let finalCars:car[][]=[]
//    for(let i =0; i<cars.length; i++){
//    for(let j=0; j<place.carsId.length; j++){
//        if(place.carsId[j]==cars[i].id){
//               returndCars.push(cars[i]);
//          }}}
    
//     let carRow:car[]=[]
//     for(let i=0; i<returndCars.length; i++){
//        if(carRow.length<3){
//            carRow.push(returndCars[i]);
//         }else{
//             finalCars.push(carRow);
//             carRow=[]
//             carRow.push(returndCars[i]);
//         }

//     }
//     finalCars.push(carRow);
//     return new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         resolve(finalCars);
//     },1000);
// });}