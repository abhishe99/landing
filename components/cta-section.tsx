import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Users, Award } from "lucide-react"

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Join thousands of <span className="text-primary">successful farmers</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              हजारों सफल किसानों के साथ जुड़ें और अपनी आय बढ़ाएं। आज ही शुरू करें अपना डिजिटल खेती का सफर।
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-[rgb(158,201,93)]/20 rounded-full flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Easy to use mobile app</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-[rgb(158,201,93)]/20 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Expert agricultural guidance</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-[rgb(158,201,93)]/20 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Proven results and success stories</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 gap-3">
              Download App Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
