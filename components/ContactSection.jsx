import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/images/dealership-photo.jpg"
            alt="Denvar Auto Hyundai Somerset West"
            className="rounded-2xl shadow-lg"
          />
          <p className="mt-4 text-gray-600 text-sm">
            Visit us at Hyundai Somerset West — your trusted local dealership.
          </p>
        </div>
        <div className="space-y-4 text-gray-800">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p><strong>Address:</strong> 10 Victoria St, Somerset West</p>
          <p><strong>Hours:</strong> Mon–Fri 08:00–17:00</p>
          <p><strong>Phone:</strong> 063 541 5450</p>
          <div className="flex gap-4 mt-2">
            <a href="https://waze.com/ul/hk3vqh9zdn" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow">Drive with Waze</a>
            <a href="https://maps.google.com?q=Hyundai+Somerset+West" target="_blank" className="px-4 py-2 bg-green-600 text-white rounded-xl shadow">Open in Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  );
}
