export default async function handler(request, response) {
    // https://api.spoonacular.com/recipes/716429/information?apiKey=1234567890

    const response_ = await fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=1234567890");
    const json = await response_.json();

    response.status(200).json(json)
}