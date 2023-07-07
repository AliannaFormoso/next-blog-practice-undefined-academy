export default async function handler(req, res) {
    const posts = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    ).then((data)=>data.json());
    res.status(200).json(posts)
}