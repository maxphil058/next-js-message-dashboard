import { redirect } from "next/dist/server/api-utils";

// jsust a placeholder for the messages array
let messages = [

    "Welcome to the message board! Here you can post your messages and read others.",
          "Feel free to share your thoughts, ideas, or anything you'd like to discuss.",
          "Remember to be respectful and considerate of others' opinions."
 ] 

export async function POST(request) {
    const body = await request.json();
    const { name, message } = body; 
    messages.push(message);
    redirect('/'); // Redirect to the home page after submission
}

export async function GET() {

    
    return Response.json(messages)
}
