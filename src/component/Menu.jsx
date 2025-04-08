import React, { useState } from "react";
import { FiMenu, FiX, FiUser, FiLogIn, FiHome, FiInfo, FiFolder, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import data from "./Data.json";
import { Link } from "react-router-dom";

export default function Menu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = [
        { label: "Home", href: "#", icon: <FiHome className="mr-3" /> },
        { label: "About", href: "#", icon: <FiInfo className="mr-3" /> },
        { label: "Projects", href: "#", icon: <FiFolder className="mr-3" /> },
        { label: "Contact", href: "#", icon: <FiMail className="mr-3" /> },
        {
            label: "Log In",
            href: "#",
            icon: <FiLogIn className="mr-3" />,
            className: "text-blue-600 font-medium"
        },
        {
            label: "Sign Up",
            href: "#",
            icon: <FiUser className="mr-3" />,
            className: "bg-blue-600 text-white hover:bg-blue-700"
        },
    ];

    const itemVariants = {
        closed: {
            opacity: 0,
            x: 50
        },
        open: {
            opacity: 1,
            x: 0
        }
    };

    const containerVariants = {
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    };

    return (
        <div className="min-h-screen">
            {/* نوار ناوبری */}
            <nav className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    {/* لوگو */}
                    <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                            R
                        </div>
                        <span className="text-2xl font-bold text-blue-800">RealEstate</span>
                    </div>

                    {/* منوی دسکتاپ */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-6">
                            {menuItems.slice(0, 4).map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex space-x-4 ml-6">
                            <Link
                                to="/my-project/login"
                                className="flex items-center px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors"
                            >
                                <FiLogIn className="mr-2" />

                                Log In
                            </Link>
                            <Link
                                to="/my-project/register"
                                className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg transition-colors shadow-md hover:shadow-lg"
                            >
                                <FiUser className="mr-2" />
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    {/* دکمه منوی موبایل */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <FiX className="h-6 w-6" />
                        ) : (
                            <FiMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* منوی موبایل با انیمیشن */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-50 bg-black bg-opacity-50"
                                onClick={toggleMobileMenu}
                            />

                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm bg-white shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-center mb-8">
                                        <span className="text-xl font-bold text-blue-800">RealEstate</span>
                                        <button
                                            onClick={toggleMobileMenu}
                                            className="p-2 text-gray-600 hover:text-blue-600"
                                            aria-label="Close menu"
                                        >
                                            <FiX className="h-6 w-6" />
                                        </button>
                                    </div>

                                    <motion.ul
                                        className="flex-1 space-y-4"
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={containerVariants}
                                    >
                                        {menuItems.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                variants={itemVariants}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <a
                                                    href={item.href}
                                                    className={`flex items-center px-4 py-3 text-lg rounded-lg transition-colors ${item.className || "text-gray-700 hover:bg-blue-50"
                                                        }`}
                                                >
                                                    {item.icon}
                                                    {item.label}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    <div className="mt-auto pt-6 border-t border-gray-200">
                                        <p className="text-gray-500 text-sm">
                                            © 2023 RealEstate. All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>

            {/* بخش هیرو */}
            <section className="container mx-auto px-4 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* محتوا */}
                    <div className="md:w-1/2 space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 leading-tight"
                        >
                            A home is built with{' '}
                            <span className="text-blue-600">love</span> and{' '}
                            <span className="text-blue-600">dreams</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-600"
                        >
                            Real estate agency that makes your dreams come true
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                                View Projects
                            </button>
                            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                                Contact Us
                            </button>
                        </motion.div>
                    </div>

                    {/* تصویر */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:w-1/2 relative"
                    >
                        <img
                            src={data.data[0].logo}
                            alt="Modern building"
                            className="w-full h-auto rounded-xl shadow-2xl"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/placeholder-home.jpg";
                            }}
                        />
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg"
                        >
                            <div className="flex space-x-8">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-blue-600">15K+</p>
                                    <p className="text-gray-600">Happy Clients</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-blue-600">25+</p>
                                    <p className="text-gray-600">Years Experience</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}