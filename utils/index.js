const mongoose = require('mongoose')

function isOwner(currentUser, thingToCheck) {
    return currentUser == thingToCheck ? true : false
}
const isAdmin = user => user.role === 'ADMIN'
const isPartner = user => user.role === 'PARTNER'
const isUser = user => user.role === 'USER'

const formatDate = date => {
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()
    let year = date.getFullYear()

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-')
}

module.exports = { isOwner, isAdmin, isPartner, isUser, formatDate }