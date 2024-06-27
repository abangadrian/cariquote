const quotes = [
    //Galau
    { quote: "Belajar menghargai ya karena ga semua kecewa bisa di bayar dengan kata maaf", author: "@kodegalau.ig", keywords: ["galau", "perasaan", "percintaaan","patah hati"] },
    { quote: "Percayalah; 'berbicara lembut' kepada perempuan itu jauh lebih baik dari pada 'janji manis' ", author: "kodegalau.ig", keywords: ["motivasi", "galau", "random", "romantis"] },
    { quote: "Mungkin Akan memakan waktu lama bagiku untuk bisa melihatmu tanpa ada perasaan", author: "@ovtnight__", keywords: ["galau", "perasaan", "percintaaan","patah hati"] },
    { quote: "Rasa sakit yang berbeda ketika hatimu menangis tapi matamu tidak", author: "@quiethetic", keywords: ["galau", "perasaan", "percintaaan","patah hati"] },
    { quote: "terima kasih telah membuat hidupku berwarna,tapi sekarang warna itu pudar lagi", author: "@quote_ren", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Jangan berharap masalahmu akan dimudahkan, namun berharaplah kamu akan jadi orang yang lebih kuat.", author: "-", keywords: ["motivasi", "makna hidup", "inspirasi", "random"] },
    { quote: "mengapa kau masih ada di pikiranku, padahal kau sudah tidak lagi disampingku", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "kadang berusaha melupakan seseorang hanya membuat kitasemakin mengingatnya", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "mereka bilang waktu akan menyembuhkan semua luka, tapi bagaimana jika luka itu terlalu dalam", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Mungkin kita ditakdirkan bertemu, tapi tidak untuk bersama", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Kesedihan terbesar adalah merindukan seseorang yang dulu pernah mejadu bagian dari hidupmu", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "ketika seseorang yang kau cintai pergi,seolah olah sebagian dari dirimu hilang bersamanya", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Sulit mencintai seseorang yang tak pernah bisa kumiliki sepenuhnya", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Aku tersenyum di luar, tapi hatiku menangis di dalam", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Kita berdua melihat bulan yang sama, tapi dari dua tempat yang berbeda", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Kenangan kita dulu manis, tapi sekarang hanya menjadi pahit dalam ingatan", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Melepaskan seseorang yang sangat berarti itu menyakitkan,tetapi kadang itu adalah hal yang terbaik", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Aku masih meridukanmu, meskipun aku tahu kamu tidak lagi merindukanku", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "Rasa sakit karena kehilanganmu belum hilang, meski waktu telah berlalu", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    { quote: "cinta yang dulu membuatku bahagia, kini menjadi alasan kesedihanku", author: "-", keywords: ["galau", "random", "patah hati", "percintaan"] },
    //islami
    { quote: "Yang bertuhan pasti bertahan", author: "@rkyprt_", keywords: ["motivasi", "islami", "makna hidup", "islam", "dakwah", "agama"] },
    { quote: "Sesungguhnya bersama kesulitan ada kemudahan", author: "al-qur'an 94:6", keywords: ["motivasi", "islami", "makna hidup", "islam", "dakwah", "agama"] },
    { quote: "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya", author: "al-qur'an 2:286", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Barangsiapa bertakwa kepada allah, niscaya dia akan mencukupinya", author: "al-qur'an 65:3", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Ketahuilah, hanya dengan mengingat allah hati menjadi tentram", author: "al-qur'an 13:28", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Allah mencintai orang-orang yang sabar", author: "al-qur'an 3:146", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Kebaikan itu tidak akan pernah berkurang dengan berbagi", author: "Nabi Muhammad", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Orang yang kuat bukanlah yang kuat secara fisik,tapi yang mampu mengendalikan dirinya saat marah", author: "Nabi Muhammad", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Sedekah itu menghapus dosa sebagaimana air memadamkan api", author: "Nabi Muhammad", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Seseunguhnya shalat itu mencegah perbuatan keji dan munkar", author: "al-qur'an 29:45", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Dan janganlah kamu berputus asa dari rahmat allah", author: "al-qur'an 39:53", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Hiduplah didunia seakan-akan kamu seorang musafir atau seorang pengembara", author: "Nabi Muhammad", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Barangsiapa Yang tidak bersyukur kepada manusia, dia tidak bersyukur krpada allah", author: "Nabi Muhammad", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "kesabaran itu cahaya", author: "Nabi Muhammad", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Sedekah tidak akan mengurangi harta", author: "Nabi Muhammad", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Allah bersamamu, jangan takut", author: "al-qur'an 9:40", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    { quote: "Dan kepada allah sajalah kamu bertawakal, jika kamu benar-benar orang yang beriman", author: "al-qur'an 3:146", keywords: ["motivasi", "islami", "islam", "dakwah", "agama"] },
    //berkelas
    { quote: "aku sembuh dengan uangku,bukan orang baru.", author: "@candtive", keywords: ["motivasi", "makna hidup", "random", "berkelas"] },
    { quote: "Carilah tempat dimana kamu dihargai, bukan cuman dibutuhkan lalu selesai", author: "@kode.gram", keywords: ["motivasi", "makna hidup","berkelas", "inspirasi", "random"] },
    { quote: "Awali pagi dengan sarapan,karena kemarin aku coba dengan senyuman", author: "Rama", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "berkelas"] },
    //makna hidup
    { quote: "Ketika kamu merasa kehilangan harapan, ingat bahwa Tuhan telah menciptakan rencana terindah untuk hidup kita..", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "random"] },
    { quote: "Tidak ada istilah gagal dalam hidup, yang ada hanya sukses dan belum berhasil. Jangan menyerah!", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "random" ] },
    { quote: "Ingatlah bahwa tak ada yang abadi di dunia ini, termasuk masalah yang ada dalam hidupmu.Tidak ada kata gagal dalam hidup ini, kecuali saat kamu menyerah menghadapi cobaan.", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "random"] },
    { quote: "Jika kamu hanya bertahan di zona nyaman, maka kamu tak akan pernah tahu banyak hal. Jangan takut mencoba!", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "random"] },
    { quote: "Ada dua tipe orang di dunia ini. Mereka yang mempunyai mimpi besar, dan mereka yang bangun untuk mewujudkannya.", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "random"] },
    { quote: "Saat kamu ingin kembali ke masa lalu, syukurilah hal-hal baik yang kamu punya saat ini.Fokus dengan masa depan memang baik, namun jangan sampai kamu sia-siakan momen bahagia di hari ini.", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses","random"] },
   //sukses
   { quote: "Enjoy your proses, sembunyikan rencanamu, perempuan yang tenang adalah perempuan yang tidak bisa ditebak tindakannya", author: "@abouthify", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses"] },
   { quote: "Bermimpi bukanlah sesuatu yang menyeramkan. Tidak ada yang mustahil di dunia ini jika kamu percaya.", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "random"] }, 
   { quote: "Masa depan adalah milik mereka yang percaya dengan impiannya.", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses","random"] },
   { quote: "Jika untuk bermimpi saja kamu takut, maka kamu adalah orang yang tidak tahu arah masa depanmu.", author: "Unknown", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "kesuksesan"] },
   { quote: "kesuksesan adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan", author: "Colin Powell", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "kesuksesan"] },
   { quote: "Jangan pernah bermimpi tentang kesuksesan,bekerjalah untuk itu", author: "Estee Lauder", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "kesuksesan"] },
   { quote: "Kesuksesan bukan kunci kebahagiaan, kebahagiaan adalah kunci kesuksesan", author: "Albert Swhweitzer", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "kesuksesan"] },
   { quote: "Kunci kkkkkksesan adalah fokus pada tujuan, bukan pada hambatan", author: "Confucius", keywords: ["motivasi", "makna hidup", "inspirasi", "sukses", "kesuksesan"] },

];

function searchQuote() {
    const keyword = document.getElementById('keyword').value.toLowerCase();
    if (!keyword) {
        alert('Please enter a keyword.');
        return;
    }

    const filteredQuotes = quotes.filter(quote => 
        quote.keywords.some(k => k.includes(keyword))
    );

    if (filteredQuotes.length === 0) {
        document.getElementById('quote').textContent = "No quotes found for the entered keyword.";
        document.getElementById('author').textContent = "";
    } else {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];
        document.getElementById('quote').textContent = randomQuote.quote;
        document.getElementById('author').textContent = `dari ${randomQuote.author}`;
    }
}

document.getElementById('search-quote').addEventListener('click', searchQuote);
