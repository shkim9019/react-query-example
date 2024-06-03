"use client"

import {useQueryClient} from "@tanstack/react-query";

export const SearchList = (props:any) => {
    console.log("*********************************")
    console.log(props)

    // const setError = useSetRecoilState(errorState);
    const queryClient = useQueryClient();
    // // const [state, setState] = useState<number>(2);
    const data:any = queryClient.getQueryData(["apiTest"])

    //
    //
    // const {isLoading, isFetching, isPending,isError,  refetch} = useQuery({
    //     queryKey: ['apiTest'],
    //     queryFn: () => testGetApi([state.toString()]),
    // })

    // const onClickButton = () =>{
    //     const oldData:any = queryClient.getQueryData(["apiTest"]);
    //     setState(state + 1)
    //     refetch().then((res:any)=>{
    //         queryClient.setQueryData(['apiTest'], ()=> {
    //             Array.isArray(oldData) && oldData.push(res.data);
    //             return Array.isArray(oldData) ? oldData: [oldData, res.data]
    //         } )
    //     })
    // }

    // if( isLoading || isFetching || isPending ){
    //     return (
    //         <div className={"w-full bg-yellow-200 text-black flex flex-col items-center gap-14 p-40 py-80"}>
    //             <div className={"w-full min-h-32 flex flex-col gap-2 border border-black p-2"}>
    //                 <span className={"w-full min-h-8 min-w-full bg-gray-400 animate-pulse"}></span>
    //                 <span className={"w-full min-h-8 min-w-full bg-gray-400 animate-pulse"}></span>
    //                 <span className={"w-full min-h-8 min-w-full bg-gray-400 animate-pulse"}></span>
    //             </div>
    //             <button className={"w-1/2 bg-pink-200  px-8 py-4"}>
    //                 click
    //             </button>
    //         </div>
    //     )
    // }
    //
    // if (isError) {
    //     setError({errorCode:"test", errorMessage:"test입니다. 에러메시지 입니다. "})
    //     // return <ErrorComp errorMessage={"test"} errorCode={"ttt"}/>
    // }

    return (
        <div className={"w-full bg-yellow-200 text-black flex flex-col items-center gap-14 p-40 py-80"}>
            <div className={"w-full min-h-32 flex flex-col gap-2 border border-black p-2"}>
                {data && Array.isArray(data) && data.map((item: any) =>
                    <span className={"w-full min-h-8 min-w-full"} key={item.id}>{item.title}</span>
                )}
                {data && !Array.isArray(data) && <span className={"w-full min-h-8 min-w-full"}>{data.title}</span>}
            </div>
        {/*/!*    <button*!/*/}
        {/*        className={"w-1/2 bg-pink-200  px-8 py-4"}*/}
        {/*        onClick={onClickButton}*/}
        {/*>*/}
        {/*    click*/}
        {/*</button>*/}
    </div>
)
}
