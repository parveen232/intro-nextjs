'use client'
// this is now a client component
import Link from "next/link"
import { useRouter } from "next/navigation"

// import fs from 'fs';
// nodejs stuff

export default function Contact() {
    const router = useRouter()
    // router.----

    return (
        <div>
            <h1>contact</h1>
            <Link href="/">home</Link>
            <button onClick={() => router.push('/')}>home</button>
        </div>
    )
}

// export const getServerSideProps = () => {
//     // all types of node js stuff here
// }
// not happen anymore in app directory it was before in pages directory