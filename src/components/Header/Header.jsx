import React from 'react'

function Header() {
    return (
        <>
            <nav className='rounded-md flex p-2 items-center justify-between cursor-pointer dark:bg-gray-900 text-white'>
                <div className='pl-1'><a href="#"><img width='30px' height='25px' src="https://cdn.icon-icons.com/icons2/2890/PNG/512/apps_web_development_chrome_logo_website_browser_google_icon_182706.png" alt="" /></a></div>
                <div className='hidden md:block'>
                    <ul className='flex'>
                        <li className='ml-4 hover:underline underline-offset-4 hover:text-purple-300'>Home</li>
                        <li className='ml-4 hover:underline underline-offset-4 hover:text-purple-300'>About</li>
                        <li className='ml-4 hover:underline underline-offset-4 hover:text-purple-300'>Contact</li>
                    </ul>
                </div>
                <div className='hidden md:block pr-4 hover:text-purple-300'>
                    Register/Login
                </div>
                <div className='md:hidden sm:block hover:text-purple-300'>
                    Menu
                </div>
            </nav>
            <hr />
            <section class="bg-white dark:bg-gray-900 rounded-md">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-400 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div class="lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg" alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
