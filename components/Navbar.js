
import { useState } from 'react';

const NavBar = () => {

    const [state, setState] = useState(false)

    const [navigation,setNavigation] = useState([
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Shop", path: "/shop" },
        { title: "Encyclopedia", path: "/encyclopedia" },
        { title: "Services", path: "/services" }
    ]) 
    const [subNavigation,setSubnavigation] = useState([
        { title: "Garderie canine", path: "/Services/Petsitting/Petsitting" },
        { title: "Promenades", path: "/Services/DogWalking/Dogwalking" },
        { title: "Recherche de partenaires", path: "/Services/Tinder/Tinder" },
        { title: "Dressage", path: "/Services/Training/Training" }
    ])
    // const showMenu = ()=>{
    //     const menu = document.getElementById("menu");
    //     menu.classList.remove('invisible');
    //     menu.classList.add('visible');
        
    // }
    // const hideMenu =()=>{
    //     const menu = document.getElementById("menu");
    //     menu.classList.remove('visible');
    //     menu.classList.add('invisible');
    // }

    return (
        <nav className="bg-white w-full border-b md:border-0 md:static"  >
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img
                            src="/logoBarkers.png" 
                            width={120} 
                            height={50}
                            
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                
                                return (idx==4)
                                    ?<><li id={idx} className="peer text-gray-600 hover:text-green-600 hover:underline">
                                    <a href={item.path} className="peer">
                                        { item.title }
                                    </a>
                                    </li>
                                    <div className="hidden peer-hover:flex hover:flex
                                    w-[200px]
                                    flex-col bg-white">
                                        {
                                            subNavigation.map( (subItem)=>{
                                            return <a href={subItem.path} className="text-green-600 hover:text-green-600">
                                                { subItem.title }
                                            </a>
                                        })}
                                    </div>
                                    </>
                                    :<li id={idx} className="text-gray-600 hover:text-green-600">
                                        <a href={item.path}>
                                            { item.title }
                                        </a>
                                    </li>
                        })}
                    </ul>
                    {/* <div id="menu" className="invisible bg-green-200 w-2/3 m-auto justify-center rounded-md mt-15 items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        
                    </div> */}
                    
                </div>
                
                <div className="hidden md:inline-block">
                    <a href="/Login/Login" className="py-3 px-4 text-white hover:text-green-600 bg-green-600 hover:bg-green-200 rounded-md shadow">
                        Login
                    </a>
                </div>
            </div>
            
        </nav>
    )
};
export default NavBar;