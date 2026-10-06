# Secure Receipt Shop

Netlify-ready digital shop starter with Stripe Checkout, server-side payment verification, and receipt-code checking.

## Setup
1. Install dependencies with npm install.
2. Configure Netlify environment variables from .env.example.
3. Create a Stripe webhook for /api/stripe-webhook and subscribe to checkout.session.completed.
4. Deploy to Netlify.

The browser never decides whether a payment is valid. Receipt codes are generated only after Stripe confirms a paid checkout session.
