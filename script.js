document.getElementById('rdvForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const titre = document.getElementById('tittre').value;
    const nom = document.getElementById('nom').value;
    const date = document.getElementById('date').value;
    const heure = document.getElementById('heure').value;

    const contenu = `
    Reçu de rendez-vous
    Révérend ${titre} ${nom}
    Votre rendez-vous est fixé le ${date} à ${heure}.
    Merci de votre confiance.
    `;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(contenu, 10, 10);
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);

    const lien = document.getElementById('lienPdf');
    lien.href = url;
    lien.style.display = 'block';
    lien.innerText = 'Télécharger le reçu de ${nom}';
});