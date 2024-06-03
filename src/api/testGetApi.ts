import axios from 'axios';

export default async function testGetApi(param: string[]): Promise<any> {
    return new Promise<void>(async(resolve) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(response.data)
        setTimeout(()=> resolve(response.data), 10000);
    });
}
