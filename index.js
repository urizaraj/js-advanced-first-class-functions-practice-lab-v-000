function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach((driver) => {
    if (driver.location === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue() {

}

function driversByName() {

}

function totalRevenue() {

}

function averageRevenue() {

}
