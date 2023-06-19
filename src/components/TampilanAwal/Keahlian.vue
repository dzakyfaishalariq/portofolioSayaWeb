<template>
    <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom text-white">My Specialty</h2>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div class="col d-flex flex-column align-items-start gap-2">
                <h2 class="fw-bold text-white">This section describes most of my expertise</h2>
                <p class="text-white">My expertise is related to my ability to manage technology in software and
                    other skills.</p>
            </div>

            <div class="col">
                <div class="row row-cols-1 row-cols-sm-2 g-4">
                    <div class="col d-flex flex-column gap-2">
                        <div class=" p-1 m-1">
                            <font-awesome-icon icon="fa-solid fa-server" class="besarkanICon" />
                        </div>
                        <h4 class=" text-white">Website Developer</h4>
                        <p class=" text-white">I can build a complete website with a backend and frontend side or what is
                            called a fullstake developer.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div class=" p-1 m-1">
                            <font-awesome-icon icon="fa-solid fa-database" class="besarkanICon" />
                        </div>

                        <h4 class=" text-white">Science Data</h4>
                        <p class=" text-white">I am able to process data using javascript and python syntax. Both
                            large and small scale data, both on local and server.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div class=" p-1 m-1">
                            <font-awesome-icon icon="fa-solid fa-florin-sign" class="besarkanICon" />
                        </div>
                        <h4 class="text-white">Algorithm Design</h4>
                        <p class="text-white">I am able to design and analyze an algorithm well.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div class=" p-1 m-1">
                            <font-awesome-icon icon="fa-solid fa-people-group" class="besarkanICon" />
                        </div>
                        <h4 class=" text-white">Work In Groups</h4>
                        <p class="text-white">I am able to work in groups when creating a project.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Keahlian',
}
</script>
<style>
.besarkanICon {
    font-size: 50px;
    color: rgb(253, 253, 253);
}
</style>