var catalog =[
    {
    _id:"1",
    title:"Bowl",
    image:"bowl.jpg",
    price: 10.00,
    Catagory:"kitchen",
    },
    {
    _id:"2",
    title:"Cup",
    image:"cup.jpg",
    price: 10.00,
    Catagory:"kitchen",
    },
    {
    _id:"3",
    title:"mug",
    image:"mug.jpg",
    price: 9.99,
    Catagory:"kitchen",
    },
    {
    _id:"4",
    title:"Planter",
    image:"planter.jpg",
    price: 9.99,
    Catagory:"garden",
    },
        {
    _id:"5",
    title:"Platter",
    image:"platter.jpg",
    price: 9.99,
    Catagory:"kitchen",
    },
        {
    _id:"6",
    title:"Sink",
    image:"sink.jpg",
    price: 9.99,
    Catagory:"Home",
    },
    {
    _id:"7",
    title:"Turtle",
    image:"turtle.jpg",
    price: 9.99,
    Catagory:"garden",
    },
];

class DataService{
    getCatalog(){
        // create http request
        // to retrieve data from server

        // return mock data
        return catalog;
    }

    registerProduct(){

    }

}
export default DataService