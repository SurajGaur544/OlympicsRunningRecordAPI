const express = require('express');
const router = new express.Router();
const MensRanking = require('../database/dbConnect');

// we will handle post req

router.post('/mens', async(req, res) => {
    try{
        const mensRecord = new MensRanking(req.body);
        const result =  await mensRecord.save();
        if(!result){
            res.status(404).json({ message: "data not inserted" });
        }
        return res.status(201).json({ message: "success", result });
    }catch(e){
        res.status(500).json({ message: "Internal Server Error", e })
    }
});


// we will handle get req

router.get('/mens', async(req, res) => {
    try{
        const result =  await MensRanking.find({}).sort({"ranking": 1});
        if(!result){
            res.status(404).json({ message: "data not found" });
        }
        return res.status(200).json({ message: "success", result });
    }catch(e){
        res.status(500).json({ message: "Internal Server Error", e })
    }
})

// we will handle get req of one id

router.get('/mens/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const result =  await MensRanking.findById({_id});
        if(!result){
            res.status(404).json({ message: "data not found" });
        }
        return res.status(200).json({ message: "success", result });
    }catch(e){
        res.status(500).json({ message: "Internal Server Error", e })
    }
})

// we will handle patch req indivisual

router.patch('/mens/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const result =  await MensRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        if(!result){
            res.status(404).json({ message: "data not found" });
        }
        return res.status(200).json({ message: "success", result });
    }catch(e){
        res.status(500).json({ message: "Internal Server Error", e })
    }
})

module.exports = router;