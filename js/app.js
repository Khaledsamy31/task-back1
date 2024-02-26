
const data10 = require("./data10")

const yargs = require("yargs")

yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe : "this is the first name desc",
            demandOption: true,
            type : "string"
        },
        lname : {
            describe : "this is the last name desc",
            demandOption : true,
            type : "string"
        },
        age : {
            describe : " this is age",
            type : "string"
        }
    },
    handler: (x)=> {
        data10.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})
//=============delete===============
yargs.command({
    command : "delete",
    describe : "to delete an item",
    builder :{
        id : {
            discribe : "delete by id",
            demandOption: true,
            type: "string"
        }
    },
    handler : (x) => {
        data10.deleteData(x.id)
    }
})

// ===============read===================
yargs.command({
    command : "read",
    discribe : "to read data",
    builder : {
        id: {
            discribe: "this is id desc in read command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.readData(x.id)
    }
})
// ===========List=============
yargs.command({
    command : "list",
    discribe : "this is a list of items",
    handler: () => {
        data10.listData()
    }
})
yargs.parse()

