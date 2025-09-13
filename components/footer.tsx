import { Sprout, Phone, Mail, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-green-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-green-700" />
              </div>
              <span className="font-bold text-lg text-white">Digital Kisan Mitra</span>
            </div>
            <p className="text-sm text-green-100">
              आपका विश्वसनीय डिजिटल खेती सलाहकार। आधुनिक तकनीक के साथ पारंपरिक खेती को बेहतर बनाना।
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Government Schemes</h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li>
                <a
                  href="https://pmkisan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  PM-Kisan Yojana
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://soilhealth.dac.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Soil Health Card
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://enam.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  eNAM Portal
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmfby.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Crop Insurance
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Helpline Numbers</h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Kisan Call Centre: 1800-180-1551</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>PM-Kisan: 155261</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Soil Health: 1800-180-1551</span>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact Info</h3>
            <div className="space-y-3 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@digitalkisanmitra.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center text-sm text-green-100">
          <p>&copy; 2024 Digital Kisan Mitra. All rights reserved.</p>
          <p className="mt-2 font-semibold text-white">Made for Farmers – SIH 2025</p>
        </div>
      </div>
    </footer>
  )
}
