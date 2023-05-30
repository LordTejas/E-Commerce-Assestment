import config from '../ipConfig.json';
import axios from 'axios';

const fetchProducts = async (search) => {
    const productsUrl = `${config.endpoint}?search=${search}&limit=10`;

    const data = await axios.get(productsUrl);

    if (data.status === 200) {
        console.log(data.data.products);
        return data.data;
    }

    return [];
}

export {fetchProducts};