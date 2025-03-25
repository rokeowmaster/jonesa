import React from 'react'

const Nav = () => {
  return (
    <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Jonesa</span>
                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
            </a>
            </div>
           
            <div className="hidden lg:flex lg:gap-x-12">
            
            <a href="/products" className="text-sm/6 font-semibold text-gray-900">Products</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Cart</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Contacts</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
    
        </header>

  )
}

export default Nav