export function Footer() {
  return (
    <footer className="border-t border-border bg-card shadow-sm mt-8">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-xl ring-2 ring-blue-300/50 bg-white overflow-hidden mb-4">
              <img src="https://res.cloudinary.com/dx9bvma03/image/upload/v1761333127/wind-turbine-logo-design-vector-art-illustration_761413-29479_wbczz9.avif" alt="Wind Turbine Logo" className="object-contain w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">WindFlow</h3>
            <p className="text-sm text-muted-foreground mb-4">Advanced turbine analytics & monitoring system for optimal performance.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Dashboard</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Analytics</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Maintenance</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Settings</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Support</h3>
            <p className="text-sm text-muted-foreground mb-2">Need help? Contact our support team.</p>
            <a href="#" className="text-sm text-primary hover:underline">support@windflow.com</a>
          </div>
        </div>
        <div className="border-t border-border mt-6 pt-4 text-center">
          <p className="text-sm text-muted-foreground">© 2024 WindFlow Dashboard. All rights reserved. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
