import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Navbarlp() {
    return (
        <div className='bg-orange-100'>
        <header className="container mx-auto ">
            <div className='flex justify-between'>
            <h1>なかよし給食</h1>
            <button>
            <Bars3Icon  className="h-6 w-6 text-blue-500"/>
            </button>
            </div>
            <div>
            <ul>
                <li><a href="#" className='block px-8 py-2 hover:bg-orange-50 rounded'>menu1</a></li>
                <li><a href="#" className='block px-8 py-2 hover:bg-orange-50 rounded'>menu2</a></li>
                <li><a href="#" className='block px-8 py-2 hover:bg-orange-50 rounded'>menu3</a></li>
                <li><a href="#" className='block px-8 py-2 hover:bg-orange-50 rounded'>menu4</a></li>
            </ul>
            </div>
        </header>
        </div>
    )
}