import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {

    const {id, type, title, synopsis} = curElem.jawSummary;

  return (
    <div className="py-10 w-60">
       <div className="shadow-lg shadow-black h-80">
        <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>
        <div className="p-4">
        <h2 className="text-red-800 font-bold">{title}</h2>
        <p className="text-sm py-2">{`${synopsis.substring(0,66)} ....`}</p>

        <Link className="text-purple-800 cursor-pointer font-bold hover:text-purple-400" href={`/movies/${id}`}>
            ReadMore
        </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
