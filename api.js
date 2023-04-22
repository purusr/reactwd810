import axios from 'axios'


axios.get('https://fakestoreapi.com/products/100')
    .then((res) => console.log(res))
    .catch((error) => console.log(error.res))
            
            
