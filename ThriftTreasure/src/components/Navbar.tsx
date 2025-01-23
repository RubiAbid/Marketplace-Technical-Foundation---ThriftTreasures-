import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[200px]">
        {/* Logo */}
<div className="flex-shrink-0 mx-[-190px] flex justify-center items-center overflow-hidden h-[100px] w-[250px]">
  <Link href="/">
    <Image
      src="/THRIFTED.png" // Path to the image in the public folder
      alt="Logo"
      height={150} // Original image height
      width={250}  // Original image width
      className="object-cover object-center h-full w-full"
    />
  </Link>
</div>


          {/* Desktop Navigation and Login Button */}
          <div className="hidden md:flex space-x-[70px] font-serif mx-[29%]">
            <Link href="/" className="text-[20px] font-semibold text-black">Home</Link>
            <Link href="/shop" className="text-[20px] font-semibold text-black">Shop</Link>
            <Link href="/cart" className="text-[20px] font-semibold text-black">Cart</Link>
            <Link href="/about" className="text-[20px] font-semibold text-black">About</Link>
            <Link href="/contactUs" className="text-[20px] font-semibold text-black">Contact Us</Link>
            
            {/* Login Button */}
            <Link href="/login">
              <Button className="bg-black text-black text-[25px]">Login</Button>
            </Link>
          </div>

          {/* Search Bar Positioned Right of the Login Button */}
          <div className="hidden md:flex items-center space-x-4 mx-[-20%]">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search Products"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-purple-700 -translate-x-9">
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-800 px-4 py-4 space-y-4">
          <Link href="/" className="text-lg font-semibold text-white hover:text-purple-300 block">Home</Link>
          <Link href="/shop" className="text-lg font-semibold text-white hover:text-purple-300 block">Shop</Link>
          <Link href="/cart" className="text-lg font-semibold text-white hover:text-purple-300 block">Cart</Link>
          <Link href="/login">
            <Button className="bg-purple-900 hover:bg-purple-700 text-white w-full">Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
