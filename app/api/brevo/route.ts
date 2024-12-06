import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, data } = body;

    if (!process.env.BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY not configured');
    }

    switch (action) {
      case 'createContact':
        return handleCreateContact(data);
      case 'sendEmail':
        return handleSendEmail(data);
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleCreateContact(data: any) {
  const { name, email, phone } = data;

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email,
      attributes: {
        NOMBRE: name,
        TELEFONO: phone,
      },
      listIds: [16], 
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json(error, { status: response.status });
  }

  return NextResponse.json(
    { message: 'Contact created successfully' },
    { status: 201 }
  );
}

async function handleSendEmail(data: any) {
  const { email, name } = data;
  // Capitalize each word in name
  const capitalizedName = name
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: {
        name: 'Acueducto',
        email: 'hola@acueducto.studio',
      },
      to: [{
        email,
        name,
      }],
      subject: '¡Bienvenido a la masterclass!',
      htmlContent: `
        <h1>¡Hola ${capitalizedName}!</h1>
        <p>Gracias por registrarte en nuestra masterclass gratuita.</p>
        <p>Aquí tienes el ebook <a href="https://acueducto.notion.site/Design-digital-products-like-a-pro-5e11e26cd0174ce98d21307592a562dd"><b>Design digital products like a pro</b></a></p>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json(error, { status: response.status });
  }

  return NextResponse.json(
    { message: 'Email sent successfully' },
    { status: 200 }
  );
}