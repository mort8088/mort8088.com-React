export default function PageFooter() {
    return (
        <footer className="md:flex flex-row gap-10 lg:gap-20 justify-between py-2 px-4 bg-headfoot-back dark:bg-slate-700">
            <div className="items-center flex ">
                <div>
                    <img src="/images/games/Boxshot_D_109x150.webp" className="h-[150px] w-[109px]" />
                </div>
            </div>
            <div className="gap-4 flex-grow justify-center flex">
                <div className="px-8">
                    <h3 className="font-bold dark:text-headfoot-title">About</h3>
                    <p className="py-4 dark:text-headfoot text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus
                        commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                    </p>
                </div>
            </div>

            <div className="flex-shrink-0 md:gap-2 flex">
                <div className="px-8">
                    <h3 className="font-bold dark:text-headfoot-title">Social</h3>
                    <ul className="whitespace-nowrap columns-2 list-reset items-center text-sm pt-3">
                        <li>
                            <a
                                className="inline-block dark:text-headfoot no-underline hover:text-gray-100 hover:text-underline py-1"
                                target="_blank"
                                rel="me"
                                href="https://gamejolt.com/@mort8088"
                            >
                                Game Jolt
                            </a>
                        </li>
                        <li>
                            <a
                                className="inline-block dark:text-headfoot no-underline hover:text-gray-100 hover:text-underline py-1"
                                target="_blank"
                                rel="me"
                                href="https://www.linkedin.com/in/mort8088/"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                className="inline-block dark:text-headfoot no-underline hover:text-gray-100 hover:text-underline py-1"
                                target="_blank"
                                rel="me"
                                href="https://www.youtube.com/user/GameMort8088"
                            >
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a
                                className="inline-block dark:text-headfoot no-underline hover:text-gray-100 hover:text-underline py-1"
                                target="_blank"
                                rel="me"
                                href="https://mort8088.itch.io/"
                            >
                                Itch.io
                            </a>
                        </li>
                        <li>
                            <a
                                className="inline-block dark:text-headfoot no-underline hover:text-gray-100 hover:text-underline py-1"
                                target="_blank"
                                rel="me"
                                href="https://github.com/mort8088"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                className="inline-block dark:text-headfoot no-underline hover:text-gray-100 hover:text-underline py-1"
                                target="_blank"
                                rel="me"
                                href="https://toot.wales/@mort8088"
                            >
                                Mastodon
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
