<template>
    <div>
        <b-container fluid>
            <b-row style="color:#fff;padding-top:15px;padding-bottom:20px;">
                <b-col sm="12">
                    <h3><font-awesome-icon icon="heartbeat" style="font-size:22px;color:#d8dce6;" /> ข้อมูลประจำวัน</h3>
                </b-col>
                <b-col sm="12">
                    <b-card-text style="font-size:12px;color:#b2bec3;">อัพเดทข้อมูลล่าสุด {{statTodayData.UpdateDate}}</b-card-text>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="12">
                    <b-card-group deck>
                        <b-card text-variant="white" title="ติดเชื้อสะสม" style="background:#313c5f;">
                            <b-card-text class="text-center">
                                <h1 style="color:#65dd9b;">{{numberWithCommas(statTodayData.Confirmed)}}</h1>
                            </b-card-text>
                            <b-card-text class="text-left">
                                <span style="font-size:14px;color:#b2bec3;">เพิ่มขึ้น {{numberWithCommas(statTodayData.NewConfirmed)}} ราย</span>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" title="หายแล้ว" style="background:#313c5f;">
                            <b-card-text class="text-center">
                                <h1 style="color:#347fd5;">{{numberWithCommas(statTodayData.Recovered)}}</h1>
                            </b-card-text>
                            <b-card-text class="text-left">
                                <span style="font-size:14px;color:#b2bec3;">เพิ่มขึ้น {{numberWithCommas(statTodayData.NewRecovered)}} ราย</span>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" title="รักษาอยู่ใน รพ." style="background:#313c5f;">
                            <b-card-text class="text-center">
                                <h1 style="color:#ffc137;">{{numberWithCommas(statTodayData.Hospitalized)}}</h1>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" title="เสียชีวิต" style="background:#313c5f;">
                            <b-card-text class="text-center">
                                <h1 style="color:#F65164;">{{numberWithCommas(statTodayData.Deaths)}}</h1>
                            </b-card-text>
                            <b-card-text class="text-left">
                                <span style="font-size:14px;color:#b2bec3;">เพิ่มขึ้น {{numberWithCommas(statTodayData.NewDeaths)}} ราย</span>
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>          
            <general-stat/>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'
import GeneralStat from './General_stat'

export default {
    data () {
        return {
            statTodayData: ''
        }
    },
    components: {
        'general-stat': GeneralStat
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
    h3 {
        color: #d8dce6;
    }
    .card-title {
        color: #d8dce6;
    }
    .container {
        text-align: center;
    }
    /* .card {
        background:#313c5f;
    } */
    .card-title {
        font-size: 18px;
    }
</style>