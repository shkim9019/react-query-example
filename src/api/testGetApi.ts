import axios from 'axios';

export default async function testGetApi(param: string[]): Promise<any> {

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${param[0]}`);


        await new Promise<void>((resolve) => {
            setTimeout(resolve, 3000);
        });
        return response.data;
    } catch (e) {
        throw e;
    }
}
