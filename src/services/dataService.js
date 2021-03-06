import axios from "axios";

var catalog =[
    {
    _id:"1",
    title:"Bowl",
    image:"bowl1.jpg",
    price: 15.00,
    Catagory:"kitchen",
    },
    {
    _id:"2",
    title:"Bowl",
    image:"bowl2.jpg",
    price: 15.00,
    Catagory:"kitchen",
    },
    {
    _id:"3",
    title:"Bowl",
    image:"bowl3.jpg",
    price: 15.00,
    Catagory:"kitchen",
    },
    {
    _id:"4",
    title:"Planter",
    image:"planter1.jpg",
    price: 30.00,
    Catagory:"garden",
    },
        {
    _id:"5",
    title:"Planter",
    image:"planter2.jpg",
    price: 30.00,
    Catagory:"garden",
    },
        {
    _id:"6",
    title:"Planter",
    image:"planter3.jpg",
    price: 30.00,
    Catagory:"garden",
    },
    {
    _id:"7",
    title:"Cup",
    image:"cup1.jpg",
    price: 5.00,
    Catagory:"kitch",
    },
    {
    _id:"8",
    title:"Cup",
    image:"cup2.jpg",
    price: 5.00,
    Catagory:"kitchen",
    },
    {
    _id:"9",
    title:"Cup",
    image:"Cup3.jpg",
    price: 5.00,
    Catagory:"kitchen",
    },
    {
    _id:"10",
    title:"Platter",
    image:"platter1.jpg",
    price: 20.00,
    Catagory:"kitchen",
    },
    {
    _id:"11",
    title:"Platter",
    image:"platter2.jpg",
    price: 20.00,
    Catagory:"kitchen",
    },
{
    _id:"12",
    title:"Platter",
    image:"platter3.jpg",
    price: 20.00,
    Catagory:"kitchen",
    },
    {
    _id:"13",
    title:"Pets",
    image:"cat.jpg",
    price: 30.00,
    Catagory:"pet",
    },
    {
    _id:"14",
    title:"Pets",
    image:"dog.jpg",
    price: 75.00,
    Catagory:"pet",
    },
    {
    _id:"15",
    title:"Pet",
    image:"frog.jpg",
    price: 50.00,
    Catagory:"garden",
    },
    
    {
    _id:"16",
    title:"Sink",
    image:"sink.jpg",
    price: 150.00,
    Catagory:"home",
    },
    {
    _id:"17",
    title:"Sink",
    image:"sink2.jpg",
    price: 150.00,
    Catagory:"home",
    },
    {
    _id:"18",
    title:"Sink",
    image:"sink3.jpg",
    price: 200.00,
    Catagory:"home",
    },
    
];

class DataService{
    async getCatalog(){
        // create http request
        // to retrieve data from server
        let response = await axios.get("http://127.0.0.1:5000/api/catalog")
        console.log("test", response.data);
        return response.data;

        // return mock data
        // return catalog;
    }

    async getWeather(lat, lon){
        let apiKey = "0115a5538743b886ad8fd78c24ab34d9";

         let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        let response = await axios.get(url);
        // console.log(response.data);
        return response.data;

    }

    registerProduct(){
    }

}
export default DataService