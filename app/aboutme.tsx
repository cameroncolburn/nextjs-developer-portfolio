import Image from 'next/image';
export default function Aboutme() {
    return (
        <section className="contact-section pt-12 pb-12 font-[family-name:var(--font-karla-sans)]">
            <div className="flex justify-between items-start max-w-5xl mx-auto">
                <div className="headerTitle p-6">
                    <h2 className="text-2xl font-bold">About Me</h2>
                    <p className="font-semibold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, vel quasi enim ducimus qui tempora, in beatae eveniet officiis neque quibusdam ipsa aspernatur, voluptates accusantium!</p>
                </div>
                <div className="p-6">
                    <Image
                        src="/self-img.jpg"
                        alt="self image"
                        width={500}
                        height={500}
                        id="authorImg"
                    />
                </div>
            </div>
        </section>
    );
}