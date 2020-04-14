
    function index(sender) {
        var input;
        input = document.getElementById("com");
        fr = document.getElementById('frame');
        not = document.getElementById('not');
        notfound = document.getElementById('notfound');

        if(sender.value === "codevidn 1") {
            fr.src = "http://luthfi/master-web/content/layanan.html";
            fr.style.display = "block"
            input.value = "";
            notfound.style.display = "none"
        } else if(sender.value === "codevidn 2"){
            fr.src = "null";
            fr.style.display = "block"
            input.value = "";
            notfound.style.display = "none"
        }else if(sender.value === "codevidn set"){
            fr.src = "null";
            fr.style.display = "block"
            input.value = "";
            notfound.style.display = "none"
        } else if(sender.value === "codevidn 3"){
            fr.src = "null";
            fr.style.display = "block"
            input.value = "";
            notfound.style.display = "none"
        }
        else if(sender.value === "codevidn 4"){
            fr.src = "http://luthfi/master-web/content/media.html";
            fr.style.display = "block"
            input.value = "";
            notfound.style.display = "none"
        }
        else if(sender.value === "codevidn 5"){
            fr.src = "http://luthfi/master-web/content/about.html";
            fr.style.display = "block"
            input.value = "";
            notfound.style.display = "none"
        }
        else if(sender.value === "codevidn 99"){
            fr.src = "http://luthfi/master-web/content/daftar.html";
            fr.style.display = "block"
            input.value = "";
            notfound.style.display = "none"
        }
        else if(sender.value === "codevidn 00"){
            fr.style.display = "none"
            notfound.style.display = "none"
            input.value = "";
        }
        else if(sender.value === "clear"){
            fr.style.display = "none"
            notfound.style.display = "none"
            input.value = "";
        }else {
            // input.placeholder = "mohon isi dengan benar";
            not.value = input;
            notfound.style.display = "block"
            input.value = "";
        }
        
    }

// 