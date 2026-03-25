export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body =
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { email } = body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'PromptLab <onboarding@resend.dev>',
        to: email,
        subject: 'Seu acesso ao PromptLab 🚀',
        html: `
          <h1>Acesso liberado</h1>
          <p>Seu código de acesso: <strong>PLAB-PRO-6T9X2Q</strong></p>
          <p>Acesse agora:</p>
          <p>
            <a href="https://app.promptlabpack.pro/access">
              https://app.promptlabpack.pro/access
            </a>
          </p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API Error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}