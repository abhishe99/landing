"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Bug, AlertTriangle, Shield, SprayCan as Spray, Clock, Camera, Leaf, ArrowLeft, Globe } from "lucide-react"
import Link from "next/link"

const crops = [
  { value: "wheat", label: "गेहूं / Wheat" },
  { value: "rice", label: "चावल / Rice" },
  { value: "cotton", label: "कपास / Cotton" },
  { value: "sugarcane", label: "गन्ना / Sugarcane" },
  { value: "tomato", label: "टमाटर / Tomato" },
  { value: "potato", label: "आलू / Potato" },
]

const pestData = {
  wheat: [
    {
      name: "Aphids",
      hindiName: "माहू",
      riskLevel: "high",
      description: "Small green insects sucking plant juices",
      symptoms: "Yellowing leaves, sticky honeydew",
      preventiveMeasures: [
        { step: "नियमित निरीक्षण / Regular inspection", icon: "👁️" },
        { step: "नीम का तेल छिड़काव / Neem oil spray", icon: "🌿" },
        { step: "लेडीबर्ड बीटल छोड़ें / Release ladybird beetles", icon: "🐞" },
        { step: "पानी की मात्रा नियंत्रित करें / Control water amount", icon: "💧" },
      ],
    },
    {
      name: "Rust Disease",
      hindiName: "रतुआ रोग",
      riskLevel: "medium",
      description: "Fungal disease causing orange-brown spots",
      symptoms: "Orange pustules on leaves",
      preventiveMeasures: [
        { step: "प्रतिरोधी किस्म उगाएं / Grow resistant varieties", icon: "🌾" },
        { step: "फंगीसाइड छिड़काव / Fungicide spray", icon: "💊" },
        { step: "खेत की सफाई / Field sanitation", icon: "🧹" },
        { step: "उचित दूरी रखें / Maintain proper spacing", icon: "📏" },
      ],
    },
  ],
  rice: [
    {
      name: "Brown Plant Hopper",
      hindiName: "भूरा फुदका",
      riskLevel: "high",
      description: "Small brown insects causing hopper burn",
      symptoms: "Yellowing and drying of plants",
      preventiveMeasures: [
        { step: "पानी का स्तर नियंत्रित करें / Control water level", icon: "🌊" },
        { step: "नत्रजन कम करें / Reduce nitrogen", icon: "🧪" },
        { step: "प्राकृतिक शत्रु छोड़ें / Release natural enemies", icon: "🕷️" },
        { step: "प्रकाश जाल लगाएं / Use light traps", icon: "💡" },
      ],
    },
    {
      name: "Blast Disease",
      hindiName: "ब्लास्ट रोग",
      riskLevel: "medium",
      description: "Fungal disease affecting leaves and panicles",
      symptoms: "Diamond-shaped lesions on leaves",
      preventiveMeasures: [
        { step: "बीज उपचार करें / Treat seeds", icon: "🌱" },
        { step: "संतुलित उर्वरक / Balanced fertilizer", icon: "⚖️" },
        { step: "खेत में पानी न भरें / Avoid water stagnation", icon: "🚫" },
        { step: "रोगी पौधे हटाएं / Remove infected plants", icon: "✂️" },
      ],
    },
  ],
  cotton: [
    {
      name: "Bollworm",
      hindiName: "गुलाबी सुंडी",
      riskLevel: "high",
      description: "Caterpillars damaging cotton bolls",
      symptoms: "Holes in bolls, pink larvae inside",
      preventiveMeasures: [
        { step: "फेरोमोन ट्रैप लगाएं / Install pheromone traps", icon: "🪤" },
        { step: "बीटी कॉटन उगाएं / Grow Bt cotton", icon: "🧬" },
        { step: "नियमित निरीक्षण / Regular monitoring", icon: "🔍" },
        { step: "जैविक कीटनाशक / Bio-pesticides", icon: "🌿" },
      ],
    },
  ],
}

