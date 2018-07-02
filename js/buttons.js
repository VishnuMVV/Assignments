window.onload = function but() {
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");
    var yesVotes = 0;
    noButton.onclick = countNoVotes;
    yesButton.onclick = function(){
        yesVotes++;
        var yesVotesMessage = document.getElementById("yesVotes");
        yesVotesMessage.innerHTML = "# Yes Votes is : "+yesVotes;
    }
}