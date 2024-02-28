import Link from 'next/link';
export default function Navbar() {

  const handleClick = () => {
    startTransition(() => {
      setIsOpen(!isOpen);
    });
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0 xl:w-1/4">
            <div className="hidden lg:flex lg:w-80">
              <div className="flex items-baseline space-x-4">
              </div>
            </div>
          </div>
          <div className="lg:hidden">
          </div>
        </div>
      </div>
    </nav>
  );
}
