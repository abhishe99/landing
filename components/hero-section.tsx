import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-muted/30 to-background py-16 md:py-24 text-chart-1 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Data-driven farming, <span className="text-green-700">made simple</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                आधुनिक तकनीक के साथ अपनी खेती को बेहतर बनाएं। फसल की सलाह से लेकर मंडी के भाव तक, सब कुछ एक ही जगह।
              </p>
            </div>

            {/* CTA Button */}
            <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 gap-3">
              Get Advisory Now
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-green-700">50K+</div>
                <div className="text-sm text-muted-foreground">Active Farmers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-700">1M+</div>
                <div className="text-sm text-muted-foreground">Crop Advisories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-700">500+</div>
                <div className="text-sm text-muted-foreground">Districts Covered</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="/placeholder-1irlg.png"
                alt="Farmer using Digital Kisan Mitra app in the field"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium text-card-foreground">Weather Alert</div>
              <div className="text-xs text-muted-foreground">Rain expected tomorrow</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium text-card-foreground">Crop Health</div>
              <div className="text-xs text-green-700 font-medium">95% Healthy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
