switch (pageTitle) {
    case "Shivan Anand":
        $("a[href='/']").addClass("current-link");
        break;

    case "Shivan Anand - Resume":
        $("a[href='/resume']").addClass("current-link");
        break;

    case "Shivan Anand - Projects":
        $("a[href='/projects']").addClass("current-link");
        break;

    case "Shivan Anand - Blog":
        $("a[href='/blog']").addClass("current-link");
        break;

}

const date = new Date();
const currentYear = date.getFullYear();
$("footer").text("© Shivan Anand " + currentYear);