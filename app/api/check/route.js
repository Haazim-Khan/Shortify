import {url} from "../../../model/schema"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { longURL, shortURL } = await req.json();
    try{
        await mongoose.connect(process.env.MONGODB_URI);
    }
    catch(error){
        return NextResponse.json({success: false, message: "Database connection failed"});
    }

    const existing = await url.findOne({shortURL});

    if(existing){
        return NextResponse.json({success: false, message: "Short URL already exists"});
    }
    else{
        const newURL = url.create({longURL, shortURL});
        return NextResponse.json({success: true, message: "URL created successfully"});
    }
}