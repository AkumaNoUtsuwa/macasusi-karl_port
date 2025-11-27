import HeroSection from "@/Components/Sections/Main_Sec";
import ServiceSection from "@/Components/Sections/Service_Sec";
import WorkSection from "@/Components/Sections/Work_Sec";
export default function Home() {

    return (
        <div className='text-center'>
            <HeroSection/>
            <WorkSection/>
            <ServiceSection/>
        </div>
    );
}
