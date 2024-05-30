import axios from 'axios';

export default async function testGetApi(param: string[]): Promise<any> {
    console.log('[testGetApi] start :: ', JSON.stringify(param));

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${param[0]}`);

        console.log('[testGetApi] end.', response.data);
        return response.data;
    } catch (e) {
        throw e;
    }
}
