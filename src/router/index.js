import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Test from '@/components/player/Test'

const Players = resolve => {
    require.ensure(
        ['@/components/player/Players.vue'],
        () => {
            resolve(require('@/components/player/Players.vue'))
        }, 'players'
    )
}

const NewPlayer = resolve => {
    require.ensure(
        ['@/components/player/NewPlayer.vue'],
        () => {
            resolve(require('@/components/player/NewPlayer.vue'))
        }, 'players'
    )
}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/players',
            name: 'players',
            component: Players
            // These children will be loaded inside the default `<router-view>` element
            // children: [
            //     {
            //         path: 'new-player',
            //         name: 'newPlayer',
            //         component: NewPlayer
            //     }
            // ]
        },
        // This is a child but just in terms of the nesting
        {
            path: '/players/new-player',
            name: 'newPlayer',
            component: NewPlayer
        }
    ],
    mode: 'history'
})
