import { Router } from "express";

export const spaceRouter = Router()

spaceRouter.post('/',(req,res)=>{
    res.json({
        message: 'Create space'
    })
})

spaceRouter.delete('/:spaceId',(req,res)=>{
    res.json({
        message: 'Delete a space'
    })
})

spaceRouter.get('/:spaceId',(req,res)=>{
    const {spaceId} = req.params
    res.json({
        message: `Get an existing space with id ${spaceId}`
    })
})

spaceRouter.get('/all',(req,res)=>{
    res.json({
        message: 'Get all spaces'
    })
})

spaceRouter.post('/element',(req,res)=>{
    res.json({
        message: 'Add an element'
    })
})

spaceRouter.delete('/element',(req,res)=>{
    res.json({
        message: 'Delete an element'
    })
})