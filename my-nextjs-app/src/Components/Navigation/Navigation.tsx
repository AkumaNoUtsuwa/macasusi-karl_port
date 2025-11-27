"use client";
import { useRouter } from "next/navigation";

export default function NavigationalBar() {
    const router = useRouter();

    return (
        <nav>
            <ul className="flex space-x-4 text-green-300">
                <li onClick={() => router.push("/")}>Home</li>
                <li onClick={() => router.push("/Works")}>Works</li>
                <li onClick={() => router.push("/About")}>About</li>
            </ul>
        </nav>
    );
}
