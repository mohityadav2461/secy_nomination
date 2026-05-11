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

    const client = await clientPromise;

    const db = client.db("form");

    // Required Field Validation
    if (
      !data.Name ||
      !data.RollNumber ||
      !data.IITKMailID ||
      !data.PhoneNumber ||
      !data.Mission ||
      !data.Vision
    ) {

      return NextResponse.json(
        {
          success: false,
          message: "All fields are required"
        },
        { status: 400 }
      )
    }

    // Email Validation
    const email = data.IITKMailID.toLowerCase();

    if (!email.endsWith("@iitk.ac.in")) {

      return NextResponse.json(
        {
          success: false,
          message: "Only IITK emails allowed"
        },
        { status: 400 }
      )
    }

    // Duplicate Check
    const existingUser = await db
      .collection("secy_data")
      .findOne({
        IITKMailID: email
      })

    if (existingUser) {

      return NextResponse.json(
        {
          success: false,
          message: "You have already submitted the form"
        },
        { status: 400 }
      )
    }

    // Store in MongoDB
    const users = await db
      .collection("secy_data")
      .insertOne({
        ...data,
        IITKMailID: email
      });

    // Google Sheets Update
    fetch(
      "https://script.google.com/macros/s/AKfycbyoCk-ocjl52X_CYTVMC4pBY7xWBvwPcHgmZ5I386TthWYbLzG87jurDlL1LwH78VRUFA/exec",
      {
        method: "POST",
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

    return NextResponse.json(
      {
        success: false,
        message: "Server Error"
      },
      { status: 500 }
    );
  }
}