import connectDb from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
    await connectDb();
    return NextResponse.json({msg:"it is workign"})
}

