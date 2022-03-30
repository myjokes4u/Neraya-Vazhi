const post = {
    bismi: "بسم الله الرحمن الرحيم",
    dua: "اللّه معــي اللّه نــاظري اللّه شــاهـدي",
    subject_ml: "വിഷയം മലയാളം",
    subject_en: "Subject English",
    fSpeech_ml: "ഫുൾ സ്പീച്ച് മലയാളം",
    fSpeech_en: "Full Speech English",
    usthad_ml: "ഉസ്താദ് മലയാളം",
    usthad_en: "Usthad English",
    date: "ദിവസം",
    place_ml: "സ്ഥലം മലയാളം",
    place_en: "Place English",
    description: "വിവരണം മലയാളം",
    category: "",
    contents: "",
    thumbnail: "/images/nv-icon.png",
    duration: "0:00:00 - MIN",
    size: "0.00 - MB",
    file: ""
};

$(document).ready(function(){
$("#bismi").text(post.bismi);
$("#dua").text(post.dua);
$("#subject_ml").text(post.subject_ml);
$("#subject_en").text(post.subject_en);
$("#fSpeech_ml").text(post.fSpeech_ml);
$("#fSpeech_en").text(post.fSpeech_en);
$("#usthad_ml").text(post.usthad_ml);
$("#usthad_en").text(post.usthad_en);
$("#date").text(post.date);
$("#place_ml").text(post.place_ml);
$("#place_en").text(post.place_en);
$("#description").text(post.description);
$("#thumbnail").attr("src", post.thumbnail);
$("#duration").text(post.duration);
$("#size").text(post.size);

    $("#tab-link").click(function(){
        const about = document.getElementById("about-tab");
        const contact = document.getElementById("contact-tab");
        $("#about-tab").removeClass("active");
        $("#about").removeClass(" show active");
        $("#contact-tab").addClass("active");
        $("#contact").addClass(" show active");
        about.setAttribute('aria-selected', false);
        contact.setAttribute('aria-selected', true);
    });
    $("#star").click(function(){
        const sc= $("#star i").attr("class");
        var star= sc == "uil uil-favorite" ? "uis uis-favorite" : "uil uil-favorite" ;
        $("#star i").attr("class", star);
    });
});
