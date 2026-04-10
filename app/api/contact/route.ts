import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  // TODO: Connecter à un service de messagerie ou Formspree pour envoyer le message.
  console.log("Contact form reçu", { name, email, message });

  return NextResponse.json({ success: true });
}
