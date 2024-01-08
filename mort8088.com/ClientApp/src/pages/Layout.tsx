import { Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { useEffect, useState } from "react";
import { MessageCircleDashedIcon } from 'lucide-react';

export default function Layout() {
    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className={`max-h-screen flex flex-row`}>
            <div className="hidden md:flex">
                {process.env.NODE_ENV !== "development"?
            <iframe 
                allowFullScreen 
                sandbox="allow-top-navigation allow-scripts allow-popups allow-popups-to-escape-sandbox"
                className="lg:w-[400px] h-screen"
                src="https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Ftoot.wales%2Fusers%2Fmort8088&theme=dark&size=100&header=true&replies=true&boosts=true">
            </iframe>
            : <MessageCircleDashedIcon className="lg:w-[400px] h-screen" /> }
            </div>   
            <div className={`max-h-screen flex flex-col`}>
            <PageHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className="grid grid-cols-[1fr,auto] flex-grow-1 overflow-auto">
                <div className="overflow-x-hidden px-4 py-2">
                    <Outlet />
                </div>
                <div className="bg-red-900">
                    Catagory Navigation
                </div>
            </div>
            <PageFooter />
        </div>

        </div>
    );
}