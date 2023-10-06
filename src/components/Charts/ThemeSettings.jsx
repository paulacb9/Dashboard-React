import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const ThemeSettings = () => {
  
  const { setColor, currentColor, setThemeSettings } = useStateContext();
  
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen bg-white w-400'>
        <div className='felx justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>Configuración</p>
          <button
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180' , borderRadius: '50%'}}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col border-t-1 borrder-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Colores de tema</p>
          <div className='flex gap-3'>
            {themeColors.map((item,index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
              <div className='relative mt-2 cursor-pointer flex gap-5 items-center' key={item.name}>
                <button 
                  className='h-10 w-10 rounded-full cursor-pointer'
                  style={{ backgroundColor: item.color}}
                  onClick={() => setColor(item.color) }
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings