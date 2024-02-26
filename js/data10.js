
const fs = require("fs")
const allData = require("./allData")

const addPerson = (id, fname, lname, age, city) => {

    const allData = loadData()

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })
    if(duplicatedData.length == 0){

        allData.push({
            id : id,
            firstName : fname,
            lastName : lname,
            age : age,
            city : city
    
        })
        
    }else if(id > 10){
        console.log("sorry! you cannot add more than 10 id's")

    } else if(duplicatedData.length != 0) {
        console.log("ERROR DUBLICATED ID!!!")
    }

     saveAllData(allData)
}

//============================func json to object & return object to json========================

const loadData = () => {
    try{
        const dataJson = fs.readFileSync("data10.json").toString() //read data and convert from buffer to string

        return JSON.parse(dataJson) // convert from json to object and save it in loadData
    }
    catch{
        return []
    }
}

//====================func object to json====================

const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)

    fs.writeFileSync("data10.json", saveAllDataJson)
}

//=======================func delete data ==================

const deleteData = (id) => {
    const allData = loadData()

    if(id % 2 === 0 && id <= 8){

        const dataToKeep = allData.filter((obj) => {
    
         return obj.id != id
    })
     console.log("sucess to delete an item, id Number",id,"is deleted!")
                
     saveAllData(dataToKeep)
            

        
    }else{console.log("you cannot delete this ID!")
    
}





}
//==============func read data===============
const readData = (id) =>{

    const allData = loadData()
    const itemNeeded = allData.find((obj) => {

        return obj.id == id
    })
    // console.log(itemNeeded)

    if(itemNeeded){
        console.log(itemNeeded.firstName)
    }else{
        console.log("item needed not found")
    }
}
//==============List==================
const listData = () => {
    const allData = loadData()
    allData.forEach((obj) =>{
        console.log(obj.firstName, obj.lastName, obj.age, obj.city)
    })
}

//===================== exports ====================

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}