const text = document.querySelector('.sec-text')

const textLoad = () => {
    setTimeout(() => {
        text.innerHTML = "Coder";
    }, 0);
    setTimeout(() => {
        text.innerHTML = "Web Develpor";
    }, 4000);
    setTimeout(() => {
        text.innerHTML = "YouTuber";
    }, 8000);
}
textLoad()

setInterval(textLoad, 12000)
//counter
// function animateValue (element, start, end, duraction){
//     let current = start;
//     const rang = end - start ;
//     const increment = end > start ? : -1 ;

// }

let HappyClients = setInterval(updated1);
let upto1 = 0;
function updated1() {
    let count = document.querySelector("#HappyClients");
    count.innerHTML = ++upto1;
    if (upto1 === 1000) {
        clearInterval(HappyClients);
    }
};


let ProjectCompleat = setInterval(updated2);
let upto2 = 0;
function updated2() {
    let count = document.querySelector("#ProjectCompleat");
    count.innerHTML = ++upto2;
    if (upto2 === 344) {
        clearInterval(ProjectCompleat);
    }
};


let FilesDownloded = setInterval(updated3);
let upto3 = 0;
function updated3() {
    let count = document.querySelector("#FilesDownloded");
    count.innerHTML = ++upto3;
    if (upto3 === 185) {
        clearInterval(FilesDownloded);
    }
};


let LinesofCode = setInterval(updated4);
let upto4 = 4000;
function updated4() {
    let count = document.querySelector("#LinesofCode");
    count.innerHTML = ++upto4;
    if (upto4 === 5000) {
        clearInterval(LinesofCode);
    }
};

// filter gallert
let filterOpctions = document.querySelectorAll('.filteroption')
let galleryitem = document.querySelectorAll('.gallery-item')


filterOpctions.forEach(option => {
    option.addEventListener('click', () => {
        console.log("i am Chaling")
        filterOpctions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');

        const filerCatagory = option.getAttribute('data-filter')
        galleryitem.forEach(item => {
            if (item.classList.contains(filerCatagory) || filerCatagory === 'all') {
                item.style.display = "block";
            } else {
                item.style.display = "none"
            }
        })

    })

})
