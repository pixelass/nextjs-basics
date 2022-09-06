import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
function DataLog({ data }) {
    return <pre>{JSON.stringify(data, null, 4)}</pre>

}

export default function Characters() {
    const router = useRouter();
    const { query } = useRouter();
    console.log(router);



    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${query.characterId}`);
            const json = await response.json();
            setData(json)
        }
        if (query.characterId) {
            fetchData();
        }

    }, [query]);

    return <>
        <h1>{data?.name}</h1>
        <button onClick={() => {
            router.back()
        }}>Go back</button>
        <Link href="/rick-and-morty/characters">Go to overview</Link>
        <DataLog data={data} />

        {/* {data?.results.map(result => <div key={result.id}>{result.name}</div>)} */}

    </>
}