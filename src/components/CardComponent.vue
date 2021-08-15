<style lang="scss" scoped>
.card {
    cursor: pointer;
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: center;
}
</style>
<template>
    <div class="card text-center">
        <div class="card-title mb-0">
            <slot name="cardTitle"></slot>
        </div>
    </div>
</template>