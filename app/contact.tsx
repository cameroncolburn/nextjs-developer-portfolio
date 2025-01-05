export default function Contact() {
    return (
        <section className="contact-section pt-12 pb-12 font-[family-name:var(--font-karla-sans)]">
            <div className="flex justify-between items-center mx-auto max-w-7xl">
                <div className="headerTitle">
                    <h2 className="text-2xl font-bold">Contact Me</h2>
                    <p className="font-semibold">Do you have an opportunity you want to discuss, or perhaps just want to chat? Drop me a line.</p>
                </div>

                <div>
                    <div className="rounded-lg p-6">
                        <div className="space-y-4">
                            <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                            />
                            <input
                            type="email"
                            placeholder="E-mail"
                            className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                            />
                            <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
                            ></textarea>
                            <button
                            type="button"
                            className="w-full text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                            Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}