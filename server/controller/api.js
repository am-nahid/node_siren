const Data = require("../store/completeData")


const showCategory = (req,res)=>{
    const {cat}=req.params
    
    const categorizedData = Data.filter((item)=>item.cat===cat)
    res.send(categorizedData)
}

// const IndividualBlog = (req,res)=>{
//     const {cat,id} = req.body
//     console.log(cat,id);

    
// }

const showIndividualBlog = (req,res) =>{
    const cat = req.query.cat;
    const id = Number(req.query.id);
    console.log(cat, id);

    const individualData = Data.filter((item)=>item.cat===cat && item.id===id)
    res.send(individualData)
}

module.exports = {showCategory, showIndividualBlog}