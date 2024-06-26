'use client';

import "./globals.css";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
        { name: 'Reports', href: '#', current: false },
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <html lang="en" className="h-full bg-gray-100">
            <body className="h-full">
                <>
                    <div className="min-h-full">
                        <Disclosure as="nav" className="bg-gray-800">
                            {({ open }) => (
                                <>
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                        <div className="flex h-16 items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-8 w-8"
                                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                        alt="Your Company"
                                                    />
                                                </div>
                                                <div className="hidden md:block">
                                                    <div className="ml-10 flex items-baseline space-x-4">
                                                        {navigation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'bg-gray-900 text-white'
                                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                                )}
                                                                aria-current={item.current ? 'page' : undefined}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="ml-4 flex items-center md:ml-6">
                                                </div>
                                            </div>
                                            <div className="-mr-2 flex md:hidden">
                                                {/* Mobile menu button */}
                                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only">Open main menu</span>
                                                    {open ? (
                                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </Disclosure.Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Disclosure.Panel className="md:hidden">
                                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                            {navigation.map((item) => (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'block rounded-md px-3 py-2 text-base font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <div>
                            {children}
                        </div>
                    </div>
                </>
            </body>
        </html>
    );
}
