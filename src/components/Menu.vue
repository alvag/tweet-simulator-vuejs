<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand">Simulador de Tweets</span>

            <button class="btn px-4"
                    :class="{'btn-success': !showForm, 'btn-danger': showForm}"
                    @click="openCloseForm">
                {{ showForm ? 'Cancelar' : 'Nuevo Tweet' }}
            </button>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Menu',
    props: {
        openCloseForm: Function,
        showForm: Boolean
    }
};
</script>

<style lang="scss" scoped>

</style>
