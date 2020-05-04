<template>
    <div>
        <b-container fluid>
            <b-row style="color:#fff;padding-top:15px;padding-bottom:20px;">
                <b-col sm="12">
                    <h3 style="color:#d8dce6"><font-awesome-icon icon="heartbeat" style="font-size:26px;color:#d8dce6;"/> ข้อมูลสุขภาพ</h3>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;">
                <b-col sm="12" style="text-align:center;">
                    <h2>โรคติดเชื้อไวรัสโคโรนา (COVID‑19)</h2>
                </b-col>
                <b-col sm="12" style="text-align:center;">
                    <b-card-text style="font-size:16px;color:#b2bec3;">เรียกอีกอย่างว่า 2019-nCov, ไวรัสโคโรนาสายพันธุ์ใหม่ 2019</b-card-text>
                </b-col>
                <b-col sm="12" style="text-align:center;padding-top:10px">
                    <b-img style="width:500px;height:280px;border-radius:5px;" :src="require('../../../src/assets/virus-cov19.jpg')" fluid alt="Responsive image"></b-img>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;">
                <b-col class="health-content" sm="12">
                    <h3>ไวรัสโคโรนา คืออะไร <font-awesome-icon icon="question-circle" style="font-size:26px;color:#d8dce6;"/></h3>
                </b-col>
                <b-col class="health-content" sm="12">
                    <b-card-text style="font-size:16px;color:#b2bec3;">โรคติดเชื้อไวรัสโคโรนา 2019 (COVID‑19) เป็นโรคติดต่อที่เกิดจากเชื้อไวรัสสายพันธุ์ใหม่</b-card-text>
                    <b-card-text style="font-size:16px;color:#b2bec3;">โรคนี้ทำให้เกิดอาการป่วยในระบบทางเดินหายใจ (เช่นเดียวกับไข้หวัดใหญ่) โดยมีอาการอย่างเช่น ไอ เป็นไข้ และหายใจลำบากในรายที่มีอาการรุนแรง คุณป้องกันตัวเองได้ด้วยการล้างมือบ่อยๆ ไม่เอามือสัมผัสใบหน้า และหลีกเลี่ยงการพบปะใกล้ชิด (ระยะ 1 เมตรหรือ 3 ฟุต) กับคนที่ไม่สบาย</b-card-text>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;">
                <b-col class="health-content" sm="12">
                    <h3>การแพร่กระจายของเชื้อไวรัส</h3>
                </b-col>
                <b-col class="health-content" sm="12">
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        โดยหลักแล้ว โรคติดเชื้อไวรัสโคโรนาแพร่กระจายผ่านการสัมผัสกับผู้ติดเชื้อที่ไอหรือจามออกมา รวมถึงการสัมผัสพื้นผิวหรือวัตถุที่มีไวรัสอยู่ แล้วไปสัมผัสดวงตา จมูก หรือปากของตัวเอง
                    </b-card-text>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;">
                <b-col class="health-content" sm="12">
                    <h3>อาการ</h3>
                </b-col>
                <b-col class="health-content" sm="12">
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        ผู้ติดเชื้ออาจป่วยเนื่องจากไวรัสนี้เป็นเวลา 1-14 วันก่อนที่จะแสดงอาการ อาการทั่วไปของโรคติดเชื้อไวรัสโคโรนา 2019 (COVID‑19) คือเป็นไข้ อ่อนเพลีย และไอแห้ง คนส่วนใหญ่ (ประมาณร้อยละ 80) หายจากโรคนี้ได้โดยไม่ต้องรับการรักษาพิเศษ
                    </b-card-text>
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        ในกรณีส่วนน้อย โรคอาจรุนแรงจนถึงขั้นทำให้เสียชีวิต ผู้สูงอายุและผู้ที่มีโรคประจำตัว (เช่น หอบหืด เบาหวาน หรือโรคหัวใจ) อาจมีความเสี่ยงมากขึ้นที่อาการป่วยจะรุนแรง
                    </b-card-text>
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        ผู้ที่ติดเชื้ออาจมีอาการดังนี้
                        <ul>
                            <li>ไอ</li>
                            <li>เป็นไข้</li>
                            <li>อ่อนเพลีย</li>
                            <li>หายใจลำบาก (กรณีรุนแรง)</li>
                        </ul>
                    </b-card-text>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:20px;">
                <b-col class="health-content" sm="12">
                    <h3>การป้องกัน</h3>
                </b-col>
                <b-col class="health-content" sm="12">
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        ในปัจจุบันยังไม่มีวัคซีนป้องกันโรคติดเชื้อไวรัสโคโรนา (COVID-19)
                    </b-card-text>
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        คุณสามารถป้องกันตัวเองและช่วยป้องกันไม่ให้ไวรัสแพร่กระจายสู่คนอื่นได้โดยทำดังนี้
                    </b-card-text>
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        สิ่งที่ควรทำ
                        <ul>
                            <li>ล้างมือบ่อยๆ เป็นเวลา 20 วินาทีด้วยสบู่และน้ำหรือเจลล้างมือที่มีส่วนผสมของแอลกอฮอล์</li>
                            <li>ใช้กระดาษทิชชู่หรือข้อพับตรงข้อศอกด้านในปิดปากและจมูกขณะไอหรือจาม</li>
                            <li>หลีกเลี่ยงการพบปะใกล้ชิด (ระยะ 1 เมตรหรือ 3 ฟุต) กับคนที่ไม่สบาย</li>
                            <li>อยู่บ้านและกักตัวเองให้ห่างจากคนอื่นในบ้านหากรู้สึกไม่สบาย</li>
                        </ul>
                    </b-card-text>
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        สิ่งที่ไม่ควรทำ
                        <ul>
                            <li>นำมือที่ไม่สะอาดไปสัมผัสดวงตา จมูก หรือปาก</li>
                        </ul>
                    </b-card-text>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;padding-bottom:40px;">
                <b-col class="health-content" sm="12">
                    <h3>การบำบัดรักษา</h3>
                </b-col>
                <b-col class="health-content" sm="12">
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        ยังไม่มียาสำหรับป้องกันหรือรักษาโรคติดเชื้อไวรัสโคโรนา (COVID-19) ผู้ที่ติดเชื้ออาจต้องได้รับการรักษาแบบประคับประคองเพื่อช่วยให้ผู้ป่วยหายใจได้
                    </b-card-text>
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        หากคุณมีอาการเพียงเล็กน้อย ให้พักอยู่ที่บ้านจนกว่าจะหาย อาการอาจทุเลาลงได้หากคุณปฏิบัติดังต่อไปนี้
                        <ul>
                            <li>พักผ่อนและนอนหลับ</li>
                            <li>รักษาร่างกายให้อบอุ่น</li>
                            <li>ดื่มน้ำให้เพียงพอ</li>
                            <li>ใช้เครื่องทำความชื้นในห้องหรืออาบน้ำอุ่นเพื่อช่วยบรรเทาอาการเจ็บคอและไอ</li>
                        </ul>
                    </b-card-text>
                    <b-card-text style="font-size:16px;color:#b2bec3;">
                        หากมีไข้ ไอ และหายใจลำบาก ให้พบแพทย์เพื่อรับการรักษาทันที นัดหมายผู้ให้บริการด้านสุขภาพล่วงหน้าและบอกเล่าถึงการเดินทางครั้งล่าสุดหรือการติดต่อครั้งล่าสุดกับผู้เดินทาง
                    </b-card-text>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
     @media only screen and (min-width: 300px) {
        .health-content {
            padding-left:15px;padding-right:15px;
        }
    }
    @media only screen and (min-width: 720px) {
        .health-content {
            padding-left:150px;padding-right:150px;
        }
    }
</style>