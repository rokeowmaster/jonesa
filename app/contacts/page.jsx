import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Contact Jonesa Furniture Store</h2>
        <p className="mt-2 text-lg text-gray-700">We’d love to hear from you! Get in touch with us.</p>
      </div>

      {/* Contact Details */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="flex items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md">
          <Phone className="w-8 h-8 text-orange-500" />
          <p className="text-gray-800 text-lg">+254 (703) 628-177</p>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md">
          <Mail className="w-8 h-8 text-orange-500" />
          <p className="text-gray-800 text-lg">info@jonesafurniture.com</p>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md">
          <MapPin className="w-8 h-8 text-orange-500" />
          <p className="text-gray-800 text-lg">Kisumu-Kakamega Road, Kenya</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;