const { showCategory , showIndividualBlog} = require('../controller/api')
const Data = require('../store/completeData')

const route = require('express').Router()

route.get('/all-data',(req,res)=>{
    res.send(Data)
})

route.get('/blog/:cat', showCategory)
// route.post('/blog/verify', IndividualBlog)
route.get('/detail', showIndividualBlog)


module.exports = route