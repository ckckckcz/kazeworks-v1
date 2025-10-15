import Image from 'next/image';
import FooterBg from "@/app/Footer.png"

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-50 border-t-2 border-gray-200">
        <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
          <div className="lg:flex justify-between lg:mt-14">
            <h1 className="text-black lg:text-6xl md:text-5xl text-4xl font-bold lg:mb-0 mb-5">
              Let&apos;s <span className="text-[#32fb00]">Connect</span> ᯤ
            </h1>
            <a href="https://linkedin.com/in/riovaldorahman" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="lg:px-10 lg:py-4 px-4 py-2 cursor-pointer text-base font-bold text-center text-black bg-[#32fb00] hover:bg-[#57eb32] rounded-full"
              >
                Let&apos;s Talk
              </button>
            </a>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-900 border opacity-15 lg:my-8" />
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 lg:pr-[400px]">
              <a href="https://flowbite.com/" className="flex items-center mb-4">
                {/* <Image src={Logo} className="h-8 me-3" alt="FlowBite Logo" width={32} height={32} /> Adjust width/height as needed */}
                <span className="self-center text-2xl font-extrabold whitespace-nowrap text-black">
                  Kaze<span className="text-[#32fb00]">.</span>
                </span>
              </a>
              <span className="text-black lg:text-xl text-md opacity-50 font-medium">
                Designer and programmers, a creative duo that connects hearts and minds. Design gives soul, while code gives movement to inspiration
              </span>
            </div>
            <div className="">
              <div>
                <h2 className="mb-3 text-lg font-bold uppercase text-[#32fb00]">Contact</h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://linkedin.com/in/riovaldorahman" className="hover:underline">
                      Linkedin
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://instagram.com/theskenario._" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="mailto:rriovld@gmail.com" className="hover:underline">
                      Gmail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className="bgFooter"
        style={{
          backgroundImage: `url(${FooterBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-6">
          <div className="">
            <span className="lg:text-lg text-sm sm:text-center text-black font-semibold">
              Copyright © 2024 Kaze Works. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;