import axios from 'axios';
import Realm from 'realm';


export const fetchData = async () => {
  try {
    const response = await axios.get('http://192.168.1.2:3005/api/data');

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const data = response.data;
    return data;
  } catch (error) {
    console.error('There was a problem with the Axios request:', error);
    throw error;
  }
};

export const addProduct = async (ProductSchema) => {
  try {
    const response = await axios.post('http://192.168.1.2:3005/api/data', product, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 201) {
      throw new Error('Server response was not as expected');
    }

    console.log('Server response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
    throw error;
  }
};