<template>
    <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom text-white">Mastered technology</h2>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class=" card-title text-center">Bahasa Pemograman</h4>
                    </div>
                    <div class="card-body">
                        <div class=" table-responsive">
                            <table class=" table table-active table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Bahasa Pemograman</th>
                                        <th>Tingkatan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>PHP</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(php)" style="width: 75%">
                                                    75%</div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>JavaScrip</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(javascript)" style="width: 80%">
                                                    80%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Python</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(python)" style="width: 75%">75%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>c++</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(c)" style="width: 45%">45%</div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Java</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(java)" style="width: 45%">45%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class=" card-title text-center">DataBases</h4>
                    </div>
                    <div class="card-body">
                        <div class=" table-responsive">
                            <table class=" table table-active table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>DataBases</th>
                                        <th>Tingkatan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>MySql</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(mysql)" style="width: 85%">85%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>FireBase</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(firebase)" style="width: 75%">75%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>JSON</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(json)" style="width: 75%">75%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class=" card-title text-center">Framework</h4>
                    </div>
                    <div class="card-body">
                        <div class=" table-responsive">
                            <table class=" table table-active table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Framework</th>
                                        <th>Tingkatan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Laravel</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(laravel)" style="width: 90%">90%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Vue.Js</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(vue)" style="width: 75%">75%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>LiveWire</td>
                                        <th>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :class="progress(livewire)" style="width: 85%">85%
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Skills",
    data() {
        return {
            php: 75,
            javascript: 80,
            python: 75,
            c: 45,
            java: 45,
            mysql: 85,
            firebase: 75,
            json: 75,
            laravel: 90,
            vue: 75,
            livewire: 85,
        };
    },
    methods: {
        progress: function (nilai) {
            if (nilai >= 80) {
                console.log(nilai);
                return "bg-success";
            } else if (nilai >= 60) {
                console.log(nilai);
                return "bg-warning";
            } else {
                console.log(nilai);
                return "bg-danger";
            }
        }
    }
}
</script>
