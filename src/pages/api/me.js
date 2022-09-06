export default function handler(request, response) {
    const user = {
        name: { first: "Gregor", last: "Adams" },
        age: 18,
        hobbies: ["Coding", "Bouldering"]
    };


    response.status(200).json(user);
}