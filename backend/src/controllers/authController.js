import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// Register
export const Register = async(req, res) => {
    try {
       const {name, email, password} = req.body;

    const existingUser = await User.findOne({email})

    if (existingUser) {
        return res.status(400).json({
            message: "user already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json({
        message: "user registered successfully"
    });
 
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }    
}

// login

export const Login = async (req, res) => {
    try {
        const { email, password} = req.body;

        const user = await User.findOne({email});

        if(!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const isMatch = await bcrypt.compare(
            password,
            hashedPassword
        )

        if(!isMatch) {
            return res.status(400).json({
                message: "invalid credentials"
            })
        }

        const token = jwt.sign(
            {_id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: "30d"}
        )

        res.json({
          token,
          user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

// profile

export const profile = async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");

    res.json(user);
}