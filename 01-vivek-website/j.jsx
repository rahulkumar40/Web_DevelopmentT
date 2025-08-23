{/* <motion.div 
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
className="flex flex-col bg-blue-950 justify-start items-center mt-5 pb-5 px-4 rounded-md shadow-lg"
>
<h2 className="text-white text-3xl my-2 font-bold">Live Chat With AI</h2>
<div className="h-full min-h-[10rem] min-w-[85vw] px-3 bg-white text-black mb-3 rounded-md shadow-md overflow-auto">
  {loading ? (
    <p className="text-center">Loading...</p>
  ) : (
    promptResponses.map((data, index) => (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="h-auto px-2 py-1"
        key={index}
      >
        <p className="border-2 rounded-md border-orange-700 px-2 py-2 shadow-sm">{data}</p>
      </motion.div>
    ))
  )}
</div>
<p className="mb-2 hover:text-red-600 cursor-pointer" onClick={() => setPromptResponses([])}>Clear Chat</p>
<div className="relative">
  <input
    className="min-w-auto rounded-md py-2 px-4 h-auto md:w-[20rem] border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
    type="text"
    placeholder="Ask me Something..."
    value={text}
    onChange={handleInputChange}
    onKeyDown={handleKeyPress}
  />
  <div className="flex w-full justify-between mt-2">
    <button className="text-gray-700 font-bold hover:text-gray-900" onClick={() => setText("")}>Clear</button>
    <button className="bg-orange-600 text-white px-4 py-1 rounded-md hover:bg-orange-700 transition" onClick={getResponse}>Send</button>
  </div>
</div>
</motion.div> */}


//   {function handleKeyPress(e) {
//     if (e.key === "Enter") {
//       getResponse();
//     }
//   }

//   async function getResponse() {
//     setLoading(true);
//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const chat = await model.startChat();
//       const result = await chat.sendMessage(text);
//       const responseText = result.response.text();
      
//       setPromptResponses([...promptResponses, responseText]);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//     }
//     setLoading(false);
//   }}

// const genAI = new GoogleGenerativeAI(
//     "YOUR_NEW_GEMINI_API_KEY"
//   );

import { GoogleGenerativeAI } from "@google/generative-ai";
// 