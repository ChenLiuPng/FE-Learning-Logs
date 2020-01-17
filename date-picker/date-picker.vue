<template>
    <div v-click-outside>
        <input type="text" :value="formatDate">
        <div v-if="isVisible" class="pannel">
            <div class="pannel-nav">
                <span>&lt;</span>
                <span>&lt;&lt;</span>
                <span>xxx年</span>
                <span>xxx月</span>
                <span>&lt;</span>
                <span>&lt;</span>
            </div>
            <div class="pannel-content"></div>
            <div class="pannel-footer">
                
            </div>
        </div>
    </div>
</template>

<script>
import * as util from './util.js';
    export default {
        directives: {
            clickOutside: {
                bind(el,binding,vnode) {
                    let handler = (e) => {
                        if(el.contains(e.target)) {
                            if(!vnode.context.isVisible){
                                vnode.context.focus();
                            }
                        }else{
                            if(vnode.context.isVisible){
                                vnode.context.blur();
                            }
                        }
                    }
                    el.handler = handler;
                    document.addEventListener('click', handler)
                },
                unbind(el) {
                    document.removeEventListener('click', el.handler)
                }
            }
        },
        data(){
            return {
                isVisible: false
            }
        },
        props: {
            value: {
                type:Date,
                default:()=>new Date()
            }
        },
        methods:{
            focus(){
                this.isVisible = true
            },
            blur() {
                this.isVisible = false
            }
        },
        mouted(){
            alert(this.visibeDays);
        },
        computed:{
            visibeDays(){
                let {year,month} = util.getYearMonthDay(this.value)
                let currentFirstDay = util.getDate(year,month,1)
                let week = currentFirstDay.getDay();
                return 1
                alert(week)
            },
            formatDate() {
               let {year, month, day} = util.getYearMonthDay( this.value);
               return `${year}-${month+1}-${day}`;
            }
        }
    }
</script>
<style lang="stylus">
.pannel
    position absolute
    background #fff
</style>