export default async function handler(request, response) {
    console.log(request.query.characterId);

    const response_ = await fetch(`https://rickandmortyapi.com/api/character/${request.query.characterId}`);
    const json = await response_.json();



    response.status(200).json({
        name: json.name,
        status: json.status
    });
}