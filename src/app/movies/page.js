import MovieCard from "../components/MovieCard";


const Movies = async () => {

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9c83bd44c6mshd223c479228a492p10aae0jsn4a8b73b51210',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;


    return (
        <div className="w-full pb-20">
            <div className="py-20 text-center text-2xl">
                <h2 className="font-bold text-purple-800">Movies Page</h2>
                <p>Series & Movie</p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-evenly lg:flex-wrap lg:mx-20 ">
                {
                    main_data.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />
                    })
                }
            </div>
        </div>
    )
}

export default Movies;
