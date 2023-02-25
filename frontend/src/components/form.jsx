
const Form=()=>{
    return (<>
    <body className="bg-black text-white text-center">
   <section>
    <h1 className="text-6xl mt-8 mb-8">Create A Reciepe</h1>
    <p className="mb-8">Share a Reciepe with the Club by Sharing the form below</p>
    <label>Reciepe Title</label>
    <div className="mt-1 mb-6">
        <input className="px-2 py-1 w-2/5 rounded-lg" type='text'/>
    </div>
    <label>Author</label>
    <div className="mt-1 mb-6">
    <input className="px-2 py-1 w-2/5 rounded-lg" type='text'/>
    </div>
    <label>Please upload image url link</label>
    <div className="mt-1 mb-6">
    <input className="px-2 py-1 w-2/5 rounded-lg" type='text'/>
    </div>
    <label>Ingredients</label>
    <div className="mt-1 mb-6 ">
    <textarea className="w-2/5 rounded-lg"/>
    </div>
    <label>Reciepe directions</label>
    <div className="mt-1 mb-6">
    <textarea className="w-2/5 rounded-lg"/>
    </div>
    <button className="bg-gray-300 px-5 py-2 rounded-md mb-5">Submit</button>
   </section>

   </body>
    </>)
}
export default Form;