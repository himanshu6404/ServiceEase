import { OAuth2Client } from 'google-auth-library';
import dotenv from "dotenv";

dotenv.config({
    path:'./env'
})
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    console.log("Payload from Google:", payload);

    const { email, name, picture } = payload;

    // Check if user exists in your DB
    let user = await User.findOne({ email });
    if (!user) {
      // If not, create a new user
      user = await User.create({
        email,
        name,
        profilePic: picture,
        // you can generate a random password or leave it empty
      });
    }

    // Generate your JWT token
    const accessToken = generateJWT(user._id); // your method

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Error during Google login:', error);
    res.status(500).json({ message: 'Google login failed' });
  } 
};
