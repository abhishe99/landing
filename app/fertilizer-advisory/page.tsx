"use client"

import { useState } from "react"
import { ArrowLeft, Leaf, Calculator, Sprout, DollarSign, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface FertilizerRecommendation {
  name: string
  dosage: string
  cost: number
  timing: string
  ecoAlternative?: string
}

interface RecommendationData {
  crop: string
  soilType: string
  fertilizers: FertilizerRecommendation[]
  totalCost: number
  npkRatio: string
  applicationTips: string[]
}

const cropOptions = [
  { value: "wheat", label: "Wheat / गेहूं" },
  { value: "rice", label: "Rice / चावल" },
  { value: "corn", label: "Corn / मक्का" },
  { value: "cotton", label: "Cotton / कपास" },
  { value: "sugarcane", label: "Sugarcane / गन्ना" },
  { value: "potato", label: "Potato / आलू" },
  { value: "tomato", label: "Tomato / टमाटर" },
  { value: "onion", label: "Onion / प्याज" },
]

const soilTypeOptions = [
  { value: "clay", label: "Clay Soil / चिकनी मिट्टी" },
  { value: "sandy", label: "Sandy Soil / रेतीली मिट्टी" },
  { value: "loamy", label: "Loamy Soil / दोमट मिट्टी" },
  { value: "black", label: "Black Soil / काली मिट्टी" },
  { value: "red", label: "Red Soil / लाल मिट्टी" },
  { value: "alluvial", label: "Alluvial Soil / जलोढ़ मिट्टी" },
]

const mockRecommendations: Record<string, Record<string, RecommendationData>> = {
  wheat: {
    loamy: {
      crop: "Wheat",
      soilType: "Loamy Soil",
      fertilizers: [
        {
          name: "Urea",
          dosage: "50 kg/acre",
          cost: 1200,
          timing: "Sowing + 30 days",
          ecoAlternative: "Vermicompost 200 kg/acre",
        },
        { name: "DAP", dosage: "25 kg/acre", cost: 1500, timing: "At sowing", ecoAlternative: "Bone meal 15 kg/acre" },
        { name: "MOP", dosage: "15 kg/acre", cost: 800, timing: "At sowing", ecoAlternative: "Wood ash 20 kg/acre" },
      ],
      totalCost: 3500,
      npkRatio: "120:60:40",
      applicationTips: [
        "Apply DAP and MOP at sowing time",
        "Split urea application: 50% at sowing, 50% after 30 days",
        "Water immediately after fertilizer application",
      ],
    },
    clay: {
      crop: "Wheat",
      soilType: "Clay Soil",
      fertilizers: [
        {
          name: "Urea",
          dosage: "45 kg/acre",
          cost: 1080,
          timing: "Sowing + 25 days",
          ecoAlternative: "Vermicompost 180 kg/acre",
        },
        { name: "DAP", dosage: "30 kg/acre", cost: 1800, timing: "At sowing", ecoAlternative: "Bone meal 18 kg/acre" },
        { name: "MOP", dosage: "20 kg/acre", cost: 1000, timing: "At sowing", ecoAlternative: "Wood ash 25 kg/acre" },
      ],
      totalCost: 3880,
      npkRatio: "110:70:50",
      applicationTips: [
        "Deep plowing recommended for clay soil",
        "Apply fertilizers in furrows for better absorption",
        "Ensure proper drainage to prevent waterlogging",
      ],
    },
  },
  rice: {
    clay: {
      crop: "Rice",
      soilType: "Clay Soil",
      fertilizers: [
        {
          name: "Urea",
          dosage: "60 kg/acre",
          cost: 1440,
          timing: "3 splits: transplanting, tillering, panicle",
          ecoAlternative: "Vermicompost 250 kg/acre",
        },
        {
          name: "DAP",
          dosage: "35 kg/acre",
          cost: 2100,
          timing: "Before transplanting",
          ecoAlternative: "Bone meal 20 kg/acre",
        },
        {
          name: "MOP",
          dosage: "25 kg/acre",
          cost: 1250,
          timing: "Before transplanting",
          ecoAlternative: "Wood ash 30 kg/acre",
        },
      ],
      totalCost: 4790,
      npkRatio: "150:75:60",
      applicationTips: [
        "Maintain 2-3 cm water level during application",
        "Apply nitrogen in 3 equal splits",
        "Use zinc sulfate if deficiency symptoms appear",
      ],
    },
  },
}

export default function FertilizerAdvisoryPage() {
  const [selectedCrop, setSelectedCrop] = useState("")
  const [selectedSoilType, setSelectedSoilType] = useState("")
  const [farmSize, setFarmSize] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [recommendation, setRecommendation] = useState<RecommendationData | null>(null)

  const handleGetRecommendation = async () => {
    if (!selectedCrop || !selectedSoilType) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const cropData = mockRecommendations[selectedCrop]
      const soilData = cropData?.[selectedSoilType] || cropData?.loamy || Object.values(cropData)[0]
      setRecommendation(soilData || null)
      setIsLoading(false)
    }, 1500)
  }

  const calculateTotalForFarm = (costPerAcre: number) => {
    const acres = Number.parseFloat(farmSize) || 1
    return (costPerAcre * acres).toLocaleString("en-IN")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-800">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-green-600" />
                <h1 className="text-xl font-semibold text-gray-900">Fertilizer Advisory / उर्वरक सलाह</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Input Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-green-600" />
              <span>Get Fertilizer Recommendation / उर्वरक सिफारिश प्राप्त करें</span>
            </CardTitle>
            <CardDescription>
              Select your crop and soil type to get personalized fertilizer recommendations
              <br />
              अपनी फसल और मिट्टी का प्रकार चुनें
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="crop">Crop / फसल *</Label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop / फसल चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropOptions.map((crop) => (
                      <SelectItem key={crop.value} value={crop.value}>
                        {crop.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soil">Soil Type / मिट्टी का प्रकार *</Label>
                <Select value={selectedSoilType} onValueChange={setSelectedSoilType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type / मिट्टी चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    {soilTypeOptions.map((soil) => (
                      <SelectItem key={soil.value} value={soil.value}>
                        {soil.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size (acres) / खेत का आकार</Label>
                <Input
                  id="farmSize"
                  type="number"
                  placeholder="Enter acres / एकड़ दर्ज करें"
                  value={farmSize}
                  onChange={(e) => setFarmSize(e.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={handleGetRecommendation}
              disabled={!selectedCrop || !selectedSoilType || isLoading}
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Getting Recommendations...
                </>
              ) : (
                <>
                  <Leaf className="h-4 w-4 mr-2" />
                  Get Fertilizer Recommendation / सिफारिश प्राप्त करें
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {recommendation && (
          <div className="space-y-6">
            {/* NPK Ratio & Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Sprout className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-700">{recommendation.npkRatio}</div>
                    <p className="text-sm text-gray-600">NPK Ratio / एनपीके अनुपात</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-700">
                      ₹
                      {farmSize
                        ? calculateTotalForFarm(recommendation.totalCost)
                        : recommendation.totalCost.toLocaleString("en-IN")}
                    </div>
                    <p className="text-sm text-gray-600">Total Cost / कुल लागत {farmSize && `(${farmSize} acres)`}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Recycle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-emerald-700">Eco-Friendly</div>
                    <p className="text-sm text-gray-600">Alternatives Available / पर्यावरण विकल्प</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fertilizer Recommendations Table */}
            <Card>
              <CardHeader>
                <CardTitle>Fertilizer Dosage Recommendations / उर्वरक खुराक सिफारिशें</CardTitle>
                <CardDescription>
                  For {recommendation.crop} in {recommendation.soilType} / {recommendation.crop} के लिए{" "}
                  {recommendation.soilType} में
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-lg">Fertilizer / उर्वरक</TableHead>
                      <TableHead className="text-lg">Dosage / खुराक</TableHead>
                      <TableHead className="text-lg">Cost / लागत</TableHead>
                      <TableHead className="text-lg">Timing / समय</TableHead>
                      <TableHead className="text-lg">Eco Alternative / पर्यावरण विकल्प</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recommendation.fertilizers.map((fertilizer, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-semibold text-lg">{fertilizer.name}</TableCell>
                        <TableCell className="text-lg font-bold text-green-700">{fertilizer.dosage}</TableCell>
                        <TableCell className="text-lg font-semibold">
                          ₹{farmSize ? calculateTotalForFarm(fertilizer.cost) : fertilizer.cost.toLocaleString("en-IN")}
                        </TableCell>
                        <TableCell className="text-base">{fertilizer.timing}</TableCell>
                        <TableCell className="text-base text-emerald-600">
                          {fertilizer.ecoAlternative || "N/A"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Application Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Application Tips / उपयोग की सलाह</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendation.applicationTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
