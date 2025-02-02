import { create} from "zustand";

type Car={
    name:string;
    imgUrl:string;
    id:number;
    details:{
        speed:number;
        price:number;
        person:number;
        type:string;
       
    }
}
interface StoreState {
    place: string;
    setPlace: (newPlace: string) => void;
    car: Car;
    setCar: (newCar: Car) => void;
    duration:number;
    setDuration:(newDuration:number)=>void;
  }
const useStore = create<StoreState>((set) => ({
    duration:0,
    setDuration:(newDuration:number)=>set({duration:newDuration}),
    place:"",
    setPlace:(newPlace:string)=>set({place:newPlace}),
    car:{name:"", imgUrl:"", id:0, details:{speed:0, price:0, person:0, type:""}},
    setCar:(newCar:Car) => set({car:newCar}), 
}));
export default useStore;