import Image from 'next/image';
export default function Aboutme() {
    return (
        <section className="py-24 bg-rose-900">
            <div className="flex justify-between items-start max-w-5xl mx-auto">
            <div className="p-6">
                    <Image
                        src="/self-img.jpg"
                        alt="self image"
                        className="rounded-full border-4 border-rose-700"
                        width={420}
                        height={420}
                    />
                </div>
                <div className="p-6 z-10">
                    <h2 className="headingBackground text-3xl font-bold text-neutral-100 relative w-fit [text-shadow:_2px_2px_3px_rgb(23_23_23_/_0.8)]">About Me</h2>
                    <p className="mt-4 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, vel quasi enim ducimus qui tempora, in beatae eveniet officiis neque quibusdam ipsa aspernatur, voluptates accusantium!</p>
                </div>
            </div>
        </section>
    );
}