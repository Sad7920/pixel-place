import { Router } from "express";

export const adminRouter = Router()

adminRouter.post('/element',(req,res)=>{
    res.json({
        message: 'Create an element'
    })
})

adminRouter.put('/element/:elementId',(req,res)=>{
    const {elementId} = req.params
    res.json({
        message: elementId
    })
})

adminRouter.post('/avatar',(req,res)=>{
    res.json({
        message: 'Create an avatar'
    })
})

adminRouter.post('/map',(req,res)=>{
    res.json({
        message: 'Create a map'
    })
})