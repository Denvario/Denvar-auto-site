import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/public/images/dealership-photo.jpg"
            alt="Denvar Auto Hyundai Somerset West"
            className="rounded-2xl shadow-lg"
          />
          <p className="mt-4 text-gray-700 text-sm italic text-center">
            Visit our showroom in Somerset West – where service meets style.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Contact Denvar Auto</h2>
          <div className="text-lg text-gray-700">
            <p><strong>Address:</strong> Hyundai Somerset West</p>
            <p><strong>Phone:</strong> <a href="tel:+27635415450" className="text-blue-600 hover:underline">063 541 5450</a></p>
            <p><strong>Email:</strong> <a href="mailto:denvarf@hyundai.co.za" className="text-blue-600 hover:underline">denvarf@hyundai.co.za</a></p>
          </div>
          <div className="text-gray-700">
            <p><strong>Operating Hours:</strong></p>
            <ul className="list-disc ml-5">
              <li>Mon–Fri: 08:00 – 17:30</li>
              <li>Saturday: 08:30 – 13:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://waze.com/ul/hk3vqh9zdn"
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              rel="noopener noreferrer"
            >
              📍 Get Directions (Waze)
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hyundai+Somerset+West"
              target="_blank"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              rel="noopener noreferrer"
            >
              📍 Get Directions (Google Maps)
            </a>
          </div>
          <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm text-gray-600">
            ⭐ Love your new ride? <a href="https://www.google.com/maps/search/?api=1&query=Hyundai+Somerset+West" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leave us a review on Google</a>
          </div>
        </div>
      </div>
    </section>
  );
}