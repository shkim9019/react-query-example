import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import testGetApi from "@/api/testGetApi";
import {SearchList} from "@/components/client/SearchList";

export default async function Home() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['apiTest'],
        queryFn: () => testGetApi(["1"]),
    });

    return (

        <HydrationBoundary state={dehydrate(queryClient)}>
        <main className="flex flex-col min-h-screen items-center justify-center gap-14">
            {/*<ErrorComp errorCode={null} errorMessage={null} />*/}
            <SearchList/>
        </main>
        </HydrationBoundary>
    );
}
