import { useEffect, useState } from "react";
import Link from 'next/link'

function DataLog({ data }) {
    return <pre>{JSON.stringify(data, null, 4)}</pre>

}

export default function Characters() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const json = await response.json();
            setData(json)
        }
        fetchData();
    }, []);
    return <>
        <h1>Characters</h1>
        {/* <DataLog data={data} /> */}

        {data?.results.map(result => {

            /*
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            */
            return <div key={result.id}>
                <h2>{result.name}</h2>
                <p>Status: {result.status}</p>
                <Link href={`/rick-and-morty/characters/${result.id}`}>Show Details</Link>
            </div>
        })}

    </>
}