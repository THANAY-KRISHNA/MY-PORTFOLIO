import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // Node.js Backend Concept Simulation
    // Over here one would use Nodemailer, Resend, or equivalent to actually send an email.
    console.log('--- NEW CONTACT SUBMISSION ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------');

    // Artificial delay to simulate real network request and show the sleek loader UI
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true, message: "Message received successfully." }, { status: 200 });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ success: false, message: "Server error occurred." }, { status: 500 });
  }
}
