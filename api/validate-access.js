/**
 * API: Validate Access — MVP version
 * ────────────────────────────────
 * Simulates access validation for the PromptLab delivery dashboard.
 * In this MVP, any non-empty identifier (email/code) is accepted.
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Simple validation: check if email exists and is not empty
    if (!email || email.trim() === '') {
      return res.status(200).json({ success: false, message: 'Invalid or missing email' });
    }

    // MVP: Simulate success for any provided email
    // In production, this would check against a database of customers.
    return res.status(200).json({ 
      success: true, 
      message: 'Access granted' 
    });

  } catch (error) {
    console.error('Validation Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
