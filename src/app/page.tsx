import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SignInForm } from "./components/sign-in-form"
import { CreditCard, BarChart3, Lock, Zap, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="sticky top-0 z-50 border-b border-[#eceff1] bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-[#77c159]" />
            <span className="text-lg font-bold text-[#6f7476]">TallyUp</span>
          </div>
          <Button className="bg-[#77c159] text-white hover:bg-[#77c159]/90">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-12 md:px-6 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-[#6f7476] sm:text-5xl xl:text-6xl/none">
                Simplify Your Financial Management
              </h1>
              <p className="max-w-[600px] text-[#b0bec5] md:text-xl">
                Powerful tools to track, analyze, and optimize your business transactions in real-time.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-[#77c159] text-white hover:bg-[#77c159]/90">Get Started</Button>
              <Button
                variant="outline"
                className="border-[#eceff1] text-[#6f7476] hover:bg-[#f5f5f5] hover:text-[#77c159]"
              >
                View Demo
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full border-[#eceff1] bg-white">
              <CardHeader>
                <CardTitle className="text-[#6f7476]">Sign In to TallyUp</CardTitle>
                <CardDescription className="text-[#b0bec5]">
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SignInForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-[#eceff1] bg-white">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-[#eceff1] bg-white">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-[#77c159]" />
                <CardTitle className="text-[#6f7476]">Real-time Analytics</CardTitle>
                <CardDescription className="text-[#b0bec5]">
                  Track your business performance with detailed insights and reports.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-[#eceff1] bg-white">
              <CardHeader>
                <Lock className="h-10 w-10 text-[#77c159]" />
                <CardTitle className="text-[#6f7476]">Secure Transactions</CardTitle>
                <CardDescription className="text-[#b0bec5]">
                  Enterprise-grade security to protect your financial data.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-[#eceff1] bg-white">
              <CardHeader>
                <Zap className="h-10 w-10 text-[#77c159]" />
                <CardTitle className="text-[#6f7476]">Fast Processing</CardTitle>
                <CardDescription className="text-[#b0bec5]">
                  Lightning-fast transaction processing and updates.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-[#eceff1] bg-white">
              <CardHeader>
                <CreditCard className="h-10 w-10 text-[#77c159]" />
                <CardTitle className="text-[#6f7476]">Multiple Payment Methods</CardTitle>
                <CardDescription className="text-[#b0bec5]">
                  Support for all major payment methods and currencies.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#6f7476]">Why Choose TallyUp?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-[#77c159]" />
              <div>
                <h3 className="font-semibold text-[#6f7476]">Comprehensive Dashboard</h3>
                <p className="text-[#b0bec5]">
                  All your financial data in one place with intuitive visualization tools.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-[#77c159]" />
              <div>
                <h3 className="font-semibold text-[#6f7476]">24/7 Support</h3>
                <p className="text-[#b0bec5]">Round-the-clock customer support to help you with any issues.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-[#77c159]" />
              <div>
                <h3 className="font-semibold text-[#6f7476]">Easy Integration</h3>
                <p className="text-[#b0bec5]">
                  Seamlessly integrate with your existing business tools and workflows.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-[#77c159]" />
              <div>
                <h3 className="font-semibold text-[#6f7476]">Scalable Solution</h3>
                <p className="text-[#b0bec5]">Grows with your business, from startup to enterprise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-[#eceff1] bg-white">
        <div className="container flex items-center justify-between px-4 py-6 md:px-6">
          <span className="text-[#6f7476]">© 2025 TallyUp. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-[#eceff1] text-[#6f7476] hover:bg-[#f5f5f5] hover:text-[#77c159]"
            >
              Privacy Policy
            </Button>
            <Button
              variant="outline"
              className="border-[#eceff1] text-[#6f7476] hover:bg-[#f5f5f5] hover:text-[#77c159]"
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

