"use client"
import {useState} from "react";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import testGetApi from "@/api/testGetApi";

export const SearchList = () => {
    const queryClient = useQueryClient();
    const [state, setState] = useState<number>(2);
    const data:any = queryClient.getQueryData(["apiTest"])

    const {refetch} = useQuery({
        queryKey: ['apiTest'],
        queryFn: () => testGetApi([state.toString()]),
    })

    const onClickButton = () =>{
        const oldData:any = queryClient.getQueryData(["apiTest"]);
        setState(state + 1)
        refetch().then((res:any)=>{
            queryClient.setQueryData(['apiTest'], ()=> {
                Array.isArray(oldData) && oldData.push(res.data);
                return Array.isArray(oldData) ? oldData: [oldData, res.data]
            } )
        })
    }

return (
    <>
        {data && Array.isArray(data) && data.map((item: any) =>
            <h1 className={"text-4xl"} key={item.id}>{item.title}</h1>
        )}

        {data && !Array.isArray(data) && <h1 className={"text-4xl"}>{data.title}</h1>}
        <button
            className={"border border-teal-400 px-8 py-4"}
            onClick={onClickButton}
        >
            click
        </button>
    </>
)
}
