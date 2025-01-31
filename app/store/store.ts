import { create} from "zustand";

type Car={
    name:string;
    imgUrl:string;
}
interface StoreState {
    car: Car;
    setCar: (newCar: Car) => void;
  }
const useStore = create<StoreState>((set) => ({
    car:{name:"As", imgUrl:""},
    setCar:(newCar:Car) => set({car:newCar}), 
}));
export default useStore;