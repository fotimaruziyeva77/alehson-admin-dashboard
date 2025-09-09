"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  FileText,
  Settings,
  LogOut,
	PanelsTopLeft,
} from "lucide-react";
import logo from '@/assets/logo.png'
export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Users", icon: Users },
    { name: "Reports", icon: FileText },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r transition-all duration-300 flex flex-col overflow-hidden",
          isCollapsed ? "w-20 h-screen" : "w-64"
        )}
      >
        {/* Logo */}
        <div className="flex items-center p-4 border-b">
          <div className="
					 w-10 h-10 rounded-md flex items-center justify-center text-white font-bold">
            <img src={logo} alt="" />
          </div>
          <span className={cn(
            "font-bold  text-black text-lg ml-3 whitespace-nowrap transition-all",
            isCollapsed ? "opacity-0 w-0" : "opacity-100"
          )}>
            Alehson
          </span>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 space-y-1 mt-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={cn(
                "flex items-center w-full p-3 rounded-lg transition-colors text-gray-700",
                "hover:bg-blue-50 hover:text-blue-600 justify-start gap-3"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className={cn(
                "whitespace-nowrap text-black  transition-all",
                isCollapsed ? "opacity-0 w-0" : "opacity-100"
              )}>
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <button className="flex items-center w-full p-3 rounded-lg transition-colors text-gray-700 hover:bg-red-50 hover:text-red-600 justify-start gap-3">
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span className={cn(
              "whitespace-nowrap transition-all",
              isCollapsed ? "opacity-0 w-0" : "opacity-100"
            )}>
              Logout
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md text-black  hover:bg-gray-100 mr-4"
          >
            <PanelsTopLeft className="h-5 w-5" />
          </button>
          <h2 className="text-xl font-semibold text-black">Dashboard</h2>
        </header>
        
        <main className="flex-1 p-6 overflow-auto bg-gray-50">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Welcome to your dashboard</h3>
            <p className="text-gray-600">Your main content goes here. You can add charts, statistics, tables, or any other content you need.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800">Users</h4>
                <p className="text-2xl font-bold mt-2 text-blue-600">542</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800">Reports</h4>
                <p className="text-2xl font-bold mt-2 text-green-600">24</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800">Settings</h4>
                <p className="text-2xl font-bold mt-2 text-purple-600">12</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}