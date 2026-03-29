interface Env {
  BREVO_API_KEY: string;
}

const BREVO_LIST_ID = 8; // "Personal Site Newsletter" list

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { email } = await context.request.json<{ email: string }>();

  if (!email || typeof email !== 'string') {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': context.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      email,
      listIds: [BREVO_LIST_ID],
      attributes: {
        SOURCE: 'personal-site',
      },
      updateEnabled: true,
    }),
  });

  if (!brevoRes.ok) {
    const error = await brevoRes.json<{ message?: string }>();
    return new Response(JSON.stringify({ error: error.message || 'Subscribe failed' }), {
      status: brevoRes.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
