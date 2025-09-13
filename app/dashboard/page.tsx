"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Cloud,
  CloudRain,
  Droplets,
  Thermometer,
  Wheat,
  Bug,
  Beaker,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Calendar,
  Globe,
} from "lucide-react"

export default function FarmerDashboard() {
  const [farmerName, setFarmerName] = useState("राम कुमार")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedLanguage, setSelectedLanguage] = useState("hi")

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  // Mock data - in real app this would come from APIs
  const weatherData = {
    temperature: 28,
    rainfall: 12,
    humidity: 65,
    condition: "partly-cloudy",
  }

  const cropAdvisory = {
    recommendedCrop: "धान (Rice)",
    yieldEstimate: "45-50 क्विंटल/एकड़",
    sowingTime: "जून-जुलाई",
    confidence: 92,
  }

  const pestAlert = {
    level: "medium",
    pest: "तना छेदक (Stem Borer)",
    severity: "मध्यम",
    action: "तुरंत छिड़काव करें",
  }

  const fertilizerAdvisory = {
    npk: "NPK 12:32:16",
    dosage: "50 किग्रा/एकड़",
    timing: "बुआई के 15 दिन बाद",
    cost: "₹1,200/बैग",
  }

  const mandiPrices = [
    { crop: "धान", price: "₹2,100", change: "+5%", trend: "up" },
    { crop: "गेहूं", price: "₹2,350", change: "+2%", trend: "up" },
    { crop: "मक्का", price: "₹1,850", change: "-3%", trend: "down" },
    { crop: "सोयाबीन", price: "₹4,200", change: "+8%", trend: "up" },
    { crop: "कपास", price: "₹6,800", change: "0%", trend: "stable" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Wheat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Digital Kisan Mitra</h1>
                <p className="text-sm text-gray-600">डैशबोर्ड</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-600" />
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-24 h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hi">हिंदी</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="pa">ਪੰਜਾਬੀ</SelectItem>
                    <SelectItem value="mr">मराठी</SelectItem>
                    <SelectItem value="te">తెలుగు</SelectItem>
                    <SelectItem value="ta">தமிழ்</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{currentTime.toLocaleDateString("hi-IN")}</p>
                <p className="text-xs text-gray-500">
                  {currentTime.toLocaleTimeString("hi-IN", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              <Button variant="outline" size="sm">
                प्रोफाइल
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">नमस्ते, {farmerName} 🌱</h2>
          <p className="text-lg text-gray-600">आज आपकी खेती की जानकारी</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Weather Widget */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Cloud className="w-5 h-5 text-blue-600" />
                <span>मौसम की जानकारी</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-gray-600">तापमान</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{weatherData.temperature}°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CloudRain className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600">बारिश</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">{weatherData.rainfall}mm</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-5 h-5 text-cyan-500" />
                    <span className="text-sm text-gray-600">नमी</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">{weatherData.humidity}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crop Advisory */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Wheat className="w-5 h-5 text-green-600" />
                <span>फसल सलाह</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">सुझावित फसल</p>
                  <p className="text-xl font-bold text-green-700">{cropAdvisory.recommendedCrop}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">अनुमानित उत्पादन</p>
                  <p className="text-lg font-semibold text-gray-900">{cropAdvisory.yieldEstimate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">बुआई का समय</p>
                  <p className="text-md text-gray-800">{cropAdvisory.sowingTime}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">{cropAdvisory.confidence}% विश्वसनीयता</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pest Alert */}
          <Card
            className={`lg:col-span-1 ${pestAlert.level === "high" ? "border-red-200 bg-red-50" : "border-yellow-200 bg-yellow-50"}`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Bug className={`w-5 h-5 ${pestAlert.level === "high" ? "text-red-600" : "text-yellow-600"}`} />
                <span>कीट चेतावनी</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <AlertTriangle
                    className={`w-5 h-5 ${pestAlert.level === "high" ? "text-red-500" : "text-yellow-500"}`}
                  />
                  <Badge variant={pestAlert.level === "high" ? "destructive" : "secondary"}>
                    {pestAlert.severity} खतरा
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">कीट का नाम</p>
                  <p className="text-lg font-semibold text-gray-900">{pestAlert.pest}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">सुझावित कार्रवाई</p>
                  <p className="text-md font-medium text-gray-800">{pestAlert.action}</p>
                </div>
                <Button size="sm" className="w-full">
                  विस्तृत जानकारी
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Fertilizer Advisory */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Beaker className="w-5 h-5 text-purple-600" />
                <span>खाद सलाह</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">सुझावित खाद</p>
                  <p className="text-xl font-bold text-purple-700">{fertilizerAdvisory.npk}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">मात्रा प्रति एकड़</p>
                  <p className="text-lg font-semibold text-gray-900">{fertilizerAdvisory.dosage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">डालने का समय</p>
                  <p className="text-md text-gray-800">{fertilizerAdvisory.timing}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">अनुमानित लागत</p>
                  <p className="text-lg font-semibold text-green-600">{fertilizerAdvisory.cost}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mandi Prices */}
          <Card className="lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>मंडी भाव</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-sm font-semibold text-gray-700">फसल</th>
                      <th className="text-right py-2 text-sm font-semibold text-gray-700">भाव (प्रति क्विंटल)</th>
                      <th className="text-right py-2 text-sm font-semibold text-gray-700">बदलाव</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mandiPrices.map((item, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="py-3 text-gray-900 font-medium">{item.crop}</td>
                        <td className="py-3 text-right text-lg font-bold text-gray-900">{item.price}</td>
                        <td className="py-3 text-right">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              item.trend === "up"
                                ? "bg-green-100 text-green-800"
                                : item.trend === "down"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {item.change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-gray-500 flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>अंतिम अपडेट: आज सुबह 9:00 बजे</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">त्वरित कार्य</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
              <Wheat className="w-6 h-6" />
              <span className="text-sm">फसल रिपोर्ट</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
              <Bug className="w-6 h-6" />
              <span className="text-sm">कीट शिकायत</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
              <MapPin className="w-6 h-6" />
              <span className="text-sm">नजदीकी मंडी</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm">बाजार रुझान</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
