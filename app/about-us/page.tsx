import type { Metadata } from 'next'
import { Footer } from '@/components';
import Navbar from '@/components/header/Navbar';

export const metadata: Metadata = {
    title: 'Marsa Alam Holiday - About US',
    description: 'About Marsa Alam Holiday You can learn more about Marsa Alam Holiday You can see our customers and you can create a profile about us',
}


export default function AboutUs() {
    return (
        <>
            <Navbar />

            <main className="px-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9">
                <p className="pb-2 text-xl font-normal text-indigo-700 cursor-pointer hover:text-indigo-800 dark:text-indigo-100">About</p>
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-8 sm:gap-10">
                    <div className="w-full lg:w-6/12">
                        <h2 className="w-full text-3xl font-bold leading-9 lg:text-4xl lg:leading-10 dark:text-white">We're here to make travel easy and fun for everyone</h2>
                        <p className="mt-6 text-base font-normal leading-6 text-gray-600 dark:text-gray-200">We make trips to Egypt and Marsa Alam easier, faster and better. We have many years of experience in Egypt, especially Marsa Alam. Try us now and contact us. Or you can contact us via email. We are always here to make you and your family happy.</p>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <img className="w-full rounded-md shadow" src="https://www.urtrips.com/wp-content/uploads/2018/10/Where-is-Marsa-Alam-3.jpg" alt="marsa alam" />
                    </div>
                </div>

                <div className="relative mt-24">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
                        <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#1F2937" />
                            <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <svg className="z-20 hidden sm:block" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#1F2937" />
                            <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <hr className="z-10 absolute top-2/4 w-full border-gray-900 dark:border-white" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
                    <div>
                        <p className="mt-6 text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6 dark:text-white">Founded</p>
                        <p className="mt-6 text-base font-normal leading-6 text-gray-600 dark:text-gray-200">Website Trips was founded in 2012, with a team of passionate travel enthusiasts from flights and accommodation to tours and activities in Marsa Alam</p>
                    </div>
                    <div>
                        <p className="mt-6 text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6 dark:text-white">Our travels</p>
                        <p className="mt-6 text-base font-normal leading-6 text-gray-600 dark:text-gray-200">Our trips in Marsa Alam are unique in terms of mountains, beaches, outings and hunting. We are with you and always make you happy</p>
                    </div>
                    <div className="hidden sm:block">
                        <p className="mt-6 text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6 dark:text-white">10k User</p>
                        <p className="mt-6 text-base font-normal leading-6 text-gray-600 dark:text-gray-200">We at Marsa Alam have made many of our travelers incredibly happy. Join us now and be one of our special travelers in Marsa Alam trips</p>
                    </div>
                </div>
                <div className="relative block mt-8 sm:hidden">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
                        <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#1F2937" />
                            <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <hr className="z-10 absolute top-2/4 w-full border-gray-900 dark:border-white" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:hidden sm:grid-cols-3 sm:gap-8">
                    <div>
                        <p className="mt-6 text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6 dark:text-white">10k User</p>
                        <p className="mt-6 text-base font-normal leading-6 text-gray-600 dark:text-gray-200">We at Marsa Alam have made many of our travelers incredibly happy. Join us now and be one of our special travelers in Marsa Alam trips</p>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-16 mt-16 lg:flex-row md:gap-14 lg:mt-20">
                    <div className="w-full lg:w-6/12">
                        <h2 className="text-3xl font-bold leading-7 text-gray-800 lg:text-4xl lg:leading-9 dark:text-white">Our Mission</h2>
                        <p className="w-full mt-8 text-base font-normal leading-6 text-gray-600 lg:w-10/12 xl:w-9/12 dark:text-gray-200">for the website trips is to provide an exceptional online platform where users can explore and plan their dream vacations with ease. We strive to offer a comprehensive range of travel options, including flights, accommodations, and activities, all tailored to meet the unique preferences and budgets of our users.</p>
                        <p className="w-full mt-10 text-base font-normal leading-6 text-gray-600 lg:w-10/12 xl:w-9/12 dark:text-gray-200">Our goal is to inspire and assist travelers in creating unforgettable experiences, whether they are seeking adventure, relaxation, or cultural immersion. With a user-friendly interface and reliable information, we aim to simplify the trip planning process and ensure that every journey is memo</p>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12">
                            {/* <!-- Team Card --> */}
                            <div className="flex p-4 shadow-lg rounded-lg dark:shadow-gray-900">
                                <div className="mr-6">
                                    <svg className="dark:fill-white" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="">
                                    <p className="text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6 dark:text-white">Team</p>
                                    <p className="mt-2 text-base font-normal leading-6 text-gray-600 dark:text-gray-300">We are a great team, our mission is to make you happy on the trip to Marsa Alam. be with us</p>
                                </div>
                            </div>

                            {/* <!-- Board Card --> */}
                            <div className="flex p-4 shadow-lg rounded-lg dark:shadow-gray-900">
                                <div className="mr-6">
                                    <svg className='dark:fill-white' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="">
                                    <p className="text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6 dark:text-white">Board</p>
                                    <p className="mt-2 text-base font-normal leading-6 text-gray-600 dark:text-gray-300">In the beginning we show you what our journey will be like from start to finish so that you are ready for the adventure.</p>
                                </div>
                            </div>

                            {/* <!-- Press Card --> */}
                            <div className="flex p-4 shadow-lg rounded-lg dark:shadow-gray-900">
                                <div className="mr-6">
                                    <svg className='dark:fill-white' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="">
                                    <p className="text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6 dark:text-white">Send-Mail</p>
                                    <p className="mt-2 text-base font-normal leading-6 text-gray-600 dark:text-gray-300">You can contact us by e-mail. We are quick to respond. You can inquire about anything.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

