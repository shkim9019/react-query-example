// "use client"
// import {useRecoilState, useRecoilValue} from "recoil";
// import {errorState} from "@/api/atoms/errorState";
// import React from "react";
//
// export const ErrorComp = ({children} : {children:React.ReactNode}) => {
//     const [error, setError] = useRecoilState(errorState)
//
//     const resetError = () => {
//         setError({
//             errorCode:null,
//             errorMessage:null
//         })
//     }
//
//     if(error.errorCode !== null){
//         return(
//             <>
//                 {error.errorCode !== null &&
//             <div className={"fixed top-0 left-0 w-full h-full bg-gray-400/50 flex items-center justify-center z-50"}>
//                 <div className={"p-80 bg-white flex flex-col gap-8 text-black"}>
//                     <div className={"flex flex-col gap-4 "}>
//                         <h1 className={"text-4xl"}>{error.errorCode}</h1>
//                         <h2>{error.errorMessage}</h2>
//                     </div>
//                     <button
//                         className={"w-full border border-gray-500 p-4"}
//                         onClick={resetError}
//                     >확인</button>
//                 </div>
//             </div>
//                 }
//             </>
//         )
//     }else{
//         return null
//     }
//
// }