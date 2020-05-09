const addButton = document.querySelector('.plus-button')
const jobList = document.querySelector('#job-list')

/**
 * Add new data
 */

const addListItem = () => {
  /**
   * Random text generator
   */
  let nouns = ['bird', 'clock', 'boy', 'plastic', 'duck']
  let verbs = ['kicked', 'ran', 'flew', 'dodged', 'sliced']
  let adjectives = ['beautiful', 'lazy', 'professional', 'lovely', 'dumb']
  let adverbs = ['slowly', 'elegantly', 'precisely', 'quickly', 'sadly']

  const sentence = () => {
    let rand1 = Math.floor(Math.random() * 4)
    let rand2 = Math.floor(Math.random() * 4)
    let rand3 = Math.floor(Math.random() * 4)
    let rand4 = Math.floor(Math.random() * 4)

    return `${nouns[rand1]} ${verbs[rand2]} ${adjectives[rand3]} ${adverbs[rand4]}`
  }
  const newData = {
    icon: 'far fa-circle',
    title: sentence(),
    status: 'Waiting',
  }

  jobList.innerHTML = ''
  jobListItem.push(newData)

  let jobListResult = ''
  jobListItem.forEach((data) => (jobListResult += showList(data)))

  jobList.innerHTML = jobListResult
}

addButton.addEventListener('click', addListItem)

/**
 * data list item
 */
let jobListItem = [
  {
    icon: 'fas fa-check-circle',
    title: 'Lorem ipsum dolor sit amet consectetur #1.',
    status: 'Approved',
  },
  {
    icon: 'fas fa-check-circle',
    title: 'Lorem ipsum dolor sit amet #2.',
    status: 'Approved',
  },
  {
    icon: 'far fa-circle',
    title: 'Lorem ipsum dolor sit #3.',
    status: 'Waiting',
  },
]

/**
 * Display data list item
 * @param {*} data = array of object
 */
const showList = (data) => {
  return `<li>
            <i class='${data.icon}'></i>
            <p>${data.title}</p>
            <div class="badge">${data.status}</div>
          </li>`
}

let jobListResult = ''
jobListItem.forEach((data) => (jobListResult += showList(data)))

jobList.innerHTML = jobListResult
