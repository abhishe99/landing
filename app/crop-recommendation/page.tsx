"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Sprout, Droplets, Clock, TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface CropRecommendation {
  name: string
  nameHindi: string
  estimatedProfit: number
  waterUsage: string
  harvestTime: string
  yield: number
  cost: number
  icon: string
}

const mockRecommendations: CropRecommendation[] = [
  {
    name: "Wheat",
    nameHindi: "गेहूं",
    estimatedProfit: 45000,
    waterUsage: "Medium (400-500mm)",
    harvestTime: "4-5 months",
    yield: 40,
    cost: 25,
    icon: "🌾",
  },
  {
    name: "Rice",
    nameHindi: "चावल",
    estimatedProfit: 38000,
    waterUsage: "High (600-800mm)",
    harvestTime: "3-4 months",
    yield: 35,
    cost: 22,
    icon: "🌾",
  },
  {
    name: "Sugarcane",
    nameHindi: "गन्ना",
    estimatedProfit: 65000,
    waterUsage: "Very High (1000-1200mm)",
    harvestTime: "10-12 months",
    yield: 60,
    cost: 35,
    icon: "🎋",
  },
]

export default function CropRecommendationPage() {
  const [formData, setFormData] = useState({
    soilType: "",
    waterAvailability: "",
    pastCrop: "",
  })
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.soilType || !formData.waterAvailability) return

    setIsLoading(true)

    // Mock API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setRecommendations(mockRecommendations)
    setShowResults(true)
    setIsLoading(false)
  }

  const chartData = recommendations.map((crop) => ({
    name: crop.name,
    yield: crop.yield,
    cost: crop.cost,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center text-green-700 hover:text-green-800">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-bold text-green-800">Crop Recommendation</h1>
              <span className="text-lg">🌱</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Sprout className="h-6 w-6 mr-2" />
                Crop Selection Form
                <span className="ml-2 text-sm font-normal text-gray-600">फसल चयन फॉर्म</span>
              </CardTitle>
              <CardDescription>Fill in your farm details to get personalized crop recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Soil Type */}
                <div className="space-y-2">
                  <Label htmlFor="soilType" className="text-base font-medium">
                    Soil Type <span className="text-gray-500">मिट्टी का प्रकार</span>
                  </Label>
                  <Select
                    value={formData.soilType}
                    onValueChange={(value) => setFormData({ ...formData, soilType: value })}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">Clay Soil (चिकनी मिट्टी)</SelectItem>
                      <SelectItem value="sandy">Sandy Soil (रेतीली मिट्टी)</SelectItem>
                      <SelectItem value="loamy">Loamy Soil (दोमट मिट्टी)</SelectItem>
                      <SelectItem value="black">Black Soil (काली मिट्टी)</SelectItem>
                      <SelectItem value="red">Red Soil (लाल मिट्टी)</SelectItem>
                      <SelectItem value="alluvial">Alluvial Soil (जलोढ़ मिट्टी)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Water Availability */}
                <div className="space-y-2">
                  <Label htmlFor="waterAvailability" className="text-base font-medium">
                    Water Availability <span className="text-gray-500">पानी की उपलब्धता</span>
                  </Label>
                  <Select
                    value={formData.waterAvailability}
                    onValueChange={(value) => setFormData({ ...formData, waterAvailability: value })}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select water availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High - Irrigation Available (उच्च - सिंचाई उपलब्ध)</SelectItem>
                      <SelectItem value="medium">Medium - Limited Irrigation (मध्यम - सीमित सिंचाई)</SelectItem>
                      <SelectItem value="low">Low - Rain Dependent (कम - बारिश पर निर्भर)</SelectItem>
                      <SelectItem value="dryland">Dryland Farming (सूखी खेती)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Past Crop History */}
                <div className="space-y-2">
                  <Label htmlFor="pastCrop" className="text-base font-medium">
                    Previous Crop (Optional) <span className="text-gray-500">पिछली फसल (वैकल्पिक)</span>
                  </Label>
                  <Input
                    id="pastCrop"
                    value={formData.pastCrop}
                    onChange={(e) => setFormData({ ...formData, pastCrop: e.target.value })}
                    placeholder="e.g., Wheat, Rice, Cotton"
                    className="h-12 text-base"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold bg-green-600 hover:bg-green-700"
                  disabled={!formData.soilType || !formData.waterAvailability || isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Analyzing...
                    </div>
                  ) : (
                    <>
                      <Sprout className="h-5 w-5 mr-2" />
                      Get Recommendations
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results Section */}
          {showResults && (
            <div className="space-y-6">
              {/* Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Yield vs Cost Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="yield" fill="#16a34a" name="Yield (quintals/acre)" />
                      <Bar dataKey="cost" fill="#f59e0b" name="Cost (₹000/acre)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-green-800">Top 3 Recommended Crops</h2>
                {recommendations.map((crop, index) => (
                  <Card key={crop.name} className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{crop.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold text-green-800">
                              #{index + 1} {crop.name} ({crop.nameHindi})
                            </h3>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">
                            ₹{crop.estimatedProfit.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Estimated Profit/Acre</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="flex items-center space-x-2">
                          <Droplets className="h-5 w-5 text-blue-500" />
                          <div>
                            <div className="font-medium">Water Usage</div>
                            <div className="text-sm text-gray-600">{crop.waterUsage}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <div>
                            <div className="font-medium">Harvest Time</div>
                            <div className="text-sm text-gray-600">{crop.harvestTime}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="font-medium">Expected Yield</div>
                            <div className="text-sm text-gray-600">{crop.yield} quintals/acre</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
