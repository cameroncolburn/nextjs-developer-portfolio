import Image from "next/image";

export default function LandingSection() {
    return (
        <header className="h-screen">
            <div className="flex justify-around items-center h-5/6 max-w-5xl mx-auto">
                <div>
                    <h1 className="text-5xl font-bold text-rose-700">Welcome, I'm Cam!</h1>
                    <p className="text-xl font-semibold my-5 text-neutral-500">I'm a Full-Stack Software Developer</p>
                </div>
                <div>
                    <Image
                        src="/laptop-icon.svg"
                        alt="laptop icon"
                        width={230}
                        height={230}
                    />
                </div>
            </div>
            <div className="h-1/6">
                <Image
                    src="/down-arrow.svg"
                    alt="down arrow icon"
                    width={25}
                    height={25}
                    className="mx-auto animate-bounce"
                />
            </div>
        </header>
    );
}