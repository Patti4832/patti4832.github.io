/*

Header

*/

var latestitems = `
    <h3>Aktuelles</h3>
    <h4><a href="https://patti4832.github.io/Anwendungen/#MultiCopy">MultiCopy</a></h4>
    <h4><a href="https://patti4832.github.io/Anwendungen/#IoTDatabaseServer">IoT Database Server</a></h4>
`;

var navigationitems = `
    <h3>Navigation</h3>
    <ul>
        <li><a href="https://github.com/Patti4832">Github</a></li>
        <br>
        <li><a href="https://patti4832.github.io/Profile">Profil</a></li>
        <br>
        <li><a href="https://patti4832.github.io/">Home</a></li>
        <br>
        <li><a href="https://patti4832.github.io/Mikrocontroller/">Mikrocontroller</a>
        <ol>
            <li><a href="https://patti4832.github.io/Mikrocontroller/#arduino">Arduino</a></li>
            <li><a href="https://patti4832.github.io/Mikrocontroller/#attiny13a">ATTiny13a</a></li>
            <li><a href="https://patti4832.github.io/Mikrocontroller/#atmega16820pu">ATMega168-20PU</a></li>
        </ol>
        </li>
        <br>
        <li><a href="https://patti4832.github.io/Webseiten/">Webseiten</a>
        <ol>
            <li><a href="https://patti4832.github.io/Webseiten/#html">HTML</a></li>
            <li><a href="https://patti4832.github.io/Webseiten/#css">CSS</a></li>
            <li><a href="https://patti4832.github.io/Webseiten/#js">JavaScript</a></li>
        </ol>
        </li>
        <br>
        <li><a href="https://patti4832.github.io/Anwendungen/">Anwendungen</a></li>
        <br>
        <li><a href="https://patti4832.github.io/Apps/">Android Apps</a></li>
        <br>
        <li><a href="https://patti4832.github.io/Hausautomation/">Hausautomation</a></li>
        <br>
        <li><a href="https://patti4832.github.io/Projektarbeit/">Projektarbeit</a></li>
    </ul>
`;

var footeritems = `
    <p><a href="https://patti4832.github.io/impressum.html">Kontakt</a></p>
`;

function printer(objid, printtext, pto) {
    var left = 0;
    let printit = setInterval(function () {
        if (left >= printtext.length) { 
            clearInterval(printit);
        } else {
            document.getElementById(objid).innerHTML += printtext.charAt(left);
        }
        left += 1;
    }, pto);
}

function allstarter(){
    var objid = "pmain1";
    var outp = " Willkommen auf meiner Webseite!";
    printer(objid, outp, 50);
    printer("headl", "Patti4832 - Github Blog", 100);
    loadnav();
    loadaside();
    loadfooter();
}

function loadnav(){
    document.getElementById("navbar").innerHTML = navigationitems;
}

function loadaside(){
    document.getElementById("a1").innerHTML = latestitems;
}

function loadfooter(){
    document.getElementById("f1").innerHTML = footeritems;
}
