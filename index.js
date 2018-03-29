function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach((driver) => {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.sort((a, b) => {
    a.revenue = b.revenue
  })
}

function driversByName() {

}

function totalRevenue() {

}

function averageRevenue() {

}
