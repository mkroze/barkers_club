import db from "../../../utils/db";
import Breed from "../../../models/Breed";
import mongoose from "mongoose";

db.connect()

export default async (req, res) => {

    const {
        query:{id},
        method
    } = req;

    switch(method){
        case 'GET':
            try {
                const breed = await Breed.findById(id);
                if(!breed){
                    res.status(400).json({success:false})
                    console.log('breed not found');
                }
                console.log('subarashi senpai')
                res.status(200).json({ success: true, data: breed });
            } catch (error) {
                console.log('you made a mistake baby, indeed you are inside the catch');
                res.status(400).json({ success: false });
            }
        break;
    }
}