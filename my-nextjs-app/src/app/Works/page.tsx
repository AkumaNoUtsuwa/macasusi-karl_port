import CardSample from "@/Components/Custom_UI/Card_Sample";

export interface WorkCard{
    title: string;
    description: string;
}

export default function WorkPage(){

    const works=[
        {
            title: "My Game",
            description: "My First Game",
        },
        {
            title: "My 3D",
            description: "My First 3D Model",
        },
        {
            title: "My Drawing",
            description: "My First Drawing",
        }
    ]
    return(
        <div className='bg-green-500 h-screen text-2xl text-center content-center'>
            This is my Work page
        <div className='flex space-x-4 justify-center'>
            <CardSample title={works[0].title} description={"Description"}/>
            {works.map((work, index: number) => (
                <CardSample key={index} title={work.title} description={work.description}/>
            ))}
        </div>
        </div>
    )
}