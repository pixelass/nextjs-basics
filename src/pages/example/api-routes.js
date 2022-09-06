import { useState, useEffect } from "react";

function DataLog({ data }) {
    return <pre>{JSON.stringify(data, null, 4)}</pre>

}

export default function Page() {

    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/me");
            const json = await response.json();
            setData(json)
        }
        fetchData();
    }, []);


    return <>
        <div>Hello API routes</div>
        <DataLog data={data} />
    </>
}