// import clientPromise from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function POST(request) {
  
//     let data=await request.json()
//     // data.email=session.user.email
    
   
//     const client = await clientPromise;
//     const db = client.db("form"); 



//     const users = await db.collection("secy_data").insertOne(data)
//     return NextResponse.json({succes:true,data:users.insertedId});
  
// }


import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {

  try {

    const data = await request.json();

    // MongoDB Storage
    const client = await clientPromise;

    const db = client.db("form");

    const users = await db
      .collection("secy_data")
      .insertOne(data);

    // Google Sheets Update
    await fetch(
    "https://script.google.com/macros/s/AKfycbwCvXTF0KvAGZJqvA1SGuZrZqxudzNKKbYtsjXbBTo9TBXmkS0rOcONO4kd9N8MnHTLuQ/exec",
    {
        method: "POST",
        mode: "no-cors",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    )

    return NextResponse.json({
      success: true,
      data: users.insertedId,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
    });
  }
}