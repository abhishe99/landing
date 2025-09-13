"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Leaf, Phone, MessageSquare, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp" | "details">("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [language, setLanguage] = useState("hi")
  const [soilType, setSoilType] = useState("")
  const [district, setDistrict] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSendOTP = async () => {
    setIsLoading(true)
    setError("")
    try {
      // Mock OTP sending with delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("[v0] Sending OTP to:", phoneNumber)
      setStep("otp")
    } catch (err) {
      setError("Failed to send OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    setIsLoading(true)
    setError("")
    try {
      // Mock OTP verification with delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("[v0] Verifying OTP:", otp)
      setStep("details")
    } catch (err) {
      setError("Invalid OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleComplete = async () => {
    setIsLoading(true)
    try {
      // Mock registration completion
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("[v0] Registration complete:", { phoneNumber, language, soilType, district })
      // Redirect to dashboard or home
      window.location.href = "/"
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    if (step === "otp") setStep("phone")
    if (step === "details") setStep("otp")
  }

  const getText = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      title: {
        hi: "डिजिटल किसान मित्र",
        en: "Digital Kisan Mitra",
        te: "డిజిటల్ కిసాన్ మిత్ర",
        ta: "டிஜிட்டல் கிசான் மித்ர",
      },
      subtitle: {
        hi: "खेती को आसान बनाएं",
        en: "Making farming simple",
        te: "వ్యవసాయాన్ని సులభతరం చేయడం",
        ta: "விவசాயத்தை எளிதாக்குதல்",
      },
      phoneLabel: {
        hi: "मोबाइल नंबर",
        en: "Mobile Number",
        te: "మొబైల్ నంబర్",
        ta: "மொபைல் எண்",
      },
      otpLabel: {
        hi: "OTP दर्ज करें",
        en: "Enter OTP",
        te: "OTP ని నమోదు చేయండి",
        ta: "OTP ஐ உள்ளிடவும்",
      },
      sendOtp: {
        hi: "OTP भेजें",
        en: "Send OTP",
        te: "OTP పంపండి",
        ta: "OTP அனுப்பவும்",
      },
      verifyOtp: {
        hi: "OTP सत्यापित करें",
        en: "Verify OTP",
        te: "OTP ని ధృవీకరించండి",
        ta: "OTP ஐ சரிபார்க்கவும்",
      },
      language: {
        hi: "भाषा चुनें",
        en: "Select Language",
        te: "భాషను ఎంచుకోండి",
        ta: "மொழியைத் தேர்ந்தெடுக்கவும்",
      },
      soilType: {
        hi: "मिट्टी का प्रकार (वैकल्पिक)",
        en: "Soil Type (Optional)",
        te: "మట్టి రకం (ఐచ్ఛికం)",
        ta: "மண் வகை (விருப்பம்)",
      },
      district: {
        hi: "जिला (वैकल्पिक)",
        en: "District (Optional)",
        te: "జిల్లా (ఐచ్ఛికం)",
        ta: "மாவட்டம் (விருப்பம்)",
      },
      complete: {
        hi: "पूरा करें",
        en: "Complete",
        te: "పూర్తి చేయండి",
        ta: "முடிக்கவும்",
      },
      back: {
        hi: "वापस",
        en: "Back",
        te: "వెనుకకు",
        ta: "பின்னால்",
      },
      resendOtp: {
        hi: "OTP दोबारा भेजें",
        en: "Resend OTP",
        te: "OTP ను మళ్లీ పంపండి",
        ta: "OTP ஐ மீண்டும் அனுப்பவும்",
      },
    }
    return texts[key]?.[language] || texts[key]?.["en"] || key
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-2 border-primary/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-between">
            {step !== "phone" ? (
              <Button variant="ghost" size="sm" onClick={handleBack} className="p-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            ) : (
              <Link href="/">
                <Button variant="ghost" size="sm" className="p-2">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
            )}
            <div className="flex-1" />
          </div>

          <div className="flex justify-center">
            <div className="bg-primary/10 p-4 rounded-full">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-primary">{getText("title")}</CardTitle>
            <CardDescription className="text-lg mt-2">{getText("subtitle")}</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Language Selector - Always visible */}
          <div className="space-y-2">
            <Label htmlFor="language" className="text-base font-medium">
              {getText("language")}
            </Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="h-12 text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
          )}

          {/* Phone Number Step */}
          {step === "phone" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium">
                  {getText("phoneLabel")}
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-12 pl-10 text-base"
                  />
                </div>
              </div>
              <Button
                onClick={handleSendOTP}
                className="w-full h-12 text-base font-semibold"
                disabled={phoneNumber.length < 10 || isLoading}
              >
                {isLoading ? "भेजा जा रहा है..." : getText("sendOtp")}
              </Button>
            </div>
          )}

          {/* OTP Verification Step */}
          {step === "otp" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-base font-medium">
                  {getText("otpLabel")}
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="otp"
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="h-12 pl-10 text-base text-center tracking-widest"
                    maxLength={6}
                  />
                </div>
              </div>
              <div className="text-sm text-muted-foreground text-center">OTP sent to {phoneNumber}</div>
              <Button
                onClick={handleVerifyOTP}
                className="w-full h-12 text-base font-semibold"
                disabled={otp.length !== 6 || isLoading}
              >
                {isLoading ? "सत्यापित हो रहा है..." : getText("verifyOtp")}
              </Button>
              <Button
                variant="outline"
                onClick={handleSendOTP}
                className="w-full h-10 text-sm bg-transparent"
                disabled={isLoading}
              >
                {getText("resendOtp")}
              </Button>
            </div>
          )}

          {/* Additional Details Step */}
          {step === "details" && (
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Phone verified successfully!</span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soil" className="text-base font-medium">
                  {getText("soilType")}
                </Label>
                <Select value={soilType} onValueChange={setSoilType}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay / चिकनी मिट्टी</SelectItem>
                    <SelectItem value="sandy">Sandy / रेतीली मिट्टी</SelectItem>
                    <SelectItem value="loamy">Loamy / दोमट मिट्टी</SelectItem>
                    <SelectItem value="black">Black / काली मिट्टी</SelectItem>
                    <SelectItem value="red">Red / लाल मिट्टी</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="district" className="text-base font-medium">
                  {getText("district")}
                </Label>
                <Input
                  id="district"
                  type="text"
                  placeholder="Enter your district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="h-12 text-base"
                />
              </div>

              <Button onClick={handleComplete} className="w-full h-12 text-base font-semibold" disabled={isLoading}>
                {isLoading ? "पूरा हो रहा है..." : getText("complete")}
              </Button>
            </div>
          )}

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 pt-4">
            <div
              className={`h-2 w-8 rounded-full transition-colors ${step === "phone" ? "bg-primary" : "bg-primary/30"}`}
            />
            <div
              className={`h-2 w-8 rounded-full transition-colors ${step === "otp" ? "bg-primary" : "bg-primary/30"}`}
            />
            <div
              className={`h-2 w-8 rounded-full transition-colors ${step === "details" ? "bg-primary" : "bg-primary/30"}`}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
