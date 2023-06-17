<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class=" navbar-brand">
                <h3>Dzaky Faishalariq</h3>
            </router-link>
            <a class="navbar-brand text-white" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white disabled">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Navbar',
    
}
</script>
<style>
.nav-link:hover {
    color: #8fe829 !important;
    border-bottom: 2px solid #8fe829 !important;
    animation: animationBorder 0.5s ease-in-out forwards;
}

@keyframes animationBorder {
    0% {
        /* transform: scaleX(1); */
        width: 0%;
    }

    50% {
        /* transform: scaleX(1.5); */
        width: 50%;
    }

    100% {
        /* transform: scaleX(1); */
        width: 100%;
    }
}
</style>