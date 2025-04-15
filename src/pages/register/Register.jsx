import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone, FaUserTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'نام کامل الزامی است';
        }

        if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            newErrors.email = 'ایمیل معتبر نیست';
        }

        if (!formData.phone.match(/^09[0-9]{9}$/)) {
            newErrors.phone = 'شماره موبایل معتبر نیست';
        }

        if (formData.password.length < 6) {
            newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'رمزهای عبور مطابقت ندارند';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
                    <h2 className="text-2xl font-bold text-white">Go to Register</h2>
                    <p className="text-blue-100 mt-1"></p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">

                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <FaUser />
                            </div>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full pr-10 pl-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                                placeholder="Full Name"
                            />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">

                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <FaEnvelope />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full pr-10 pl-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                                placeholder="example@example.com"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">

                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <FaPhone />
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full pr-10 pl-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                                placeholder="09123456789"
                            />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <FaUserTag />
                            </div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="ali123"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <FaLock />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full pr-10 pl-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <FaLock />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full pr-10 pl-4 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                                placeholder="••••••••"
                            />
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mr-2 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-700">
                                <a href="#" className="text-blue-600 hover:text-blue-500"> Rules </a>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <div className="bg-gray-800 px-6 py-4 text-center ">
                    <p className="text-sm text-gray-600">
                        You have an account?{' '}
                        <Link to="/my-project/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Log in
                        </Link>
                    </p>
                </div>  
            </div>
        </div>
    );
}