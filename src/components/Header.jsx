import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import SideBar from './SideBar';
import { useAuth } from '../context/AuthContext';

function Header() {
  const [open, setOpen] = useState(false);
  const {user,logout} = useAuth()

  return (
    <>
      <header className='w-full bg-gradient-to-br from-zinc-950 to-zinc-900 text-white px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <button
            className='md:hidden transition-transform hover:scale-110'
            onClick={() => setOpen(!open)}
            aria-label='Toggle Menu'
          >
            {open ? (
              <X className='w-6 h-6 text-pink-500' />
            ) : (
              <Menu className='w-6 h-6 text-pink-500' />
            )}
          </button>
          <h1 className='text-md md:text-2xl font-bold text-pink-500'>
            Inventory Management System
          </h1>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex gap-2'>
            <button className='bg-zinc-700 p-2 rounded-full hover:bg-zinc-600 transition'>
              <Moon className='w-5 h-5 text-white' />
            </button>
            <button className='bg-zinc-700 p-2 rounded-full hover:bg-zinc-600 transition'>
              <Sun className='w-5 h-5 text-white' />
            </button>
          </div>
          <div className='hidden md:flex gap-2'>
            {
              user ?
              (
                <>
                  <button onClick={logout} className='bg-pink-600 px-4 py-2 rounded-md text-sm hover:bg-pink-700 transition' >Logout</button>
                </>
              )
            :
           <>
             <Link
              to='/login'
              className='bg-zinc-700 px-4 py-2 rounded-md text-sm hover:bg-zinc-600 transition'
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='bg-pink-600 px-4 py-2 rounded-md text-sm hover:bg-pink-700 transition'
            >
              Sign Up
            </Link>
           </>
            }
          </div>
        </div>
      </header>
      {open && (
        <div
          className='fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden'
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-zinc-900 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SideBar isResponsive setOpen={setOpen} />
      </div>
    </>
  );
}

export default Header;
