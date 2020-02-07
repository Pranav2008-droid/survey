let q1;
let q2;
let q3;
let q4;
let q5;
let ans1;
let ans2;
let ans3;
let ans4;
let ans5;
let answers = [];
let submitButton;
let database;
let submitButtonRef;
var name;

function setup(){
    database = firebase.database();

    submitButtonRef = database.ref("/");
    // submitButtonRef.on("value");
    name = prompt("What is your name", "Harry Potter");

    createCanvas(windowWidth, windowHeight);
    let title = createElement('h1');
    title.html('Student survey');
    title.position(width / 2, 20);

    q1 = createElement('h2');
    q1.html('1.Would you like the school to allow the students to get electronic gadgets to school?')
    q1.position(20, height / 10);

    q2 = createElement('h2');
    q2.html('2.Would you like the computer period to be more interactive and not only homeworks and classworks?')
    q2.position(20, height / 7);
    
    q3 = createElement('h2');
    q3.html('3. Would you like the school to allow students to get complex stuff like rubiks cubes and non-curriculam books?')
    q3.position(20, height / 5.3);
    
    q4 = createElement('h2');
    q4.html('4. Would you like the teachers to treat you in terms of how much knowledge you have and not in how much marks you got in the exam?')
    q4.position(20, height / 4.3);

    q5 = createElement('h2');
    q5.html('5.Would you like the school to be very strict in terms of garment?');
    q5.position(20, height / 3)

    ans1 = createRadio();
    ans1.option('yes');
    ans1.option('no');
    ans1.position(20, height / 6.75);

    ans2 = createRadio();
    ans2.option('yes');
    ans2.option('no');
    ans2.position(20, height / 5.3);
    
    ans3 = createRadio();
    ans3.option('yes');
    ans3.option('no');
    ans3.position(20, height / 4.3);
       
    ans4 = createRadio();
    ans4.option('yes');
    ans4.option('no');
    ans4.position(20, height / 3.3);

    ans5 = createRadio();
    ans5.option('yes');
    ans5.option('no');
    ans5.position(20, height / 2.6);

    submitButton = createButton('submit')
    submitButton.position(width - (width / 8),height -( height/ 8));
    submitButton.mousePressed(UploadFiles)
}

function draw(){
    background(255);

}



function UploadFiles(){
    answers.push(ans1.value());
    answers.push(ans2.value());
    answers.push(ans3.value());
    answers.push(ans4.value());
    answers.push(ans5.value());
    console.log(answers);
    database.ref('ans').set({
        'ans' : answers
    })
}