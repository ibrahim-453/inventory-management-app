import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Boxes,
  CheckCircle,
  XCircle,
  LogIn,
  UserPlus,
  X
} from 'lucide-react';

function SideBar({ isResponsive = false, setOpen }) {
  return (
    <aside className='h-full bg-gradient-to-br from-zinc-950 to-zinc-800 text-white w-full p-6 flex flex-col gap-3 relative border-r border-zinc-800'>
      {isResponsive && (
        <button
          onClick={() => setOpen(false)}
          className='absolute top-4 right-4 p-1 rounded-md hover:bg-zinc-800 transition-colors duration-200'
          aria-label='Close Menu'
        >
          <X className='w-6 h-6 text-zinc-300 hover:text-white' />
        </button>
      )}

      <nav className='py-10 flex flex-col gap-4'>
        <NavLink 
          to='/' 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => 
            `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800 hover:text-pink-400 ${
              isActive ? 'bg-zinc-800 text-pink-400 font-medium' : 'text-zinc-300'
            }`
          }
        >
          <LayoutDashboard className='w-5 h-5' />
          Dashboard
        </NavLink>
        <NavLink 
          to='/inventory' 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => 
            `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800 hover:text-pink-400 ${
              isActive ? 'bg-zinc-800 text-pink-400 font-medium' : 'text-zinc-300'
            }`
          }
        >
          <Boxes className='w-5 h-5' />
          Inventory Manager
        </NavLink>
        <div className='flex flex-col gap-3'>
          <h4 className='font-semibold text-[20px] cursor-pointer'>
            Products
          </h4>
          <NavLink 
          to='/available' 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => 
            `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800 hover:text-green-400 ${
              isActive ? 'bg-zinc-800 text-green-400 font-medium' : 'text-zinc-300'
            }`
          }
        >
          <CheckCircle className='w-5 h-5' />
          Available
        </NavLink>
        <NavLink 
          to='/outofstock' 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => 
            `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800 hover:text-red-400 ${
              isActive ? 'bg-zinc-800 text-red-400 font-medium' : 'text-zinc-300'
            }`
          }
        >
          <XCircle className='w-5 h-5' />
          Out of Stock
        </NavLink>
        </div>
      </nav>

      {isResponsive && (
        <div className='mt-auto border-t border-zinc-800 pt-4 flex flex-col gap-1'>
          <NavLink 
            to='/login' 
            onClick={() => setOpen(false)} 
            className={({ isActive }) => 
              `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800 hover:text-blue-400 ${
                isActive ? 'bg-zinc-800 text-blue-400 font-medium' : 'text-zinc-300'
              }`
            }
          >
            <LogIn className='w-5 h-5' />
            Login
          </NavLink>
          <NavLink 
            to='/signup' 
            onClick={() => setOpen(false)} 
            className={({ isActive }) => 
              `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800 hover:text-pink-400 ${
                isActive ? 'bg-zinc-800 text-pink-400 font-medium' : 'text-zinc-300'
              }`
            }
          >
            <UserPlus className='w-5 h-5' />
            Sign Up
          </NavLink>
        </div>
      )}
    </aside>
  );
}

export default SideBar;