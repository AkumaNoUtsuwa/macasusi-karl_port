import {WorkCard} from "@/app/page";

export default function CardSample({title, description} : WorkCard){
    return(
        <div className='bg-green-300 h-60 w-60 content-center text-center'>
            {title} - {description}
        </div>
    )
}