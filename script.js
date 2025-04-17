


// ------------ registration--------------

const express = require('express');
const app = express();

app.use(express.json());

// Google Sign-In (Placeholder)
app.post('/google-signin', async (req, res) => {
    // Verify Google ID token with Google OAuth API
    // Create student profile in database
    // Return success: true
    res.json({ success: true });
});

// Send OTP
app.post('/send-otp', async (req, res) => {
    const { phone } = req.body;
    // Integrate with SMS service (e.g., Twilio, AWS SNS)
    // Generate and store OTP in database
    res.json({ success: true });
});

// Verify OTP
app.post('/verify-otp', async (req, res) => {
    const { phone, otp } = req.body;
    // Verify OTP against stored value
    // Create student profile if valid
    res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));


google.accounts.id.initialize({
    client_id: '1092605392623-flqicpimebj815vlhcfile3fjpr2vpec.apps.googleusercontent.com',
    callback: handleGoogleSignIn,
});
function handleGoogleSignIn(response) {
    fetch('/google-signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: response.credential }),
    }).then(res => res.json()).then(data => {
        if (data.success) {
            alert('Welcome! You’re now registered.');
            window.location.href = '/dashboard';
        }
    });
}

const bcrypt = require('bcrypt');
const saltRounds = 10;
// On registration:
// const hash = await bcrypt.hash(password, saltRounds);
// On login:
// const match = await bcrypt.compare(password, storedHash);


//  -----------OTP--------------
const twilio = require('twilio');
const client = twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
app.post('/send-otp', async (req, res) => {
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await client.messages.create({
        body: `Your OTP is ${otp}`,
        from: 'YOUR_TWILIO_NUMBER',
        to: phone,
    });
    // Store OTP in database
    res.json({ success: true });
});




// ------------------------payment api----------------------------
// Private API Key      16613224f8ce99bac4ebd3f08a65836e
// Private Auth Token   001c98277af359ac9a0bd563a2c9c002
// Private Salt         7dc58d793af8468d8aa9e8a5b25148ec
