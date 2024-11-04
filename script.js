function updateCountdown() {
    const weddingDate = new Date("2025-02-16T17:00:00");
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "¡Es el gran día!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = 
        `Faltan: ${days} días, ${hours} horas y ${minutes} minutos`;
}

setInterval(updateCountdown, 60000);
updateCountdown();

function addToCalendar() {
    const event = {
        title: "Boda Leo & Karen",
        location: "Jardín las Orquídeas, 6 avenida, Guatemala",
        startDate: "2025-02-16T17:00:00",
        endDate: "2025-02-16T22:00:00"
    };

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&location=${encodeURIComponent(event.location)}&dates=${event.startDate.replace(/[-:]/g, '')}/${event.endDate.replace(/[-:]/g, '')}`;
    
    window.open(calendarUrl, '_blank');
}

function openMap() {
    window.open("https://maps.google.com/?q=Jardín+las+Orquídeas+Guatemala", "_blank");
}

function confirmAssistance() {
    const phoneNumber = "50235435006";
    const message = "¡Hola! Confirmo mi asistencia a su boda.";
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}