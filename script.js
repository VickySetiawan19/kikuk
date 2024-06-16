function cekKhodam() {
    const name = document.getElementById('nameInput').value.trim();
    const khodams = ["Sempak Bolong", "Sapu Lidi", "Ketoprak", "Knalpot Mio", "Semut Birahi", "Tempe goreng", "Anime", "Batok Casan","Kuda Lumping","Stik Ps", "Tidak Ada Khodamnya"];
    
    if (name === "") {
        document.getElementById('result').textContent = "Silakan masukkan nama Anda!";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[randomIndex];
    
    document.getElementById('result').textContent = `${name}, khodam Anda adalah: ${khodam}`;
}