const getRiskColor = (level: string) => {
  switch (level) {
    case "high":
      return "bg-red-100 text-red-800 border-red-200"
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "low":
      return "bg-green-100 text-green-800 border-green-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getRiskIcon = (level: string) => {
  switch (level) {
    case "high":
      return <AlertTriangle className="h-4 w-4 text-red-600" />
    case "medium":
      return <AlertTriangle className="h-4 w-4 text-yellow-600" />
    case "low":
      return <Shield className="h-4 w-4 text-green-600" />
    default:
      return <Bug className="h-4 w-4" />
  }
}

export default function PestDiseasePage() {
  const [selectedCrop, setSelectedCrop] = useState<string>("")
  const [selectedLanguage, setSelectedLanguage] = useState("hi")

  const currentPests = selectedCrop ? pestData[selectedCrop as keyof typeof pestData] || [] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center text-green-700 hover:text-green-800">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">डैशबोर्ड / Dashboard</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-32">
                  <Globe className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hi">हिंदी</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="pa">ਪੰਜਾਬੀ</SelectItem>
                  <SelectItem value="mr">मराठी</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">कीट और रोग प्रबंधन / Pest & Disease Management</h1>
          <p className="text-gray-600">
            अपनी फसल का चयन करें और कीट-रोग की जानकारी प्राप्त करें / Select your crop and get pest-disease information
          </p>
        </div>

        {/* Crop Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="h-5 w-5 mr-2 text-green-600" />
              फसल चुनें / Select Crop
            </CardTitle>
            <CardDescription>
              अपनी फसल का चयन करके कीट-रोग की जानकारी देखें / Choose your crop to view pest and disease information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="फसल चुनें / Select Crop" />
                </SelectTrigger>
                <SelectContent>
                  {crops.map((crop) => (
                    <SelectItem key={crop.value} value={crop.value}>
                      {crop.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* AI Photo Detection Placeholder */}
              <Button variant="outline" className="h-12 bg-transparent" disabled>
                <Camera className="h-4 w-4 mr-2" />
                फोटो अपलोड करें / Upload Photo
                <Badge variant="secondary" className="ml-2">
                  जल्द आ रहा है / Coming Soon
                </Badge>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pest Alerts */}
        {selectedCrop && currentPests.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">कीट और रोग अलर्ट / Pest & Disease Alerts</h2>

            {currentPests.map((pest, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center mb-2">
                        <Bug className="h-5 w-5 mr-2 text-green-600" />
                        {pest.hindiName} / {pest.name}
                      </CardTitle>
                      <CardDescription className="text-base">{pest.description}</CardDescription>
                    </div>
                    <Badge className={`${getRiskColor(pest.riskLevel)} flex items-center`}>
                      {getRiskIcon(pest.riskLevel)}
                      <span className="ml-1 capitalize">{pest.riskLevel} Risk</span>
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Symptoms */}
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>लक्षण / Symptoms:</strong> {pest.symptoms}
                    </AlertDescription>
                  </Alert>

                  {/* Preventive Measures */}
                  <div>
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      बचाव के उपाय / Preventive Measures
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pest.preventiveMeasures.map((measure, measureIndex) => (
                        <Card key={measureIndex} className="bg-green-50 border-green-200">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">{measure.icon}</div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-green-800">
                                  चरण {measureIndex + 1} / Step {measureIndex + 1}
                                </p>
                                <p className="text-green-700">{measure.step}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Spray className="h-4 w-4 mr-2" />
                      उपचार गाइड / Treatment Guide
                    </Button>
                    <Button variant="outline">
                      <Clock className="h-4 w-4 mr-2" />
                      रिमाइंडर सेट करें / Set Reminder
                    </Button>
                    <Button variant="outline">
                      <Bug className="h-4 w-4 mr-2" />
                      रिपोर्ट करें / Report Pest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!selectedCrop && (
          <Card className="text-center py-12">
            <CardContent>
              <Bug className="h-16 w-16 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">फसल चुनें / Select a Crop</h3>
              <p className="text-gray-500">
                कीट और रोग की जानकारी देखने के लिए ऊपर से अपनी फसल चुनें
                <br />
                Select your crop from above to view pest and disease information
              </p>
            </CardContent>
          </Card>
        )}

        {/* No Data State */}
        {selectedCrop && currentPests.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Shield className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">कोई कीट-रोग नहीं मिला / No Pests Found</h3>
              <p className="text-gray-500">
                इस फसल के लिए वर्तमान में कोई कीट-रोग की जानकारी उपलब्ध नहीं है
                <br />
                No pest or disease information is currently available for this crop
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
