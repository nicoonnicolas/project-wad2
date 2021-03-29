Vue.component('huddlenavbar', {
    template: `
        <div>
            <b-navbar toggleable="sm" type="light" variant="faded">
                <b-navbar-brand href="listings.html">
                    <b-img src="images\\app\\logo.JPG" height="70px" width="70px" class="d-inline-block"></b-img>Huddle
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="listings.html" active>Find a Space</b-nav-item>
                        <b-nav-item href="bookings.html">My Bookings</b-nav-item>
                        <b-nav-item href="#">Sign Out</b-nav-item>

                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
            `
})
