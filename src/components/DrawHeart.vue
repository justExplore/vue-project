<template>
    <div>
        <canvas id="drawing"></canvas>
        <img src="../images/timg.jpg" id="flower">
    </div>
</template>

<script>
    export default {
        name: "DrawHeart",
        data() {
            return {
                timer: "",
                radian: 0,
                radian_add: "",
                content: ""
            }
        },
        mounted() {
            this.draw();
        },
        methods: {
            draw: function () {
                var drawing = document.getElementById("drawing"); //获取描边图片
                drawing.width = '600';
                drawing.height = '600';
                if (drawing.getContext) {
                    this.content = drawing.getContext("2d");
                    this.radian = 0;
                    this.radian_add = Math.PI / 40;
                    this.content.translate(250, 250);
                    this.timer = setInterval(this.heart, 100);  //设置间歇调用，间隔为100ms
                }
            },
            heart: function () {
                let X, Y,
                    pic = document.getElementById('flower');
                X = this.getX1(this.radian);
                Y = this.getY1(this.radian);
                this.content.drawImage(pic, X, Y, 25, 25);   //在给定坐标绘制给定大小的图片
                this.radian += this.radian_add;
                if (this.radian > (2 * Math.PI)) { //绘制完整的心型线后取消间歇调用
                    clearInterval(this.timer);
                }
            },
            getX: function (t) {
                return 100 * Math.sin(4 * t) * Math.cos(t);
            },
            getY: function (t) {
                return 100 * Math.sin(4 * t) * Math.sin(t);
            },
            getX1: function (t) {
                return 15 * (16 * Math.pow(Math.sin(t), 3))
            },
            getY1: function (t) {
                return -15 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
            },
        }
    }
</script>

<style scoped>

</style>
