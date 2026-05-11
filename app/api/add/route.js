import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  
    let data=await request.json()
    // data.email=session.user.email
    
   
    const client = await clientPromise;
    const db = client.db("form"); 



    const users = await db.collection("secy_data").insertOne(data)
    return NextResponse.json({succes:true,data:users.insertedId});
  
}

