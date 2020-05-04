<template>
    <div>
        <b-container fluid>
            <b-row style="color:#fff;padding-top:15px;padding-bottom:20px;">
                <b-col sm="12">
                    <h5 style="color:#d8dce6;"><font-awesome-icon icon="map-marked-alt" style="font-size:22px;color:#d8dce6;" /> แผนที่ข้อมูลจังหวัด / พื้นที่ประกาศ</h5>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="12" style="padding-left:0px;padding-right:0px;">
                    <iframe class="map-iframe" src="https://covid19.th-stat.com/th/share/map" frameborder="0" style="overflow:hidden;width:100%" height="150%" width="150%"></iframe>
                </b-col>
            </b-row>
        </b-container>         
    </div>
</template>

<style>
    @media only screen and (min-width: 300px) {
        .map-iframe {
            height: 500px;
        }
    }
    @media only screen and (min-width: 720px) {
        .map-iframe {
            height: 700px;
        }
    }
</style>