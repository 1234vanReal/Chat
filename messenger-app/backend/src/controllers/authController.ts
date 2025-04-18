import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    async registerUser(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, password: hashedPassword });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error });
        }
    }

    async loginUser(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    }
}

export default new AuthController();