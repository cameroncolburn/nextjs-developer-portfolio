export default function Contact() {
    return (
        <section>
            <div>
                <h2>Contact Me</h2>
                <p>Do you have an opportunity you want to discuss, or perhaps just want to chat? Drop me a line.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-50 rounded-lg p-6">
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
        </section>
        
    );
}