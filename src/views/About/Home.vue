<template>
    <div>
        <b-container fluid>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;">
                <b-col sm="12" style="text-align:center;padding-top:10px">
                    <b-img style="width:200px;height:200px;border-radius:100px;border:5px solid #dc3545;" :src="require('../../../src/assets/avatar.png')" fluid alt="Responsive image"></b-img>
                </b-col>
                <b-col sm="12" style="text-align:center;padding-top:15px;color:#d8dce6;">
                    <h2>Phanudet Khawilai <b-img style="width:37px;height:26px;border-radius:4px;" :src="require('../../../src/assets/flag-thai.png')" fluid alt="Responsive image"></b-img></h2>
                </b-col>
                <b-col sm="12" style="text-align:center;">
                    <b-card-text style="font-size:16px;color:#b2bec3;">Full Stack Developer</b-card-text>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;">
                <b-col class="about-content" sm="12">
                    <b-card-text style="font-size:16px;color:#d8dce6;">โรคติดเชื้อไวรัสโคโรนา 2019 (COVID‑19) เป็นโรคติดต่อที่เกิดจากเชื้อไวรัสสายพันธุ์ใหม่ โรคติดเชื้อไวรัสโคโรนา 2019 (COVID‑19) เป็นโรคติดต่อที่เกิดจากเชื้อไวรัสสายพันธุ์ใหม่</b-card-text>
                    <b-card-text style="font-size:16px;color:#d8dce6;">โรคติดเชื้อไวรัสโคโรนา 2019 (COVID‑19) เป็นโรคติดต่อที่เกิดจากเชื้อไวรัสสายพันธุ์ใหม่ โรคติดเชื้อไวรัสโคโรนา 2019 (COVID‑19) เป็นโรคติดต่อที่เกิดจากเชื้อไวรัสสายพันธุ์ใหม่</b-card-text>
                    <b-card-text style="font-size:16px;color:#d8dce6;">โรคติดเชื้อไวรัสโคโรนา 2019 (COVID‑19) เป็นโรคติดต่อที่เกิดจากเชื้อไวรัสสายพันธุ์ใหม่ โรคติดเชื้อไวรัสโคโรนา 2019 (COVID‑19) เป็นโรคติดต่อที่เกิดจากเชื้อไวรัสสายพันธุ์ใหม่</b-card-text>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;">
                <b-col class="about-content" sm="12" style="text-align:center;">
                    <b-card-text>
                        <a href="mailto:phanudetkawilai2016@gmail.com" target="_blank">phanudetkawilai2016@gmail.com</a>
                    </b-card-text>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    .about-content a:hover {
        text-decoration: none;
        color: #ff4f73;
    }
    .about-content a {
        color: #dc3545;
    }
    @media only screen and (min-width: 300px) {
        .about-content {
            padding-left:15px;padding-right:15px;
        }
    }
    @media only screen and (min-width: 720px) {
        .about-content {
            padding-left:480px;padding-right:480px;
        }
    }
</style>