import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import testGetApi from "@/api/testGetApi";
import {SearchList} from "@/components/client/SearchList";

export default async function Home() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['apiTest'],
        queryFn: () => testGetApi(["1"]),
    });
    const { queries } = dehydrate(queryClient);

    const data:any = queries[0].state.data;

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
        <main className="flex flex-col min-h-screen items-center justify-center gap-14">
            <SearchList initData={data}/>
        </main>
        </HydrationBoundary>
    );
}
