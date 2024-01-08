import { MoonIcon, RssIcon, SunIcon } from "lucide-react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { apiServer } from "../utils/apiServer";

interface PageHeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export default function PageHeader ({ darkMode, toggleDarkMode }:PageHeaderProps) {
    return (
        <div className="flex flex-row gap-10 lg:gap-20 justify-between py-1 px-4 bg-headfoot-back dark:bg-headfoot-darkBack">
            <div className="gap-4 items-center flex-shrink-0 flex">
                <img className="h-10 w-10 rounded-full" src="/images/meme/meme150x150.webp" alt="ME!" />
                <div className="ml-1 overflow-hidden">
                    <p className="text-sm font-medium dark:text-headfoot-title">Dave 'mort8088' Henry</p>
                    <p className="text-sm truncate text-slate-200 dark:text-headfoot">dave@mort8088.com</p>
                </div>
            </div>
            <div className="gap-4 flex-grow justify-center flex" />
            <div className="flex-shrink-0 md:gap-2 flex items-center">
                <Button size="icon" variant="themeSwitch">
                {darkMode ? <SunIcon onClick={toggleDarkMode} /> : <MoonIcon onClick={toggleDarkMode} />}
                </Button>
                <Link to={apiServer("/rss")}>
                    <Button size="rss" variant="rss" title="RSS">
                        <RssIcon />
                    </Button>
                </Link>
            </div>            
        </div>
    )
}