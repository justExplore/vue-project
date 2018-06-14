<template>
    <div class="container">
        <p class="typing" v-html="msg">
            <span>#2008-05-29</span>
            <br>
            <span>#2018-06-14</span>
        </p><transition name="fade"><span style="display: inline-block" v-show="underlineFlag">_</span></transition>
    </div>
</template>

<script>
    import {requestUserInfo} from "../service/service";

    export default {
        name: 'Typing',
        mounted() {
            this.typingAnimation();
        },
        data() {
            return {
                msg: '',
                totalMsg: "<span style='color: #3f7f5f'>/**<br/>* 2008-05-29,<br/>* 2018-06-14<br/>* auth: wenfeng<br/>*/</span><br/>" +
                "<span style='color: #333'>#2013-06-05</span><br/><span>#2018-06-14</span>",
                typingTimer: "",
                underlineFlag: true,
                underlineTimer: "",
                i: 0
            }
        },
        methods: {
            requestUserMsg: function () {
                requestUserInfo({}).then(res => {
                    console.log(res);
                })
            },
            typingAnimation: function () {
                this.typingTimer = setInterval(this.contentHandler, 100);
                this.underlineTimer = setInterval(() => {
                    this.underlineFlag = !this.underlineFlag;
                }, 100)
            },
            contentHandler: function () {
                if (this.i <= this.totalMsg.length) {
                    if (this.totalMsg.charAt(this.i - 1) == "<") {
                        let len = this.totalMsg.substring(this.i).indexOf(">");
                        this.i += len + 1;
                        clearInterval(this.typingTimer);
                        setTimeout(() => {
                            this.typingTimer = setInterval(this.contentHandler, 100);
                        }, 200);
                    } else {
                        this.msg = this.totalMsg.slice(0, this.i++);
                    }
                } else {
                    clearInterval(this.typingTimer);
                    this.underlineFlag = false;
                    clearInterval(this.underlineTimer);
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container {
        width: 200px;
        height: 200px;
        .typing {
            display: inline;
            text-align: left;
            line-height: 20px;
            font-family: "Consolas", "Monaco", "Bitstream Vera Sans Mono", "Courier New", "sans-serif";
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
