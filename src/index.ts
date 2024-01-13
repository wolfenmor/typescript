
interface ICar {
    id: number;
    brand: string;
    price: number;
    year: number;
}

const carService = {
    getAll: (): Promise<ICar[]>=> fetch("http://owu.linkpc.net/carsAPI/v1/cars").then(value => value.json()),
    create: (car:ICar): Promise<ICar> => fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
        method: "POST",
        body: JSON.stringify(car),
        headers: {"Content-type": "application/json"}
    }).then(value => value.json()),
    deleteById: (id:number): Promise<Response> => fetch(`http://owu.linkpc.net/carsAPI/v1/cars${id}`)
}
carService.getAll().then(value =>console.log(value))