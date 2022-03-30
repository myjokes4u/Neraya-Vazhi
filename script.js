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
    thumbnail: "images/nv-icon.png",
    duration: "0:00:00 - MIN",
    size: "0.00 - MB",
    file: ""
};

$(document).ready(function(){
$("#post #bismi").text(post.bismi);
$("#post #dua").text(post.dua);
$("#post #subject_ml").text(post.subject_ml);
$("#post #subject_en").text(post.subject_en);
$("#post #fSpeech_ml").text(post.fSpeech_ml);
$("#post #fSpeech_en").text(post.fSpeech_en);
$("#post #usthad_ml").text(post.usthad_ml);
$("#post #usthad_en").text(post.usthad_en);
$("#post #date").text(post.date);
$("#post #place_ml").text(post.place_ml);
$("#post #place_en").text(post.place_en);
$("#post #description").text(post.description);
$("#post #thumbnail").attr("src", post.thumbnail);
$("#post #duration").text(post.duration);
$("#post #size").text(post.size);

$("#favorite #bismi").text(post.bismi);
$("#favorite #dua").text(post.dua);
$("#favorite #subject_ml").text(post.subject_ml);
$("#favorite #subject_en").text(post.subject_en);
$("#favorite #fSpeech_ml").text(post.fSpeech_ml);
$("#favorite #fSpeech_en").text(post.fSpeech_en);
$("#favorite #usthad_ml").text(post.usthad_ml);
$("#favorite #usthad_en").text(post.usthad_en);
$("#favorite #date").text(post.date);
$("#favorite #place_ml").text(post.place_ml);
$("#favorite #place_en").text(post.place_en);
$("#favorite #description").text(post.description);
$("#favorite #thumbnail").attr("src", post.thumbnail);
$("#favorite #duration").text(post.duration);
$("#favorite #duration").text(post.duration);
$("#favorite #size").text(post.size);

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
    $("#post #star").click(function(){
        const sc= $("#star i").attr("class");
        var star= sc == "uil uil-favorite" ? "uis uis-favorite" : "uil uil-favorite" ;
        $("#star i").attr("class", star);
    });
    $("#favorite #star").click(function(){
        const sc= $("#star i").attr("class");
        var star= sc == "uil uil-favorite" ? "uis uis-favorite" : "uil uil-favorite" ;
        $("#star i").attr("class", star);
    });
});
