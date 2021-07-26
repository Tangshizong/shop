<template>
    <div class="scroll-wrapper"
             ref="wrapper">
        <!-- 要拖拽的元素 -->
        <div class="inner-wrapper">
            <!--要拖拽的元素内只对第一个子元素有效果，其它元素会忽略，所以包一下-->
            <slot></slot> <!-- 设置插槽，调用拖拽组件时，可以用内容替换插槽 -->
        </div>
    </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
    name: 'ScrollView',
    mounted () {
        // 只有在mounted之后，元素才会挂载到document上，才能获取iscroll容器
        this.iscroll = new IScroll(this.$refs.wrapper, { // 注：这里不要直接用'#wrapper',而是要用this.$refs.wrapper，
            // 因为当这个拖拽组件被其它组件多次调用时， 一个页面里就会有多个'#wrapper',会造成混乱
            mouseWheel: true,
            scrollbars: false,
            // 加了这个才能监听拖拽事件
            probeType: 3,
            // 解决拖拽卡顿
            scrollX: false,
            scrollY: true,
            disablePointer: true,
            disableTouch: false,
            disableMouse: true
        })
        // 创建观察者对象，该对象只要观察到被观察对象发生变化，就会执行配置的对应的回调函数
        // mutationList: 所有发生变化的子元素组成的数组
        // observer: 观察者对象，前后两个observer（回调函数参数和new返回值）是同一个对象
        const observer = new MutationObserver((mutationList, observer) => {
            // 不知道为什么需要放在定时器里面iscroll.refresh()才能更新的更准确一些
            setTimeout(() => {
                this.iscroll.refresh()
            }, 10)
        })
        // 配置要观察哪些内容
        const observerConfig = {
            childList: true, // 观察目标子节点的变化，增加或删除
            subtree: true, // 默认是false，设置为true，可以观察后代节点
            attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
        }
        // 对指定对象进行观察
        observer.observe(this.$refs.wrapper, observerConfig)
        // observer.disconnect() // 停止观察
  }
  /*
    methods: {
    提供一个监听拖拽的方法供父组件调用（父组件只要通过ref拿到子组件就可以调用该方法）
    因为父组件可能要根据他的拖拽事件来操作其他子组件
    但其实感觉也没有什么必要，父组件既然能能通过$refs拿到子组件实例，就能拿到该实例的一个属性：iscroll(IScroll对象)，直接在父组件中对它的拖拽事件监听就行了(此方法行得通，而且比下面这种方式简单。还是建议使用通过$refs来直接获取iscroll对象来进行操作。下面的做法作为一个额外的思路了解)
        scrolling (fn) {
            console.log('拖拽中')
            this.iscroll.on('scroll', function () { // 此时的this是IScroll实例，因为非箭头函数，是它调用的该函数
                fn(this) // 此时this是作为执行实参传过去的，所以也是IScroll实例
            })
        }
    }
  */
}
</script>

<style scoped lang="scss">
.scroll-wrapper {
    // 之所以用class不用id，是方便其他组件调用的时候可以重新定义拖拽窗口大小以及溢出是否隐藏等等
      // 当然如果不是相对于浏览器，而是相对于局部拖拽的话，还可以在调用的时候在调用组件里将position：fixed重新定义为static
    overflow: hidden;
    position: fixed;
    top: 184px;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>