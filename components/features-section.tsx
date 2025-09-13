import { Card, CardContent } from "@/components/ui/card"
import { Wheat, Bug, CloudRain, Beaker, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Wheat,
    title: "Crop Recommendation",
    description: "फसल सुझाव",
    detail: "Get personalized crop suggestions based on your soil and climate",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description: "कीट नियंत्रण",
    detail: "Early detection and treatment recommendations for crop diseases",
  },
  {
    icon: CloudRain,
    title: "Weather",
    description: "मौसम पूर्वानुमान",
    detail: "Accurate weather forecasts and farming alerts",
  },
  {
    icon: Beaker,
    title: "Fertilizer",
    description: "उर्वरक सलाह",
    detail: "Optimal fertilizer recommendations for better yield",
  },
  {
    icon: TrendingUp,
    title: "Mandi Prices",
    description: "मंडी भाव",
    detail: "Real-time market prices and selling opportunities",
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Everything you need for <span className="text-primary">smart farming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            आपकी खेती के लिए जरूरी सभी सुविधाएं एक ही ऐप में
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-[rgb(158,201,93)]/20 rounded-2xl flex items-center justify-center group-hover:bg-[rgb(158,201,93)]/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-foreground font-medium mb-2">{feature.description}</p>
                  <p className="text-sm text-muted-foreground text-pretty">{feature.detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
