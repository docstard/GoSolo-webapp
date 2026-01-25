"use client"

import { animationPageOut } from "@/utils/animations";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


interface Props {
    url: string;
    label: string;
}
const TransitionLink = ({ url, label }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const linkClass = (path: string) =>
        `hover:text-primary transition-colors ${isActive(path) ? "text-primary font-semibold" : "text-gray-300"}`;


    const handleClick = () => {
        // e.preventDefault();
        if (pathname !== url) {
            animationPageOut(router, url);
        }
    }
    return (
        <Link onClick={handleClick} href={url} className={linkClass(url)}>
            {label}
        </Link>
    );
}

export default TransitionLink;