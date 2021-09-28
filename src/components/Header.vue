<template>
     <div>
          <h1>Paso de Props</h1>
          <div>
               <ul>
                    <li>{{titulo}}</li>
                    <li>{{color}}</li>
               </ul>
          </div>
     </div>
</template>

<script>
     export default {
          name: 'Header',
          props: {
               titulo: String,
               color: String
          }
     }
</script>

<style scoped>

ul{
     display: inline-block;
}

</style>