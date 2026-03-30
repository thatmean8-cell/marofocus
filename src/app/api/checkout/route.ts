import { NextRequest, NextResponse } from "next/server";

const CREEM_API_KEY = process.env.CREEM_API_KEY!;
const PRODUCT_IDS: Record<string, string> = {
  yearly: process.env.CREEM_PRODUCT_YEARLY!,
  monthly: process.env.CREEM_PRODUCT_MONTHLY!,
};

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json();

    if (!plan || !PRODUCT_IDS[plan]) {
      return NextResponse.json(
        { error: "Invalid plan. Use 'yearly' or 'monthly'." },
        { status: 400 }
      );
    }

    const productId = PRODUCT_IDS[plan];

    // Determine the origin for redirect URLs
    const origin = req.headers.get("origin") || "https://marofocus.com";

    const response = await fetch("https://api.creem.io/v1/checkouts", {
      method: "POST",
      headers: {
        "x-api-key": CREEM_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: productId,
        success_url: `${origin}?checkout=success`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("CREEM API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json({ checkout_url: data.checkout_url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
