<template>
    <div>
        <b-container fluid>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;text-align:center;">
                <b-col sm="12">
                    <h1 style="color:#d8dce6"><font-awesome-icon icon="link" style="font-size:40px;color:#d8dce6;" /> Sources</h1>
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center" style="padding-top:15px;padding-bottom:20px;">
                <b-col sm="6">
                    <b-card-group deck>
                        <b-card @click="openDDC()"  text-variant="white" style="background:#313c5f;">
                            <b-img style="width:500px;height:280px;border-radius:4px;" :src="require('../../../src/assets/DDC.jpg')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h4 style="color:#d8dce6;">กรมควบคุมโรค กระทรวงสาธารณสุข</h4>
                            </b-card-text>
                            <b-card-text class="text-left" style="font-size:16px;color:#d8dce6;">
                                ข้อมูลเป็นการร่วมมือกันระหว่าง กรมควบคุมโรค กระทรวงสาธารณสุข ทีมงาน TH-STAT.com และกลุ่ม TCDG สามารถติดต่อสอบถามเพิ่มเติมได้ที่ info@th-stat.com
                            </b-card-text>
                        </b-card>
                        <b-card @click="openGoogle()" text-variant="white" style="background:#313c5f;">
                            <b-img style="width:500px;height:280px;border-radius:4px;" :src="require('../../../src/assets/google-logo.jpg')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h4 style="color:#d8dce6;">Google</h4>
                            </b-card-text>
                            <b-card-text class="text-left;" style="font-size:16px;color:#d8dce6;">
                                Google LLC เป็น บริษัท เทคโนโลยีข้ามชาติสัญชาติอเมริกันที่เชี่ยวชาญด้านบริการและผลิตภัณฑ์ที่เกี่ยวข้องกับอินเทอร์เน็ตซึ่งรวมถึงเทคโนโลยีการโฆษณาออนไลน์เครื่องมือค้นหาคลาวด์คอมพิวติ้งซอฟต์แวร์และฮาร์ดแวร์
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    methods: {
        openGoogle () {
            window.open('https://www.google.com/covid19/')
        },
        openDDC () {
            window.open('https://covid19.th-stat.com/th/')
        }
    }
}
</script>

<style>
    .container {
        text-align: center;
    }
</style>