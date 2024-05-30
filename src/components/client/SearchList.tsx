"use client"
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import testGetApi from "@/api/testGetApi";

export const SearchList = ({initData}:{initData:any}) => {
    const [itemData, setItemData] = useState(initData);
    const [state, setState] = useState<number>(2);

    const {refetch} = useQuery({
        queryKey: ['apiTest'],
        queryFn: () => testGetApi([state.toString()]),
    })
    const onClickButton = () =>{
        setState(state + 1)
        refetch().then((res:any)=>{
            setItemData(res.data)
        })
    }

return (
    <>
        <h1 className={"text-4xl"}>{itemData.title}</h1>
        <p>userId: {itemData.userId}</p>
        <p>id: {itemData.id}</p>
        <p>completed: {itemData.completed ? "true" : "false"}</p>
        <button
            className={"border border-teal-400 px-8 py-4"}
            onClick={onClickButton}
        >
            click
        </button>
    </>
)
}