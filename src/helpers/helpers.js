export function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000)
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var hour = a.getHours() > 12 ? a.getHours() - 12 : a.getHours()
  var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes()
  var cycle = a.getHours() >= 12 ? "PM" : "AM"
  var time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ' ' + cycle
  return time
}

export function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false
  }
  return true
}