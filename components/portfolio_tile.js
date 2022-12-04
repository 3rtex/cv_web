import Link from 'next/link'

export default function PortfolioTile({ title, date, image, a, children }) {
    return <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 px-6 mb-10">
        <Link href={a}><a>
            <div>
                <img className="object-cover h-48 md:h-36 xl:h-64 w-full" alt={title} src={image} />
            </div>
        </a></Link>
        <p className="mt-2 text-gray-500">{date}</p>
        <a href={a}>
            <p className="text-gradient">
                {title}
            </p>
        </a>
        <p className="text-gray-800 pt-2 text-justify">{children}</p>
    </div>

}