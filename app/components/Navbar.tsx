import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png"

export default function Navbar(){
    return(
        <div className="flex py-5 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <Image src={Logo} alt="Sched" className="size-10"/>
                <h4 className="text-3xl font-semibold">Sched</h4>
            </Link>

            <button>
                Get Started Today
            </button>
        </div>
    )
}