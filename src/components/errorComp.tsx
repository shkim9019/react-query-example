
type ErrorCompType = {
    errorCode: string;
    errorMessage:string;
}
export const ErrorComp = (props:ErrorCompType) => {
    return(
        <div className={"fixed top-0 left-0 w-full h-full bg-gray-400/50 flex items-center justify-center"}>
            <div className={"p-80 bg-white flex flex-col gap-8 text-black"}>
                <div className={"flex flex-col gap-4 "}>
                    <h1>code: {props.errorCode}</h1>
                    <h2>message: {props.errorMessage}</h2>
                </div>
                <button className={"w-full border border-gray-500 p-4"}>click</button>
            </div>

        </div>
    )
}