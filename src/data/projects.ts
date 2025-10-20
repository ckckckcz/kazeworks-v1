import { ProjectData } from "@/types/project";
import TrenPenjualan from "@/app/project/data/trenPenjualan.png";
import TotalPenjualanRegion from "@/app/project/data/totalPenjualanRegion.png";
import DiskonKeuntungan from "@/app/project/data/diskonKeuntungan.png";
import TotalKeuntungan from "@/app/project/data/totalKeuntungan.png";

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
];
