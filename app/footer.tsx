import Image from "next/image";

export default function FooterBar() {
    return (
      <footer className="text-gray-700 bg-white border-t sm:mt-20 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800">
        <div className="container flex flex-col items-center py-8 mx-auto px-7 max-w-7xl sm:flex-row">
            <a className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold">
                <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">
                    <Image
                        src="/initials-logo.svg"
                        alt="branding logo"
                        width={16}
                        height={16}
                    />
                </span>
                <span className="-translate-y-0.5"></span>
            </a>
            <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
            © 2024 Cameron Colburn</p>
            <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                <a>
                    <span>LinkedIn</span>
                </a>
                <a>
                    <span>Github</span>
                </a>
                <a>
                    <span>FaceBook</span>
                </a>
            </span>
        </div>
      </footer>
    );
  }