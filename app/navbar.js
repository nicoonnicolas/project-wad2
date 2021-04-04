Vue.component('huddlenavbar', {
    props: ['check', 'payment'],
    template: `
        <div>
            <b-navbar toggleable="sm" type="light" variant="faded">
                <b-navbar-brand href="listings.html">
                    <b-img src="images\\app\\logo.JPG" height="70px" width="70px" class="d-inline-block hvr-wobble-top"></b-img>  Huddle
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="listings.html" v-if="payment">Find a Space </b-nav-item>
                        <b-nav-item href="listings.html" v-else :active="check">Find a Space </b-nav-item>
                        <b-nav-item href="bookings.html" v-if="!check" active>My Bookings</b-nav-item>
                        <b-nav-item href="bookings.html" v-else >My Bookings</b-nav-item>
                        <b-nav-item href="logout.html">Sign Out</b-nav-item>

                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
            `,
    methods: {
        signOut() {
            sessionStorage.clear();
            location.replace("index.html");
        }
    }
})
