/* Your Code Here */

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

function createEmployeeRecord (emlData){
    const [firstName, familyName, title, payPerHour] = emlData;
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    }
}

function createEmployeeRecords(aryOfArrays) {
    return aryOfArrays.map(createEmployeeRecord);
}



function createTimeInEvent(emp, stampDate ){
    const [date, hour] = stampDate.split(' ')
    emp.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return emp
}

function createTimeOutEvent(emp, stampDate){
    const [date, hour] = stampDate.split(' ')
    emp.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    })
    return emp
}


function hoursWorkedOnDate(date, emp){
    const timeIn = emp.timeInEvents.find(event => event.date === date)
    const timeOut = emp.timeOutEvents.find(event => event.date === date)
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100
    return hoursWorked
}

function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date)
    const timeOut = employee.timeOutEvents.find(event => event.date === date)
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100
    return hoursWorked
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date)
    const payRate = employee.payPerHour
    return hoursWorked * payRate
  }
  

  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName)
  }

  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => {
      return totalPayroll + allWagesFor(employee)
    }, 0)
  }