import { useState } from 'react';

const Layout = ({ children }) => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 bg-gray-800 text-white flex items-center px-4">
        <h1 className="text-xl font-bold">Your App Name</h1>
      </header>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className={`bg-gray-900 text-white transition-all duration-300 ${leftSidebarOpen ? 'w-64' : 'w-16'}`}>
          <div className="p-4">
            <button 
              onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
              className="w-full mb-4 p-2 hover:bg-gray-700 rounded"
            >
              {leftSidebarOpen ? '←' : '→'}
            </button>
            <nav className="space-y-2">
              <button className="w-full p-2 hover:bg-gray-700 rounded flex items-center">
                <span className="text-xl">🏠</span>
                {leftSidebarOpen && <span className="ml-2">Home</span>}
              </button>
              <button className="w-full p-2 hover:bg-gray-700 rounded flex items-center">
                <span className="text-xl">📊</span>
                {leftSidebarOpen && <span className="ml-2">Dashboard</span>}
              </button>
              <button className="w-full p-2 hover:bg-gray-700 rounded flex items-center">
                <span className="text-xl">⚙️</span>
                {leftSidebarOpen && <span className="ml-2">Settings</span>}
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100">
          {children}
        </main>

        {/* Right Sidebar */}
        <div className={`bg-gray-900 text-white transition-all duration-300 ${rightSidebarOpen ? 'w-64' : 'w-16'}`}>
          <div className="p-4">
            <button 
              onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
              className="w-full mb-4 p-2 hover:bg-gray-700 rounded"
            >
              {rightSidebarOpen ? '→' : '←'}
            </button>
            <nav className="space-y-2">
              <button className="w-full p-2 hover:bg-gray-700 rounded flex items-center">
                <span className="text-xl">👥</span>
                {rightSidebarOpen && <span className="ml-2">Users</span>}
              </button>
              <button className="w-full p-2 hover:bg-gray-700 rounded flex items-center">
                <span className="text-xl">📝</span>
                {rightSidebarOpen && <span className="ml-2">Notes</span>}
              </button>
              <button className="w-full p-2 hover:bg-gray-700 rounded flex items-center">
                <span className="text-xl">📅</span>
                {rightSidebarOpen && <span className="ml-2">Calendar</span>}
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
        <p>© 2024 Your Company Name</p>
      </footer>
    </div>
  );
};

export default Layout; 