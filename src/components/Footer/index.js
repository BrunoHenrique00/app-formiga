import Link  from "next/link";

export default function Footer({content}){

    return(
    <footer className="bg-orange-700">
        <div className="text-center p-6">
            <p className="border text-white border-white rounded">
                {content}
            </p>
        </div>
        <p className="text-center text-white p-5">&copy; Bruno Henrique 2020</p>
    </footer>
    )
}