var states = Array("Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal");

var bloodGroup = Array("O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+");

function getStates() {

    for (let i = 0; i < states.length; i++) {
        document.getElementById("get_states").innerHTML += ("<option value=\"" + states[i] + "\">" + states[i] + "</option>");
    }
    document.getElementById("get_states").setAttribute("onclick", "");
}

function getBloodGroup() {
    for (let i = 0; i < bloodGroup.length; i++) {
        document.getElementById("blood_group").innerHTML += ("<option value=\"" + bloodGroup[i] + "\">" + bloodGroup[i] + "</option>");
    }
    document.getElementById("blood_group").setAttribute("onclick", "");
}