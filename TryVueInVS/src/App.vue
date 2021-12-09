<template>
  <div id="app">
    <div id="top-header">
      <div class="container">
        <div class="row">
          <div class="col-xs-6">
            <div class="th-text pull-left">
              <div class="th-item"> <a href="#"><i class="fa fa-phone"></i> 05-460789986</a> </div>
              <div class="th-item"> <a href="#"><i class="fa fa-envelope"></i> MAIL@STARHOTEL.COM </a></div>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="th-text pull-right">
              <div class="th-item">
                <div class="btn-group">
                  <button class="btn btn-default btn-xs dropdown-toggle js-activated" type="button" data-toggle="dropdown"> English <span class="caret"></span> </button>
                  <ul class="dropdown-menu">
                    <li> <a href="#">ENGLISH</a> </li>
                    <li> <a href="#">FRANCE</a> </li>
                    <li> <a href="#">GERMAN</a> </li>
                    <li> <a href="#">SPANISH</a> </li>
                  </ul>
                </div>
              </div>
              <div class="th-item">
                <div class="social-icons"> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-youtube-play"></i></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header>
      <!-- Navigation -->
      <div class="navbar yamm navbar-default" id="sticky">
        <div class="container">
          <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar-collapse-grid" class="navbar-toggle"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            <a href="index.html" class="navbar-brand">
              <!-- Logo -->
              <div id="logo"> <img id="default-logo" src="images/logo.png" alt="Starhotel" style="height:44px;"> <img id="retina-logo" src="images/logo-retina.png" alt="Starhotel" style="height:44px;"> </div>
            </a>
          </div>
          <div id="navbar-collapse-grid" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="dropdown active">
                <a href="index.html">Home</a>
              </li>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle js-activated">Rooms<b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="room-list.html">Room List View</a></li>
                  <li><a href="room-detail.html">Room Detail</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle js-activated">Features<b class="caret"></b></a>
                <div class="dropdown-menu">
                  <div class="yamm-content">
                    <div class="row">
                      <ul class="col-sm-3 list-unstyled mt20">
                        <li>
                          <p><strong>Elements</strong></p>
                        </li>
                        <li><a href="elements.html">Elements</a></li>
                        <li><a href="icons.html">Icons</a></li>
                        <li><a href="404.html">404 Page</a></li>
                      </ul>
                      <ul class="col-sm-3 list-unstyled mt20">
                        <li>
                          <p><strong>Layout</strong></p>
                        </li>
                        <li><a href="boxed-pattern.html"><i class="fa fa-square-o"></i> Boxed</a></li>
                        <li><a href="index.html"><i class="fa fa-arrows-h"></i> Wide</a></li>
                        <li><a href="boxed-background.html"><i class="fa fa-picture-o"></i> Image</a></li>
                      </ul>
                      <ul class="col-sm-6 list-unstyled mt20">
                        <li>
                          <p><strong>Yamm! Megamenu</strong></p>
                          <ul class="list-unstyled">
                            <li class="row">
                              <ul class="col-sm-12 list-unstyled">
                                <li>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere justo posuere, commodo nibh sit amet, malesuada nisi. Nam vitae mauris vel ante laoreet placerat. Praesent pellentesque consectetur lobortis. Pellentesque lacinia nibh leo, sed pharetra tortor sagittis id. Cras a scelerisque eros. Nunc ornare diam turpis, id vulputate massa sagittis sed.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle js-activated">Blog<b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="blog.html">Blog grid</a></li>
                  <li><a href="blog-post.html">Blog post</a></li>
                </ul>
              </li>
              <li> <a href="gallery.html">Gallery</a></li>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle js-activated">Contact<b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="contact-01.html">Contact 1</a></li>
                  <li><a href="contact-02.html">Contact 2</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-3">
            <h4>About Starhotel</h4>
            <p>
              Suspendisse sed sollicitudin nisl, at dignissim libero. Sed porta tincidunt ipsum, vel volutpat. <br>
              <br>
              Nunc ut fringilla urna. Cras vel adipiscing ipsum. Integer dignissim nisl eu lacus interdum facilisis. Aliquam erat volutpat. Nulla semper vitae felis vitae dapibus.
            </p>
          </div>
          <div class="col-md-3 col-sm-3">
            <h4>Recieve our newsletter</h4>
            <p>Suspendisse sed sollicitudin nisl, at dignissim libero. Sed porta tincidunt ipsum, vel volutpa!</p>
            <form role="form">
              <div class="form-group">
                <input name="newsletter" type="text" id="newsletter" value="" class="form-control" placeholder="Please enter your E-mailaddress">
              </div>
              <button type="submit" class="btn btn-lg btn-black btn-block">Submit</button>
            </form>
          </div>
          <div class="col-md-3 col-sm-3">
            <h4>From our blog</h4>
            <ul>
              <li>
                <a href="#">
                  Amazing post with all the goodies<br>
                  January 23, 2014
                </a>
              </li>
              <li>
                <a href="#">
                  Integer dignissim nisl eu lacus<br>
                  January 21, 2014
                </a>
              </li>
              <li>
                <a href="#">
                  Aliquam erat volutpat. Nulla semper<br>
                  January 14, 2014
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-3">
            <h4>Address</h4>
            <address>
              <strong>Twitter, Inc.</strong><br>
              795 Folsom Ave, Suite 600<br>
              San Francisco, CA 94107<br>
              <abbr title="Phone">P:</abbr> <a href="#">(123) 456-7890</a><br>
              <abbr title="Email">E:</abbr> <a href="#">mail@example.com</a><br>
              <abbr title="Website">W:</abbr> <a href="#">www.slashdown.nl</a><br>
            </address>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-xs-6"> &copy; 2014 Starhotel All Rights Reserved </div>
            <div class="col-xs-6 text-right">
              <ul>
                <li><a href="contact-01.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Go-top Button -->
    <div id="go-top"><i class="fa fa-angle-up fa-2x"></i></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>

</style>
