<template>
    <div class="p-5 mb-4 bg-body-tertiary rounded-1">
        <div class="container-fluid baground-gambar py-5">
            <div class="row">
                <div class=" col-lg-7">
                    <h1 class="display-5 fw-bold">Self introduction</h1>
                    <p class="fs-4 rata-tulisan">
                        Introducing my name is Dzaky Faishalariq, I am a student at Bengkulu University, I live in Bengkulu
                        Province, Bengkulu City, Jalan Bentiring Guru Housing, Indonesia. I have a hobby of computer
                        programming and studying science and technology. I love what's new in both science and technology,
                        often browse scientific research or magazines on emerging technologies, and now want to study
                        artificial intelligence to improve new products. I want to put my thoughts in computer science and
                        make it useful for humans in the future.
                    </p>
                </div>
                <div class=" col-lg-5">
                    <img src="@/assets/gambarSaya.png" alt="Gambar Profile" class="img-fluid float-end bingkaiGambar">
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
.rata-tulisan {
    text-align: justify;
}

.baground-gambar {
    background-image: url(@/assets/gambar_teknologi1.png);
    background-repeat: no-repeat;
    /* pindahi kekanan */
    background-position: right;
}

.bingkaiGambar {
    border: 5px solid rgb(28, 38, 146);
    /* buat berbayang */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>