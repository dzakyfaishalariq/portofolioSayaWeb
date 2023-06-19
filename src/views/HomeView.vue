<template>
    <Perkenalan />
    <Identitas />
    <ProdukDihasilkan />
    <Keahlian />
    <Teknologi />
</template>

<script>
import Perkenalan from '@/components/TampilanAwal/Perkenalan.vue';
import Identitas from '@/components/TampilanAwal/Identitas.vue';
import ProdukDihasilkan from '@/components/TampilanAwal/ProdukDihasilkan.vue';
import Keahlian from '@/components/TampilanAwal/Keahlian.vue';
import Teknologi from '@/components/TampilanAwal/Teknologi.vue';
export default {
    name: 'HomeView',
    components: {
        Perkenalan,
        Identitas,
        ProdukDihasilkan,
        Keahlian,
        Teknologi
    }
}
</script>
