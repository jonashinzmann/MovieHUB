
export default async function handler(req, res) {
    const API_KEY = process.env.NEXT_PUBLIC_MOVIE_HUB_API_KEY;
    const response = await fetch(`http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`);
    const data = await response.json();
    res.status(200).json(data);
  }
  