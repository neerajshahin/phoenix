module.exports = {
  // Site configuration
  name: "Phoenix Cabs",
  description: "Phoenix Cabs offers premium taxi services in Dehradun with 24/7 car rental, airport transfers, and outstation travel. Book reliable cabs for Char Dham Yatra, Delhi, and all Uttarakhand destinations.",
  url: process.env.SITE_URL || "http://localhost:8080",
  
  // Business information
  phone: "+91-7983438214",
  whatsapp: "+917983438214",
  
  // SEO defaults
  keywords: "Phoenix Cabs, taxi service Dehradun, car rental Dehradun, cab booking, airport taxi, Char Dham Yatra, Delhi taxi, Uttarakhand travel, outstation cab",
  
  // Social media (when available)
  social: {
    facebook: "",
    twitter: "",
    instagram: ""
  },
  
  // Build info
  buildTime: new Date().toISOString()
};