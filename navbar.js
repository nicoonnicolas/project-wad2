Vue.component('huddlenavbar', {
    template: `
        <div>
            <b-navbar toggleable="sm" type="light" variant="faded">
                <b-navbar-brand href="index.html">
                    <b-img src="images\\app\\logo.JPG" height="70px" width="70px"></b-img> Huddle
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="listings.html" active>Find a Space</b-nav-item>
                        <b-nav-item href="bookings.html">My Bookings</b-nav-item>


                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
            `
})
