import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashhboard from "./pages/Dashboard";
import InventoryManager from './pages/InventoryManager';
import Available from "./pages/Available";
import OutOfStock from "./pages/OutOfStock";
import AddStock from "./pages/AddStock";
import EditStock from "./pages/EditStock";
import SignUp from './pages/SignUp';
import Login from './pages/Login'; // FIXED ✅

import { InventoryProvider } from './context/InventoryContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <HashRouter>

      <AuthProvider>
        <InventoryProvider>
          <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-[250px_1fr]">
            {/* Header spans full width */}
            <div className="col-span-1 md:col-span-2">
              <Header />
            </div>

            {/* Sidebar only on md+ screens */}
            <div className="hidden md:block">
              <SideBar />
            </div>

            {/* Main Content Area */}
            <main className="bg-zinc-900 p-4 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashhboard />} />
                <Route path="/inventory" element={<InventoryManager />} />
                <Route path="/addinventory" element={<AddStock />} />
                <Route path="/editinventory/:id" element={<EditStock />} />
                <Route path="/available" element={<Available />} />
                <Route path="/outofstock" element={<OutOfStock />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </InventoryProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
