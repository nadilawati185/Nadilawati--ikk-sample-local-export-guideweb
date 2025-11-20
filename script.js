// Fungsi utama untuk melakukan semua perhitungan ekspor
function calculateExportValues() {
    // --- 1. Ambil nilai input dari form ---
    
    const netWeight = parseFloat(document.getElementById('netWeight').value) || 0;
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value) || 0;
    // Freight Cost Raw digunakan sebagai nilai Freight yang sudah diestimasikan/diberikan oleh GA
    const freightCostRaw = parseFloat(document.getElementById('freightCostRaw').value) || 0; 
    const usdRate = parseFloat(document.getElementById('usdRate').value) || 1; 
    
    // Ambil nilai dimensi untuk Volume
    const lengthCm = parseFloat(document.getElementById('lengthCm').value) || 0;
    const widthCm = parseFloat(document.getElementById('widthCm').value) || 0;
    const heightCm = parseFloat(document.getElementById('heightCm').value) || 0;

    // --- 2. Perhitungan Financial (Sesuai Urutan dan Rumus Step 12) ---
    
    // A. FOB = Net Weight (kg) × Harga Barang ÷ 1000
    // Asumsi: "Harga Barang" adalah pricePerKg (harga per unit/kg)
    const fob = (netWeight * pricePerKg) / 1000;
    
    // B. Invoice = Freight ÷ Dollar Rate (hari ini)
    // Menggunakan freightCostRaw sebagai nilai Freight yang sudah diketahui untuk mencari Invoice.
    let invoice = 0;
    if (usdRate !== 0) {
        invoice = freightCostRaw / usdRate;
    }
    
    // C. Freight Total = Invoice - FOB
    const freightTotal = invoice - fob;

    // --- 3. Perhitungan Volume ---
    
    // Volume (m³) = Panjang × Lebar × Tinggi ÷ 1,000,000 (dari cm ke m³)
    const volumeM3 = (lengthCm * widthCm * heightCm) / 1000000;

    // --- 4. Tampilkan Hasil ke Result Cards ---
    
    // Tampilkan nilai FOB (dengan 2 desimal)
    document.getElementById('fobValue').textContent = '$' + fob.toFixed(2);
    
    // Tampilkan nilai Invoice (dengan 2 desimal)
    document.getElementById('invoiceAmount').textContent = '$' + invoice.toFixed(2);
    
    // Tampilkan nilai Freight Total (dengan 2 desimal)
    document.getElementById('freightTotalCalculated').textContent = '$' + freightTotal.toFixed(2);
    
    // Tampilkan nilai Volume (dengan 6 desimal)
    document.getElementById('volumeM3').textContent = volumeM3.toFixed(6);
}

// Event Listener untuk menjalankan perhitungan saat halaman dimuat dan setiap kali input berubah
document.addEventListener('DOMContentLoaded', () => {
    const calculatorForm = document.getElementById('export-calculator');
    
    // Jalankan perhitungan awal untuk menampilkan nilai $0.00
    calculateExportValues(); 

    if (calculatorForm) {
        // Tambahkan event listener ke semua input bertipe 'number'
        const inputs = calculatorForm.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.addEventListener('input', calculateExportValues);
        });
    }
});