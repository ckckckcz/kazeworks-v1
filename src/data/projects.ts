import { ProjectData } from "@/types/project";
import TrenPenjualan from "@/app/project/data/trenPenjualan.png";
import TotalPenjualanRegion from "@/app/project/data/totalPenjualanRegion.png";
import DiskonKeuntungan from "@/app/project/data/diskonKeuntungan.png";
import TotalKeuntungan from "@/app/project/data/totalKeuntungan.png";
import DistribusiUmur from "@/app/project/data/distribusiUmur.png"
import hubunganUmur from "@/app/project/data/hubunganUmur.png"
import rataRataPengeluaran from "@/app/project/data/rataRataPengeluaran.png"

export const projects: ProjectData[] = [
  {
    id: "superstore-analysis",
    title: "Analisis Penjualan & Keuntungan Superstore",
    subtitle: "Studi Kasus Data Analyst #1",
    tools: ["Python", "Excel", "Tableau", "Pandas", "Matplotlib"],
    date: "Oktober 2025",
    summary: `Proyek ini bertujuan untuk melakukan analisis mendalam terhadap data penjualan retail guna memahami performa bisnis dari berbagai sudut pandang, meliputi kategori produk, wilayah penjualan, serta perkembangan tren dari waktu ke waktu. Dataset yang digunakan berasal dari Superstore Dataset yang tersedia secara publik di Kaggle, berisi data transaksi penjualan produk dari berbagai segmen pelanggan di beberapa wilayah.

Langkah awal dilakukan melalui proses data cleaning menggunakan Python (pandas) untuk memastikan kualitas data yang digunakan dalam analisis. Beberapa proses yang dilakukan mencakup penghapusan duplikasi, penanganan nilai kosong, konversi format tanggal, serta pembuatan kolom turunan seperti Year untuk analisis berbasis waktu.

Setelah data bersih, dilakukan analisis eksploratif untuk mencari pola dan hubungan antarvariabel. Hasilnya divisualisasikan dalam bentuk grafik interaktif yang menggambarkan tren penjualan, tingkat keuntungan, serta distribusi kinerja per kategori produk dan wilayah penjualan. Beberapa visualisasi dibuat menggunakan Matplotlib dan Seaborn, sementara Excel digunakan untuk membuat Pivot Table dan Dashboard guna menampilkan hasil analisis dengan cara yang lebih intuitif.

Melalui analisis ini, diperoleh beberapa temuan penting:

    1. Terjadi peningkatan signifikan pada total penjualan dan keuntungan dari tahun ke tahun antara 2014–2017.
    2. Produk dalam kategori Technology memberikan kontribusi terbesar terhadap keuntungan perusahaan.
    3. Kategori Furniture memiliki margin keuntungan yang relatif kecil meskipun memiliki volume penjualan yang tinggi.
    4. Wilayah West menjadi area dengan penjualan tertinggi, sementara wilayah South menunjukkan performa paling rendah.
    5. Diskon yang terlalu besar terbukti berdampak negatif terhadap keuntungan bersih, terutama pada transaksi dengan margin tipis.

Keseluruhan proyek ini menunjukkan bagaimana penerapan data analytics tools seperti Python dan Excel dapat membantu bisnis dalam memahami performa penjualan secara kuantitatif dan mendukung pengambilan keputusan strategis berbasis data (data-driven decision making). 

Selain itu, hasil visualisasi juga dirancang dalam bentuk dashboard interaktif agar mudah diinterpretasikan oleh manajemen dan pihak non-teknis.`,
    images: [
      {
        src: TrenPenjualan.src,
        alt: "Tren Penjualan dan Keuntungan per Tahun",
        width: 600,
        height: 400,
      },
      {
        src: TotalPenjualanRegion.src,
        alt: "Total Penjualan per Wilayah",
        width: 600,
        height: 400,
      },
      {
        src: DiskonKeuntungan.src,
        alt: "Hubungan Antara Diskon dan Keuntungan",
        width: 600,
        height: 400,
      },
      {
        src: TotalKeuntungan.src,
        alt: "Total Keuntungan per Kategori Produk",
        width: 600,
        height: 400,
      },
    ],
    insights: ["Penjualan meningkat signifikan setiap tahun (2014–2017).", "Produk kategori Technology memberikan profit tertinggi.", "Diskon besar berdampak negatif pada keuntungan."],
    kaggleLink: "https://www.kaggle.com/datasets/vivek468/superstore-dataset-final",
    githubLink: "https://github.com/ckckckcz/template-process-data-analsyt",
  },
  {
    id: "customer-spending-analysis",
    title: "Analisis Pola Pengeluaran Pelanggan",
    subtitle: "Studi Kasus Data Analyst #2",
    tools: ["Python", "Google Colab", "Pandas", "Matplotlib", "Seaborn"],
    date: "Oktober 2025",
    summary: `Proyek ini bertujuan untuk menganalisis perilaku pelanggan melalui data pengeluaran berdasarkan faktor demografis seperti usia dan total belanja. Dataset yang digunakan merupakan data publik dari Kaggle berisi informasi pelanggan beserta detail transaksi mereka. Analisis dilakukan untuk memahami tren konsumsi, korelasi antarvariabel, serta pola pengeluaran yang dapat membantu perencanaan strategi pemasaran.

Tahapan awal dimulai dengan proses *data cleaning* menggunakan Python (pandas) di Google Colab. Langkah-langkah yang dilakukan meliputi penghapusan nilai kosong, normalisasi format data, serta pembuatan kolom baru seperti \`Total_Spent\` untuk menghitung total pengeluaran setiap pelanggan berdasarkan kategori produk.

Selanjutnya dilakukan *exploratory data analysis (EDA)* untuk memahami struktur dan distribusi data. Beberapa teknik visualisasi digunakan untuk menampilkan hubungan antara variabel demografis dan perilaku belanja pelanggan. Misalnya, analisis distribusi umur pelanggan dilakukan menggunakan *histogram*, sedangkan hubungan antara umur dan total pengeluaran divisualisasikan menggunakan *scatter plot*.

Dari hasil analisis diperoleh beberapa temuan penting:
1. Mayoritas pelanggan berada pada rentang usia produktif (25–35 tahun).
2. Pelanggan berusia 30–40 tahun cenderung memiliki total pengeluaran lebih tinggi dibanding kelompok usia lainnya.
3. Tidak terdapat korelasi yang kuat antara umur dan total pengeluaran, namun tren menunjukkan peningkatan moderat pada usia matang.
4. Pola pengeluaran pelanggan relatif konsisten di sebagian besar kategori produk.

Hasil analisis ini menggambarkan bagaimana teknik eksplorasi data sederhana dapat digunakan untuk memahami perilaku konsumen. Visualisasi membantu mengidentifikasi kelompok pelanggan potensial yang dapat menjadi target utama dalam strategi pemasaran berbasis data (data-driven marketing). 
Selain itu, seluruh proses analisis dapat dijalankan sepenuhnya di Google Colab tanpa memerlukan setup lokal yang kompleks.`,
    images: [
      {
        src: DistribusiUmur.src,
        alt: "Distribusi Umur Pelanggan",
        width: 600,
        height: 400,
      },
      {
        src: hubunganUmur.src,
        alt: "Hubungan Umur dengan Total Pengeluaran",
        width: 600,
        height: 400,
      },
      {
        src: rataRataPengeluaran.src,
        alt: "Total Pengeluaran per Kategori Produk",
        width: 600,
        height: 400,
      },
    ],
    insights: ["Pelanggan usia 25–35 tahun mendominasi data pembelian.", "Kelompok usia matang (30–40 tahun) memiliki rata-rata pengeluaran tertinggi.", "Tidak terdapat korelasi kuat antara umur dan pengeluaran total."],
    kaggleLink: "https://www.kaggle.com/datasets/imakash3011/customer-personality-analysis",
    githubLink: "https://github.com/riovaldo/customer-spending-analysis",
  },
];
