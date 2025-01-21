document.getElementById('tour-button').addEventListener('click', function (e) {
    e.preventDefault(); 
    const tourData = {
    tourName: "Timeline Tour",
    length: "short",
    complexity: "fun"
    };
    localStorage.setItem('tourData', JSON.stringify(tourData));
    window.location.href = "Object-page.html";
    });