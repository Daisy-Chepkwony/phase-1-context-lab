/* Your Code Here */
let createEmployeeRecord = ((data)=>{
    return{
    firstName:data[0],
    familyName:data[1],
    title:data[2],
    payPerHour:data[3],
    timeInEvents:[],
    timeOutEvents:[]
    }
})
let createEmployeeRecords=((employeeRowData)=>{
    return employeeRowData.map((data)=>{
        return createEmployeeRecord(data)
    })
})
let createTimeInEvent=((dateStamp)=>{
    let [date,hour]=dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
})
let createTimeOutEvent=((dateStamp)=>{
    let [date,hour]=dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
})
let hoursWorkedOnDate=((soughtDate)=>{
    let inEvent=this.timeInEvents.find((e)=>{
        return e.date===soughtDate
    })
    let outEvent=this.timeInEvents.find((e)=>{
        return e.date===soughtDate

    })
    return (outEvent.hour-inEvent.hour)/100
})
let wagesEarnedOnDate =((dateSought)=>{
    let wages=hoursWorkedOnDate.call(this, dateSought)
    *this.payPerHour
    return parseFloat(wages.toString())

})
let findEmployeeByFirstName=((Array,firstName)=>{
    return Array.find((rec)=>{
        return rec.firstName===firstName
    })

})
let calculatePayroll=((arrayOfEmployeeRecords)=>{
    return arrayOfEmployeeRecords.reduce((memo,rec)=>{
        return memo+allWagesFor.call(rec)
    },0)
})

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

