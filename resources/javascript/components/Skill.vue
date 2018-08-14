<template>
    <li class="skill">
        <div class="skill-background" :style="{ right: (100 - this.percentage) + '%' }"></div>
        <span class="name"><slot></slot></span>
    </li>
</template>

<script>
    export default {
        props: [
            'percentage'
        ]
    }
</script>