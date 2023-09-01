import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  try {
    
    console.log('====================================');
    console.log(name);
    console.log('====================================');
    return NextResponse.json({message: "Created successfully", status: 200 });

  } catch (err) {
    return NextResponse.json({
      message: `Internal Server Error`,
      status: 500,
    });
  }
}


export async function GET(request: NextRequest) {
  try {


    return NextResponse.json({categories: []});
    

  } catch (err) {
    return NextResponse.json({
      message: `Internal Server Error`,
    }, {status: 500});
  }
}
