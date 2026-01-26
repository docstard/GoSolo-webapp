import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          About GO SOLO
        </h1>

        <Image
          alt="About GO SOLO"
          src="/about-us-hero.jpg"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mt-6 mb-8 object-cover"
        />

        <p className="mt-6 text-base sm:text-lg text-gray-300">
          Go Solo is a natural, herbal and ayurvedic supplement making company for your best fitness, physical & mental fitness
          and for your well being with our premium quality products.
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-400">
          At Go Solo, We are committed to every single who wants to be a better themselves with our nature derived products that are effective in nurturing growth and energizing body.
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-400">
          Go Solo aims to provide ultimate health solution to our customers with our innovative approaches to uplift their well being.
        </p>

        {/* Mission Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="material-icons-round text-white text-3xl mb-4 block">science</span>
              <h3 className="font-bold text-lg mb-2">Science-Backed</h3>
              <p className="text-gray-400 text-sm">Every ingredient is carefully selected based on clinical research and proven efficacy.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="material-icons-round text-white text-3xl mb-4 block">eco</span>
              <h3 className="font-bold text-lg mb-2">Clean Formula</h3>
              <p className="text-gray-400 text-sm">No artificial colors, no sugar crashes, no jitters. Just clean, sustained energy.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="material-icons-round text-white text-3xl mb-4 block">bolt</span>
              <h3 className="font-bold text-lg mb-2">Peak Performance</h3>
              <p className="text-gray-400 text-sm">Designed for those who demand more from themselves and refuse to settle.</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose Us</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="material-icons-round text-white mt-1">check_circle</span>
              <div>
                <h4 className="font-semibold">Made in India</h4>
                <p className="text-gray-400 text-sm">Proudly manufactured in state-of-the-art facilities with strict quality control.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-icons-round text-white mt-1">check_circle</span>
              <div>
                <h4 className="font-semibold">Transparent Labeling</h4>
                <p className="text-gray-400 text-sm">What you see is what you get. No proprietary blends, no hidden ingredients.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-icons-round text-white mt-1">check_circle</span>
              <div>
                <h4 className="font-semibold">Customer First</h4>
                <p className="text-gray-400 text-sm">30-day money-back guarantee. If you&apos;re not satisfied, we&apos;ll make it right.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}