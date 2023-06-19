<template>
    <div class=" mt-5">
        <div class=" container-fluid">
            <div class=" text-center text-white">
                <h1>Project</h1>
                <h4>The application I've made</h4>
            </div>
            <div class="card-group">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mt-2">
                            <img src="@/assets/tampilanUtama.png" alt="gambar proyek" class=" card-img-top">
                            <div class=" card-body">
                                <h5 class=" card-title">Classroom Scheduling</h5>
                                <p class="  card-text">
                                    This application was made at the Bengkulu Ministry of Health Polytechnic as a class room
                                    scheduling management
                                    which will be used by lecturers and study programs. </p>
                                <button class=" btn btn-info" type="button" @click="jalankanAplikasi1">Run
                                    Application</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class=" card mt-2">
                            <img src="@/assets/gambarAplikasiSuhu.png" alt="gambar proyek2" class="card-img-top"
                                height="369px">
                            <div class=" card-body">
                                <h5 class=" card-title">Temperature Conversion</h5>
                                <p class=" card-text">
                                    The application is used to perform temperature conversions in each unit, both from
                                    Celsius,
                                    Farenhed, Remurer, and Kelvin. </p>
                                <a href="https://konversisuhu.netlify.app" target="_blank" class=" btn btn-info">Run
                                    Application</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class=" card mt-2">
                            <img src="@/assets/aplikasiKompresi.png" alt="gambar proyek2" class="card-img-top"
                                height="369px">
                            <div class=" card-body">
                                <h5 class=" card-title">Compression Technique</h5>
                                <p class=" card-text">
                                    This application is used to compress text files in .txt format with the LZW method.
                                </p>
                                <a href="https://kompresilzw.netlify.app" target="_blank" class=" btn btn-info">Run
                                    Application</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProdukDihasilkan',
    methods: {
        jalankanAplikasi1: function () {
            alert('Maaf, aplikasi ini belum tersedia');
        }
    }
}
</script>
<style></style>