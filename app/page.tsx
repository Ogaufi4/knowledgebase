import HomeNavigation from "./components/shared/home-navigation";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col ">
            <div className="flex-grow">
                <HomeNavigation/>

            </div>
        </div>
    )
}
