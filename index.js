let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')

content.append(header)

let container = document.createElement('div')
container.setAttribute('class', 'dog-content')

content.append(container)

let img = document.createElement('img')
img.setAttribute("class", 'dog-image')
img.setAttribute("src", "./assets/rizzo.jpg")

container.append(img)

let details = document.createElement('div')
details.setAttribute("class", 'dog-details')
let details2 = document.createElement('h3')
details2.append("Description:")

details.append(details2)
container.append(details)

let para = document.createElement('p')
para.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')

details.append(para)

let feedTimes = document.createElement('h3')
feedTimes.append("Feeding Times:")
details.append(feedTimes)

let list = document.createElement('ul')

let times1 = document.createElement('li')
let times2 = document.createElement('li')
let times3 = document.createElement('li')

times1.append('9:00 am')
times2.append('12:00 pm')
times3.append('5:00 pm')

container.append(details)
details.append(times1,times2,times3)