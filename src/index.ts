interface ICar {
    id: number;
    brand: string;
    price: number;
    year: number;
}

const carService = {
    getAll: (): Promise<ICar[]> => { fetch("http://owu.linkpc.net/carsAPI/v1/cars").then(value => value.json())}
}