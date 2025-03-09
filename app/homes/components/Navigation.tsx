export function Navigation() {
    const navItems = [
      "Newsletter",
      "Project Pulse",
      "Map",
      "Themes",
      "Gun-Punt",
      "Accommodation/Workshops",
      "VIP",
      "Media & Press",
      "Camping/Parking",
      "Gallery",
    ]
  
    return (
      <nav className="bg-white text-black py-2 px-4 relative z-20">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center text-xs gap-x-4">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
  
  