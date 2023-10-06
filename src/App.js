import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Compras, Calendario, Trabajadores, Clientes, Kanban, Line, Area, Bar} from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css'

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative'>
          <div className='fixed right-4 bottom-4' style={ {zIndex: '1000' }}>
            <TooltipComponent content="Configuración" position="Top">
              <button type='button' 
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className='text-3x1 p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0'>
              <Sidebar />
            </div>
          )}
          <div className={
            `bg-main-bg min-h-screen w-full ${activeMenu ? 
              'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg w-full'>
              <Navbar />
            </div>

          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Ecommerce/>} />
              <Route path='/ecommerce' element={<Ecommerce/>} />

              {/* Paginas */}
              <Route path='/compras' element={<Compras/>} />
              <Route path='/trabajadores' element={<Trabajadores/>} />
              <Route path='/clientes' element={<Clientes/>} />

              {/* App */}
              <Route path="/calendario" element={<Calendario />} />
              <Route path='/kanban' element={<Kanban/>} />

              {/*
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
              */}
              
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
