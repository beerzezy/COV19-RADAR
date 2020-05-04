<template>
    <div>
        <b-row style="color:#fff;padding-top:30px;padding-bottom:20px;">
            <b-col sm="12">
                <h5 style="color:#d8dce6;"><font-awesome-icon icon="chart-bar" style="font-size:22px;color:#d8dce6;"/> สถิติทั่วไป</h5>
            </b-col>
            <b-col sm="12">
                <b-card-text style="font-size:12px;color:#b2bec3;">อัพเดทข้อมูลล่าสุด {{UpdateDate}}</b-card-text>
            </b-col>
        </b-row>
        <b-row style="padding-bottom:40px;">
            <b-col sm="12">
                <b-card-group deck>
                    <b-card text-variant="white" style="background:#313c5f;">
                        <p style="color:#d8dce6;"><font-awesome-icon icon="viruses" style="font-size:22px;color:#d8dce6;"/>  แยกตามจังหวัด</p>
                        <div class="tableFixHead">
                            <table class="table table-striped borderless">
                                <thead>
                                    <tr>
                                        <th>จังหวัด</th>
                                        <th scope="col">ติดเชื้อสะสม</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(value, key) in statCaseSumData" :key="key">
                                        <td style="color:#d8dce6;">{{key}}</td>
                                        <td style="color:#65dd9b;">{{value}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-card>
                    <b-card text-variant="white" style="background:#313c5f;">
                        <p style="color:#d8dce6;"><font-awesome-icon icon="flag" style="font-size:22px;color:#d8dce6;"/> สัญชาติ</p>
                        <canvas id="graph" width="700" height="300" style="display: block; width: 770px; height: 385px;"></canvas>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

export default {
    data () {
        return {
            statCaseSumData: '',
            UpdateDate: ''
        }
    },
    mounted () {
        this.getCovid19StatToday()
        this.getNation()
        this.getUpdateDate()
    },
    methods: {
        getUpdateDate () {
            axios
                .get('/cases/sum')
                .then(res => {
                    this.UpdateDate = res.data.UpdateDate
                })
                .catch(err => { console.log(err) })
        },
        getCovid19StatToday () {
            axios
                .get('/cases/sum')
                .then(res => {
                    this.statCaseSumData = res.data.Province
                })
                .catch(err => { console.log(err) })
        },
        getNation () {
            var vm = this
            axios
                .get('/cases/sum')
                .then(res => {
                    vm.nationHorGraph(res.data.Nation)
                })
                .catch(err => { console.log(err) })
        },
        nationHorGraph (data) {
            
            var value = Object.values(data)
            var keys = Object.keys(data)
            var valueOne = value[0]
            var valueTwo = value[1]
            var valueThree = value[2]
            var valueFour = value[3]
            var valueFive = value[4]
            var valueSix = value[5]
            var keysOne = keys[0]
            var keysTwo = keys[1]
            var keysThree = keys[2]
            var keysFour = keys[3]
            var keysFive = keys[4]
            var keysSix = keys[5]
            
            var ctx = document.getElementById('graph').getContext('2d')
            var bar = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                    labels: [keysOne, keysTwo, keysThree, keysFour, keysFive, keysSix],
                    datasets: [
                        {
                            labels: [keysOne, keysTwo, keysThree, keysFour, keysFive, keysSix],
                            data: [valueOne, valueTwo, valueThree, valueFour, valueFive, valueSix],
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }
                    ],
                },
                options: {
                    legend: {
                        display: false
                        // position: 'bottom',
                        // onClick: (e) => e.stopPropagation(),
                        // labels: {
                        //     fontColor: '#d8dce6'
                        // }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: '#d8dce6',
                                //fontFamily: 'Prompt',
                                stepSize: 1,
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: '#d8dce6',
                                stepSize: 1,
                                beginAtZero: true
                            }
                        }]
                    }
                }
            })
        }
    }
}
</script>

<style>
    .tableFixHead {
        overflow-y: auto;
        height: 400px;
    }
    .tableFixHead table {
        border-collapse: collapse;
        width: 100%;
    }
    .tableFixHead th, .tableFixHead td {
        padding: 8px 16px;
    }
    .tableFixHead th {
        position: sticky;
        top: 0;
        background: #262f50;
        color: #fff;
    }
    .table tbody > tr > td { 
        border-top: none; 
        font-size: 14px;
    }
    .table thead > tr > th { 
        border: none; 
        font-size: 14px;
    }
    .table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
        background-color: #1f2847;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #313c5f; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #1f2847; 
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    
</style>
