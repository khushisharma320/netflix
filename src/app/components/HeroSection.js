import Image from 'next/image';


const HeroSection = ({title, img}) => {
  return (
    <main className="h-full w-full bg-gradient-to-r from-sky-800 rounded-bl-[170px] md:rounded-bl-full">
        <div className="flex flex-col md:flex-row md:justify-evenly items-center py-40">
            <div className="text-center pb-20 md:pb-0">
                <h2 className="text-2xl text-red-800 font-extrabold md:text-4xl">{title}</h2>
                <p className="pt-8 mx-4 text-orange-600 font-semibold">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                <p className="mx-4 text-orange-600 font-semibold">Save your favourites easily and always have something to watch.</p>
            </div>
            <div>
                <Image className="shadow-lg shadow-black" src={img} alt="Hero Image" width={350} height={100}></Image>
            </div>
        </div>
    </main>

  )
}

export default HeroSection;
