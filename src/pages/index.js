import "@/styles/index.css"
import "@/app/globals.css"
import localFont from 'next/font/local'

const mexcellent = localFont({ src: '../../public/fonts/mexcellent.ttf' })


export default function IndexPage() {
    return (
        <>
            <main className={mexcellent.className}>
                <div>
                <h1 crossOrigin="anonymous" className="neon flicker-slow">Techstatic</h1>
                </div>
            </main>

        </>
    )
}