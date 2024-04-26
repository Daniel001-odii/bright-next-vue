<template>
    <Navbar/>
    <div class="flex flex-row w-full h-screen relative">
        <!-- LEFT SIDE BAR STARTS HERE -->
        <div class=" lg:w-[450px] md:w-[350px] flex flex-col p-3 w-fit">
            <h1 class="font-bold text-xl self-center mt-10 w-full md:w-fit flex justify-between">
                <span :class="full_side_bar_content ? 'inline-block':'hidden'">My Account</span>
                <button @click="toggle_side_bar" class=" md:hidden text-blue-500 text-2xl">
                    <i class="bi" :class="full_side_bar_content ? 'bi-arrow-bar-left':'bi-arrow-bar-right'"></i>
                </button>
            </h1>
           
            <div class="flex flex-col mt-8 gap-5 w-fit self-end">
                <RouterLink to="/user/profile">
                    <div class="nav_item group hover:text-bna_blue" :class="{ 'active_page': isProfile }">
                        <i class="bi bi-person nav_item_icon" :class="{ 'active_icon': isProfile }"></i>
                        <span class="link_name" :class="full_side_bar_content ? 'inline-block':'hidden'">Profile</span>
                    </div>
                </RouterLink>

                <RouterLink to="/user/subscription">
                    <div class="nav_item group hover:text-bna_blue" :class="{ 'active_page': isSubscription }">
                        <i class="bi bi-credit-card nav_item_icon group-hover:bg-bna_blue" :class="{ 'active_icon': isSubscription }"></i>
                        <span class="link_name" :class="full_side_bar_content ? 'inline-block':'hidden'">Billing</span>
                    </div>
                </RouterLink>

                <RouterLink to="/user/language">
                    <div class="nav_item group hover:text-bna_blue" :class="{ 'active_page': isLanguage }">
                        <i class="bi bi-translate nav_item_icon group-hover:bg-bna_blue" :class="{ 'active_icon': isLanguage }"></i>
                        <span class="link_name" :class="full_side_bar_content ? 'inline-block':'hidden'">Language</span>
                    </div>
                </RouterLink>

                <RouterLink to="/user/accounts/linked">
                    <div class="nav_item group hover:text-bna_blue" :class="{ 'active_page': isLinkedAccounts }">
                        <i class="bi bi-link-45deg nav_item_icon group-hover:bg-bna_blue" :class="{ 'active_icon': isLinkedAccounts }"></i>
                        <span class="link_name" :class="full_side_bar_content ? 'inline-block':'hidden'">LinkedAccounts</span>
                    </div>
                </RouterLink>

                <RouterLink to="/user/notifications">
                    <div class="nav_item group hover:text-bna_blue" :class="{ 'active_page': isNotifications }">
                        <i class="bi bi-bell nav_item_icon group-hover:bg-bna_blue" :class="{ 'active_icon': isNotifications }"></i>
                        <span class="link_name" :class="full_side_bar_content ? 'inline-block':'hidden'">Notifications</span>
                    </div>
                </RouterLink>

                <RouterLink to="/user/security">
                    <div class="nav_item group hover:text-bna_blue" :class="{ 'active_page': isPassword }">
                        <i class="bi bi-lock nav_item_icon group-hover:bg-bna_blue" :class="{ 'active_icon': isPassword }"></i>
                        <span class="link_name" :class="full_side_bar_content ? 'inline-block':'hidden'">Password</span>
                    </div>
                </RouterLink>

                <!-- <RouterLink to="#"> -->
                    <button type="button" @click="logout" class="nav_item group hover:text-bna_blue">
                        <i class="bi bi-door-open nav_item_icon group-hover:bg-bna_blue"></i>
                        <span class="link_name" :class="full_side_bar_content ? 'inline-block':'hidden'">Logout</span>
                    </button>
                <!-- </RouterLink> -->
            </div>

        </div>
        <!-- SIDE BAR ENDS HERE -->

        <!-- MAIN PAGE CONTENT STARTS HERE -->
        <div class=" h-full w-full p-5 overflow-y-auto mt-10">
            <router-view></router-view>
        </div>
            
        <!-- PAGE CONTENT ENDS HERE -->
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

    export default {
        name: "UserLayoutTemplate",
        components: { Navbar },
        data(){
            return{
                full_side_bar_content: false,
            }
        },
        methods:{
            toggle_side_bar(){
                this.full_side_bar_content = !this.full_side_bar_content;
            },

            logout(){
                localStorage.removeItem('BNA');
                this.$router.push('/login');
            },
        },
        computed: {
            isProfile() { return this.$route.path.startsWith("/user/profile"); },
            isSubscription() { return this.$route.path.startsWith("/user/subscription"); },
            isLanguage() { return this.$route.path.startsWith("/user/language"); },
            isLinkedAccounts() { return this.$route.path.startsWith("/user/accounts/linked"); },
            isNotifications() { return this.$route.path.startsWith("/user/notifications"); },
            isPassword() { return this.$route.path.startsWith("/user/security"); },
        },
        
    }
</script>

<style scoped>
    .nav_item{
        @apply flex flex-row items-center gap-8 font-bold text-lg p-2 md:pr-6 rounded-lg hover:bg-white
    }

    .nav_item_icon{
        @apply  bg-bna_green text-white rounded-full flex justify-center items-center p-3 hover:bg-bna_blue text-sm md:text-lg
    }

    .link_name{
        @apply md:inline-block
    }

    .active_page{
        @apply bg-white text-bna_blue
    }

    .active_icon{
        @apply bg-bna_blue
    }
</style>