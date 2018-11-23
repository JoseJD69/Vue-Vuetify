<template>
    <v-container>
        <div class="mb-5">
            <v-data-table
                    :headers="headers"
                    :items="desserts"
                    class="elevation-1"

            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
                </template>
            </v-data-table>
        </div>
        <div>
            <v-data-table
                    :headers="headersT"
                    :items="UserList"
                    class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.email }}</td>
                    <td class="text-xs-right">{{ props.item.phone }}</td>
                </template>
            </v-data-table>
        </div>
    </v-container>

</template>

<script>
    export default {
        data() {
            return {
                urlUser: 'https://jsonplaceholder.typicode.com/users',
                UserList: [],
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    {text: 'Calories', value: 'calories'},
                    {text: 'Fat (g)', value: 'fat'},
                    {text: 'Carbs (g)', value: 'carbs'},
                    {text: 'Protein (g)', value: 'protein'},
                    {text: 'Iron (%)', value: 'iron'}
                ],
                headersT: [
                    {
                        text: 'Nombres',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    {text: 'Email', value: 'email'},
                    {text: 'Phone', value: 'phone'},
                ],
                desserts: [
                    {
                        value: false,
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%'
                    },
                    {
                        value: false,
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%'
                    }
                ]
            }
        },
        methods: {
            getUser: function () {
                this.axios.get(this.urlUser).then(response => {
                    this.UserList = response.data
                    console.log(this.UserList)
                })

            }
        },
        mounted: function () {
            this.getUser()
        }
    }
</script>

<style>

</style>
