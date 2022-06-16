const container = document.querySelector('.container')
const imgs = [
    {
        src: 'Frontend-Developer-Career-Path_Scrimba.png',
        link: '',
        name: 'Frontend Developer Career Path',
        source: 'Scrimba'
    },
    {
        src: 'Front-End-Development-Libraries_freecodecamp.png',
        link: '',
        name: 'Front End Development Libraries',
        source: 'freecodecamp'
    },
    {
        src: 'Javascript-Algorithms-and-Data-Structures_freecodecamp.png',
        link: '',
        name: 'Javacript Algorithms and Data Structures',
        source: 'freecodecamp'
    },
    {
        src: 'Responsive-Web-Design_freecodecamp.png',
        link: '',
        name: 'Responsive Web Design',
        source: 'freecodecamp'
    }
]

const imgHtml = imgs.forEach(obj => {
    const img = document.createElement('img')
    img.src = `./imgs/${obj.src}`
    img.alt = obj.name
    container.appendChild(img)
})
