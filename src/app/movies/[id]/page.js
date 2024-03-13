import Image from "next/image";

const page = async ({ params }) => {

    const id = params.id;

    console.log(id);

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9c83bd44c6mshd223c479228a492p10aae0jsn4a8b73b51210',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (
        <div className="flex justify-center items-center p-20">
        <div className="py-10">
            <h2 className="text-red-800 font-bold pb-10"><span className="text-2xl text-purple-800">Netflix</span>/{main_data.type}</h2>
            <div className="">
                <Image src={main_data.backgroundImage.url} alt={main_data.title} width={250} height={250} />
                <div className="p-4">
                    <h2 className="text-red-800 font-bold">{main_data.title}</h2>

                    <p className="text-sm py-2">{main_data.synopsis}</p>
                    <p className="text-sm py-2">{main_data.synopsisRegular}</p>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default page
