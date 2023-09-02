import Workout from "../models/woModel.js";
import mongoose from "mongoose";

//Get all workouts
const getAllWO = async(req, res)=>{
    const user_id = req.user._id;

    const workouts = await Workout.find({user_id}).sort({createdAt: -1});

    res.status(200).json(workouts);
}

//Get a single workout
const getOneWO = async(req, res)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({error: "No workout finded!"});
    }

    const workout = await Workout.findById(req.params.id);
    if(!workout){
        return res.status(404).json({error: "No workout finded!"});
    }

    res.status(200).json(workout);
}

//Create new workout
const createWO = async(req, res)=>{
    const {title, load, reps} = req.body;

    let emptyFields = [];

    if(!title){
        emptyFields.push("title");
    }
    if(!load){
        emptyFields.push("load");
    }
    if(!reps){
        emptyFields.push("reps");
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all fields!", emptyFields})
    }

    //Add workout to database
    try{
        const user_id = req.user._id;
        const workout = await Workout.create({title, load, reps, user_id});
        res.status(200).json(workout);

    }catch(error){

        res.status(400).json({error: error.message});
    }
}

//Delete a wrokout
const deleteWO = async(req, res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({error: "No workout finded!"});
    }

    const workout = await Workout.findByIdAndDelete({_id: req.params.id});

    if(!workout){
        return res.status(400).json({error: "No workout finded!"});
    }

    res.status(200).json(workout);
}


//Update a workout
const updateWO = async(req, res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({error: "No workout finded!"});
    }

    const workout = await Workout.findByIdAndUpdate({_id: req.params.id}, {
        title: req.body.title,
        load: req.body.load,
        reps: req.body.reps
    });

    if(!workout){
        return res.status(400).json({error: "No workout finded!"});
    }

    res.status(200).json(workout);
}

export {getAllWO, getOneWO, createWO, deleteWO, updateWO};