<template>
    <div>
        <b-container fluid>
            <b-row style="color:#fff;padding-top:35px;padding-bottom:20px;">
                <b-col sm="12">
                    <h3>ข้อมูลประจำวัน</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="12">
                    <b-card-group deck>
                        <b-card text-variant="white" title="ติดเชื้อสะสม" >
                            <b-card-text class="text-center">
                                <h1 style="color:#d63031;">{{numberWithCommas(statTodayData.Confirmed)}}</h1>
                            </b-card-text>
                            <b-card-text class="text-left">
                                <span style="font-size:14px;color:#b2bec3;">เพิ่มขึ้น {{numberWithCommas(statTodayData.NewConfirmed)}}</span>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" title="หายแล้ว">
                            <b-card-text class="text-center">
                                <h1 style="color:#6c5ce7;">{{numberWithCommas(statTodayData.Recovered)}}</h1>
                            </b-card-text>
                            <b-card-text class="text-left">
                                <span style="font-size:14px;color:#b2bec3;">เพิ่มขึ้น {{numberWithCommas(statTodayData.NewRecovered)}}</span>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" title="รักษาอยู่ใน รพ.">
                            <b-card-text class="text-center">
                                <h1 style="color:#6c5ce7;">{{numberWithCommas(statTodayData.Hospitalized)}}</h1>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" title="เสียชีวิต">
                            <b-card-text class="text-center">
                                <h1 style="color:#6c5ce7;">{{numberWithCommas(statTodayData.Deaths)}}</h1>
                            </b-card-text>
                            <b-card-text class="text-left">
                                <span style="font-size:14px;color:#b2bec3;">เพิ่มขึ้น {{numberWithCommas(statTodayData.NewDeaths)}}</span>
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            statTodayData: ''
        }
    },
    mounted () {
        this.getCovid19StatToday()
    },
    methods: {
        getCovid19StatToday () {
            axios
                .get('/today')
                .then(res => { 
                    this.statTodayData = res.data 
                })
                .catch(err => { console.log(err) })
        },
        numberWithCommas (val) {
            if (val != undefined) {
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            } else {
                return 0
            }
        }
    }
}
</script>

<style>
    .container {
        text-align: center;
    }
    .card {
        background:#3d3b46;
    }
    .card-title {
        font-size: 18px;
    }
</style>