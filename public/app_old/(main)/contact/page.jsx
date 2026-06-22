export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-gray-50 text-gray-900">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions about the project or lab assignment? Get in touch with us using the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 text-sm">Email</h3>
            <p className="text-gray-600 text-sm mt-1">support@nextstore.demo</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 text-sm">Phone</h3>
            <p className="text-gray-600 text-sm mt-1">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 text-sm">Location</h3>
            <p className="text-gray-600 text-sm mt-1">University Lab, Hall B</p>
          </div>
        </div>

        {/* Simple Form */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-500 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-500 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-indigo-500 resize-none"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
