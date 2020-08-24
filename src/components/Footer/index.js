import Link  from "next/link";

export default function Footer({content}){

    return(
    <footer className="bg-orange-700">
        <div className="text-center p-6">
            <p className="border border-black rounded">
                {content}
            </p>
        </div>
        <div className="text-center p-6">
        🧡 Feito com amor 🧡
        </div>
        <p className="text-center p-5">&copy; Bruno Henrique 2020</p>
    </footer>
    )
}