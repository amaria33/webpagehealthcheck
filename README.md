# Website Health Check Tool

An AI-powered website analysis tool that provides instant UX, copywriting, and SEO insights. This Next.js 14 application offers both a free demo and a paid full version with complete analysis.

## Features

- 🎨 **Full UX Analysis** - Navigation, layout, and user experience review
- ✍️ **Copy Clarity Score** - Messaging and CTA effectiveness analysis
- 🔍 **SEO Breakdown** - Meta tags, headings, and SEO factors review
- 📊 **Health Score** - Overall website rating (0-100)
- 💳 **Stripe Integration** - Secure payment processing for full reports
- 🆓 **Demo Mode** - Free limited analysis for testing

## Project Structure

```
app/
├── page.tsx           # Full report page (main health check tool)
├── demo/page.tsx      # Free demo with limited results
├── sell/page.tsx      # Sales landing page
├── success/page.tsx   # Payment success page
├── terms/page.tsx     # Terms of Service
├── privacy/page.tsx   # Privacy Policy
└── api/
    ├── analyze/       # AI-powered website analysis endpoint
    └── checkout/      # Stripe checkout session creation
components/
└── NavBar.tsx         # Global navigation component
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key
- Stripe account and secret key

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# OpenAI API Key for website analysis
OPENAI_API_KEY=your_openai_api_key_here

# Stripe Secret Key for payment processing
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# Base URL for your application (used in Stripe redirects)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

- `/` - Full website health check tool
- `/demo` - Free demo with limited results
- `/sell` - Sales landing page with pricing and features
- `/success` - Payment confirmation page
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy

## Brand Colors

The application uses a consistent color palette:

- Background Cream: `#FFF6F3`
- Light Blush Pink: `#F7CDD7`
- Rose Outline Pink: `#E7A5B5`
- Hero Gradient Pink (mid): `#DCA0B0`
- Hero Gradient Pink (deep): `#C08090`
- Light Gray Text: `#C0C0C0`
- Soft Black Text: `#3A3A3A`
- Accent Gold: `#D6B36A`

## API Endpoints

### POST `/api/analyze`

Analyzes a website's HTML and returns UX, copy, and SEO insights.

**Request Body:**

```json
{
  "url": "https://example.com"
}
```

**Response:**

```json
{
  "score": 85,
  "ux": "UX analysis text...",
  "copy": "Copy analysis text...",
  "seo": "SEO analysis text...",
  "recommendations": [{ "item": "Recommendation text", "impact": "high" }]
}
```

### POST `/api/checkout`

Creates a Stripe Checkout session for purchasing the full report.

**Response:**

```json
{
  "url": "https://checkout.stripe.com/..."
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your hosting platform:

- `OPENAI_API_KEY`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_BASE_URL` (your production URL)

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** OpenAI GPT-4
- **Payments:** Stripe
- **Deployment:** Vercel

## License

This project is set up as a digital product for sale.
# webpagehealthcheck
