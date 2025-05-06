function lateFee(numberOfDays) {
  if (numberOfDays <= 0)  {
    return "No fine!"
  } else {
    if (numberOfDays <= 7) {
      return 'Your fine is $5.'
    } else if (numberOfDays <= 10) {
      return "Your fine is $20."
    } else {
       if (numberOfDays >= 31) {
        return "Membership suspended."
       }
    }
  }
}

function branchHours() {
  // Write your code here!
}

function recommendBookByGenre() {
  // Write your code here!
}
