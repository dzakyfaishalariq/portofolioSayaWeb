<template>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary bg-latar-belakang">
        <div class="col-md-6 p-lg-5 mx-auto my-5">
            <img src="@/assets/gambarSaya.png" alt="Gambar Profile"
                class=" rounded-circle img-fluid uabah-ukuran shadow-lg border-3">
            <h1 class="display-3 fw-bold">Fullstack Developer</h1>
            <h3 class="fw-normal text-muted mb-3">Website Creation and Science Data</h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Perkenalan',
}
</script>
<style>
.uabah-ukuran {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
}

.bg-latar-belakang {
    background: linear-gradient(to bottom right, rgb(74, 220, 96), rgb(62, 103, 192), rgba(188, 227, 102, 0));
}
</style>