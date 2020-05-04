<template>
    <div>
        <b-container fluid>
            <b-row style="color:#fff;padding-top:15px;padding-bottom:20px;">
                <b-col sm="12">
                    <h5 style="color:#d8dce6"><font-awesome-icon icon="hand-holding-medical" style="font-size:26px;"/> ร่วมบริจาคเงิน ให้โรงพยาบาลสู้โควิด-19</h5>
                </b-col>
            </b-row>
            <b-row style="color:#d8dce6;padding-top:15px;">
                <b-col sm="12">
                    <b-card-group deck>
                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-img style="width:300px;height:180px;border-radius:4px;" :src="require('../../../src/assets/logo.png')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h5 style="color:#d8dce6;">โรงพยาบาลรามาธิบดี</h5>
                            </b-card-text>
                            <b-card-text style="font-size:16px;color:#b2bec3;">
                                <span style="color:#d8dce6;">ชื่อมูลนิธิรามาธิบดี</span>
                                <ul>
                                    <li>ธนาคารกรุงเทพ : 090-3-50015-5</li>
                                    <li>ธนาคารกสิกรไทย : 879-2-00448-3</li>
                                    <li>ธนาคารไทยพาณิชย์ : 026-3-05216-3</li>
                                </ul>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-img style="width:300px;height:180px;border-radius:4px;" :src="require('../../../src/assets/logo.png')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h5 style="color:#d8dce6;">โรงพยาบาลศิริราช ปิยมหาราชการุณย์</h5>
                            </b-card-text>
                            <b-card-text style="font-size:16px;color:#b2bec3;">
                                <span style="color:#d8dce6;">ชื่อมูลนิธิศิริราชสู้ภัยโควิด</span>
                                <ul>
                                    <li>ธนาคารไทยพาณิชย์ : 016-3-00049-4</li>
                                </ul>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-img style="width:300px;height:180px;border-radius:4px;" :src="require('../../../src/assets/logo.png')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h5 style="color:#d8dce6;">โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย</h5>
                            </b-card-text>
                            <b-card-text style="font-size:16px;color:#b2bec3;">
                                <span style="color:#d8dce6;">ชื่อมูลนิธิโรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย (ฬ. จุฬา สะพานบุญ)</span>
                                <ul>
                                    <li>ธนาคารกสิกรไทย : 059-1-93894-0</li>
                                </ul>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-img style="width:300px;height:180px;border-radius:4px;" :src="require('../../../src/assets/logo.png')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h5 style="color:#d8dce6;">โรงพยาบาลราชวิถี</h5>
                            </b-card-text>
                            <b-card-text style="font-size:16px;color:#b2bec3;">
                                <span style="color:#d8dce6;">ชื่อมูลนิธิโรงพยาบาลราชวิถี</span>
                                <ul>
                                    <li>ธนาคารไทยพาณิชย์ : 051-2-16322-1</li>
                                </ul>
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
            <b-row class="row-2" style="color:#d8dce6;padding-bottom:40px;">
                <b-col sm="12">
                    <b-card-group deck>
                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-img style="width:300px;height:180px;border-radius:4px;" :src="require('../../../src/assets/logo.png')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h5 style="color:#d8dce6;">โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ</h5>
                            </b-card-text>
                            <b-card-text style="font-size:16px;color:#b2bec3;">
                                <span style="color:#d8dce6;">ชื่อมูลนิธิรพ.ธรรมศาสตร์เฉลิมพระเกียรติ (กองทุนบริจาค)</span>
                                <ul>
                                    <li>ธนาคารทหารไทย : 050-2-00002-9</li>
                                </ul>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-img style="width:300px;height:180px;border-radius:4px;" :src="require('../../../src/assets/logo.png')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h5 style="color:#d8dce6;">โรงพยาบาลสวนดอกหรือโรงพยาบาลมหาราชนครเชียงใหม่</h5>
                            </b-card-text>
                            <b-card-text style="font-size:16px;color:#b2bec3;">
                                <span style="color:#d8dce6;">ชื่อมูลนิธิโรงพยาบาลสวนดอก คณะแพทย์ศาสตร์ มหาวิทยาลัยเชียงใหม่</span>
                                <ul>
                                    <li>ธนาคารไทยพาณิชย์ : 566-4-04844-0</li>
                                </ul>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-img style="width:300px;height:180px;border-radius:4px;" :src="require('../../../src/assets/logo.png')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h5 style="color:#d8dce6;">โรงพยาบาลพระมงกุฏเกล้า</h5>
                            </b-card-text>
                            <b-card-text style="font-size:16px;color:#b2bec3;">
                                <span style="color:#d8dce6;">ชื่อมูลนิธิโรงพยาบาลพระมงกุฏเกล้า</span>
                                <ul>
                                    <li>ธนาคารทหารไทย : 038-2-70902-0</li>
                                </ul>
                            </b-card-text>
                        </b-card>

                        <b-card text-variant="white" style="background:#313c5f;">
                            <b-img style="width:300px;height:180px;border-radius:4px;" :src="require('../../../src/assets/logo.png')" fluid alt="Responsive image"></b-img>
                            <b-card-text style="padding-top:15px;">
                                <h5 style="color:#d8dce6;">แพทยสมาคมแห่งประเทศไทย</h5>
                            </b-card-text>
                            <b-card-text style="font-size:16px;color:#b2bec3;">
                                <ul>
                                    <li>บริจาค 100 บาท ให้กด *948*1919*100# แล้วโทรออก</li>
                                    <li>บริจาค 10 บาท ให้กด *948*1919*10# แล้วโทรออก</li>
                                </ul>
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    @media only screen and (min-width: 300px) {
        .row-2 {
            padding-top:0px;
        }
    }
    @media only screen and (min-width: 720px) {
        .row-2 {
            padding-top:15px;
        }
    }
</style>