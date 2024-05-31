import axios from 'axios';

export default async function testGetApi(param: string[]): Promise<any> {

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${param[0]}`);

        return response.data;
    } catch (e) {
        throw e;
    }
}
