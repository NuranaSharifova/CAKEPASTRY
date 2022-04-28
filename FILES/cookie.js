function send() {

    var elem1 = document.getElementById("first_name").value;
    var elem2 = document.getElementById("last_name").value;
    document.cookie = `firstName=${elem1}; expires=Sat, 30 Apr 2022 12:40:14 +0000; path=/; domain=localhost;`
    document.cookie = `lastName=${elem2}; expires=Sat, 30 Apr 2022 12:40:14 +0000; path=/; domain=localhost;`

}