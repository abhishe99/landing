import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bell, CheckCircle2, Info, Droplets, Bug, Sprout, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

interface Notification {
  id: string
  type: "weather" | "pest" | "crop" | "market" | "general"
  priority: "high" | "medium" | "low"
  title: string
  titleHindi: string
  message: string
  messageHindi: string
  timestamp: string
  icon: string
  read: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "weather",
    priority: "high",
    title: "Rain Alert",
    titleHindi: "बारिश की चेतावनी",
    message: "🌦️ Heavy rain expected tomorrow, delay irrigation for 2-3 days",
    messageHindi: "🌦️ कल भारी बारिश की संभावना, सिंचाई 2-3 दिन के लिए स्थगित करें",
    timestamp: "2 hours ago",
    icon: "🌦️",
    read: false,
  },
  {
    id: "2",
    type: "pest",
    priority: "high",
    title: "Pest Alert",
    titleHindi: "कीट चेतावनी",
    message: "🐛 Aphid infestation detected in wheat crops. Spray Imidacloprid immediately",
    messageHindi: "🐛 गेहूं की फसल में माहू का प्रकोप। तुरंत इमिडाक्लोप्रिड का छिड़काव करें",
    timestamp: "4 hours ago",
    icon: "🐛",
    read: false,
  },
  {
    id: "3",
    type: "market",
    priority: "medium",
    title: "Market Update",
    titleHindi: "बाजार अपडेट",
    message: "📈 Wheat prices increased to ₹2,150/quintal in Delhi mandi",
    messageHindi: "📈 दिल्ली मंडी में गेहूं का भाव बढ़कर ₹2,150/क्विंटल हो गया",
    timestamp: "6 hours ago",
    icon: "📈",
    read: true,
  },
  {
    id: "4",
    type: "crop",
    priority: "medium",
    title: "Fertilizer Reminder",
    titleHindi: "उर्वरक अनुस्मारक",
    message: "🌱 Time for second dose of DAP fertilizer for your cotton crop",
    messageHindi: "🌱 आपकी कपास की फसल के लिए DAP उर्वरक की दूसरी खुराक का समय",
    timestamp: "1 day ago",
    icon: "🌱",
    read: true,
  },
  {
    id: "5",
    type: "weather",
    priority: "low",
    title: "Weather Update",
    titleHindi: "मौसम अपडेट",
    message: "☀️ Clear sunny weather for next 3 days, ideal for harvesting",
    messageHindi: "☀️ अगले 3 दिन साफ धूप, कटाई के लिए आदर्श मौसम",
    timestamp: "1 day ago",
    icon: "☀️",
    read: true,
  },
  {
    id: "6",
    type: "general",
    priority: "low",
    title: "Government Scheme",
    titleHindi: "सरकारी योजना",
    message: "🏛️ New PM-KISAN installment of ₹2,000 credited to your account",
    messageHindi: "🏛️ आपके खाते में ₹2,000 की नई PM-KISAN किस्त जमा की गई",
    timestamp: "2 days ago",
    icon: "🏛️",
    read: true,
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "weather":
      return <Droplets className="h-5 w-5" />
    case "pest":
      return <Bug className="h-5 w-5" />
    case "crop":
      return <Sprout className="h-5 w-5" />
    case "market":
      return <TrendingUp className="h-5 w-5" />
    default:
      return <Info className="h-5 w-5" />
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 border-red-200 text-red-800"
    case "medium":
      return "bg-yellow-100 border-yellow-200 text-yellow-800"
    case "low":
      return "bg-green-100 border-green-200 text-green-800"
    default:
      return "bg-gray-100 border-gray-200 text-gray-800"
  }
}

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "secondary"
    case "low":
      return "outline"
    default:
      return "outline"
  }
}

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white border-b border-green-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon" className="text-green-700 hover:bg-green-100">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bell className="h-6 w-6 text-green-700" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500">
                      {unreadCount}
                    </Badge>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-green-800">Notifications</h1>
                  <p className="text-sm text-green-600">सूचनाएं</p>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-green-700 border-green-200 hover:bg-green-50 bg-transparent"
            >
              Mark All Read
            </Button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`transition-all duration-200 hover:shadow-md ${
                !notification.read ? "bg-white border-l-4 border-l-green-500 shadow-sm" : "bg-gray-50 border-gray-200"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {/* Icon and Type Indicator */}
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-full ${getPriorityColor(notification.priority)}`}>
                      {getTypeIcon(notification.type)}
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-semibold ${!notification.read ? "text-gray-900" : "text-gray-600"}`}>
                          {notification.title}
                        </h3>
                        <Badge variant={getPriorityBadge(notification.priority)} className="text-xs">
                          {notification.priority.toUpperCase()}
                        </Badge>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mb-2">{notification.titleHindi}</p>

                    {/* Message with emoji */}
                    <div className={`text-base mb-3 ${!notification.read ? "text-gray-800" : "text-gray-600"}`}>
                      <p className="mb-1">{notification.message}</p>
                      <p className="text-sm text-gray-500">{notification.messageHindi}</p>
                    </div>

                    {/* Timestamp */}
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="h-3 w-3" />
                      <span>{notification.timestamp}</span>
                      {notification.read && (
                        <div className="flex items-center gap-1 ml-2">
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                          <span className="text-green-600">Read</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No notifications yet</h3>
            <p className="text-gray-500">अभी तक कोई सूचना नहीं</p>
          </div>
        )}

        {/* Load More Button */}
        {notifications.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="text-green-700 border-green-200 hover:bg-green-50 bg-transparent">
              Load More Notifications
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
