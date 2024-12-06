import { Router } from "express";
import { userRouter } from "./user";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";

export const router = Router()

router.post('/signup', (req, res) => {
    res.json({
        message: 'Signup'
    })
})

router.post('/signin', (req, res) => {
    res.json({
        message: 'Shashant is gonna build this amazing 2d workspace game'
    })
})

router.get('/elements', (req, res) => {
    res.json({
        message: 'See all available elements'
    })
})

router.get('/avatars', (req, res) => {
    res.json({
        message: 'Avatars route'
    })
})

router.use('/user',userRouter)
router.use('/space',spaceRouter)
router.use('/admin',adminRouter)