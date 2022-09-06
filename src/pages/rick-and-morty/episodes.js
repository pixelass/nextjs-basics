import { useEffect, useState } from "react";

function DataLog({ data }) {
    return <pre>{JSON.stringify(data, null, 4)}</pre>

}

export default function Characters() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://rickandmortyapi.com/api/episode");
            const json = await response.json();
            setData(json)
        }
        fetchData();
    }, []);
    return <>
        <h1>Episodes</h1>

        {data?.results.map(result => <div key={result.id}>{result.name}</div>)}

    </>
}