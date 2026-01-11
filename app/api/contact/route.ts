import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/utils/validation';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || !resend) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact directly at zzhang7@haverford.edu' },
        { status: 500 }
      );
    }

    // Send email
    const { data, error } = await resend!.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use verified domain in production
      to: [process.env.CONTACT_EMAIL_TO || 'zzhang7@haverford.edu'],
      replyTo: validatedData.email,
      subject: `New contact form submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}

        Message:
        ${validatedData.message}
      `,
    });

    if (error) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Contact form error:', error);

    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
