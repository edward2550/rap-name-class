const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rapper = {
    '21 savage':{
        'age':29,
        'bithName':'feeder',
        'birthLocation':'London,England'
},
'chance the rapper':{
    'age':29,
    'bithName':'feeder',
    'birthLocation':'C-Town'
},
'dylan':{
    'age':29,
    'bithName':'Dylan',
    'birthLocation':'Dylan'
},


}


app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
} )

app.listen(PORT, () =>{
    console.log(`The server is running on  port ${PORT} you better catch it `)
})

app.get('/api/:rapperName',(request,response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if(rapper[rappersName]){
        response.json(rapper[rappersName])
    } else{
        response.json(rapper['dylan'])
    }
    //response.json(rapper)
})