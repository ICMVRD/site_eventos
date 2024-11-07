import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  Droplets, 
  Church, 
  Music, 
  GlassWater,
  Calendar
} from 'lucide-react';

const navItems = [
  { to: "/eventos", icon: Calendar, label: "Eventos" },
  { to: "/eventos/seminario-criancas", icon: Users, label: "Seminário de Crianças" },
  { to: "/eventos/batismos", icon: Droplets, label: "Batismos" },
  { to: "/eventos/cultos-especiais", icon: Church, label: "Cultos Especiais" },
  { to: "/eventos/cantatas", icon: Music, label: "Cantatas" },
  { to: "/eventos/ceias", icon: GlassWater, label: "Ceias" },
];

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-center sm:justify-start">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:block">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};