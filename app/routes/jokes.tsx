import { Outlet } from "@remix-run/react"

export default function Jokes() {
    return (
        <div className="">
            <h1 className="font-bold">J🤪KES</h1>
            <main>
                <Outlet />
            </main>
        </div>
    );
}