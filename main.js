nameOfTheStudentArray = [];

function submit(){

var displayStudentArray = [];
for (var j = 1; j <= 4; j++){
    var nameOfTheStudent = document.getElementById("nameOfTheStudent"+ j).value;
    
    nameOfStudentArray.push(nameOfTheStudent);
}
console.log(nameOfTheStudentArray);

var lenghtOfNames= nameOfStudentArray.lenght;


for (var k = 0; k < lenghtOfNames; k++){
    displayStudentArray.push("<h4>NOME -" + nameOfTheStudent[k] + "<h4>");
    console.log(displayStudentArray)

    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;
    
    //variavél para remover a vírgula da array
    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas)
    document.querySelector('#displayNameWithoutCommas').innerHTML = removeCommas;

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}

}





//função para organizar
function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displayStudentArraySorting = [];

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) 
    {
        displayStudentArraySorting.push("<h4>NAME - " + nameOfTheStudentArray[k] + "</h4>");
        console.log(displayStudentArraySorting);
    }

    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}