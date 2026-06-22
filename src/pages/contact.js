export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-slate-50 text-slate-900">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Contact Us</h1>
                <p className="text-slate-600 max-w-xl mx-auto">
                    Have questions about the project or lab assignment? Get in touch using the form below.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 text-sm">Email</h3>
                    <p className="text-slate-600 text-sm mt-1">support@nextstore.demo</p>
                </div>
                <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 text-sm">Phone</h3>
                    <p className="text-slate-600 text-sm mt-1">+1 (555) 123-4567</p>
                </div>
                <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 text-sm">Location</h3>
                    <p className="text-slate-600 text-sm mt-1">University Lab, Hall B</p>
                </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Send a Message</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-semibold text-slate-500 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-slate-500 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-slate-500 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Write your message here..."
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 resize-none"
                        />
                    </div>
                    <button type="button" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/10 transition hover:bg-indigo-700">
                        Submit Message
                    </button>
                </form>
            </div>
        </div>
    );
}
