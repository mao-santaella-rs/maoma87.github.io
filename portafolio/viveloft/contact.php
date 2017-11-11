<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="shortcut icon" href="images/favicon.ico"/>
        <title>Maxx Home</title>
        
        <!-- STYLE SHEETS -->
        <link rel="stylesheet" type="text/css" href="css/reset.css"  />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        <link rel="stylesheet" type="text/css" href="css/nivo-slider.css"/>
        <link rel="stylesheet" type="text/css" href="css/jquery.lightbox-0.5.css" />
        
        <!-- IE Fixes -->
        <!--[if lte IE 7]>
            <link rel="stylesheet" type="text/css" href="css/ie_fix.css" >
        <![endif]-->
        <!--[if lt IE 7]>
            <script type="text/javascript" src="js/DD_belatedPNG_0.0.8a-min.js"></script> 
            <script type="text/javascript">
                DD_belatedPNG.fix('.logo, ul.social li img');
            </script>
        <![endif]-->
        
        <!-- JAVASCRIPT FILES -->
        <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
        <script type="text/javascript" src="js/jquery.nivo.slider.js"></script>
        <script type="text/javascript" src="js/jcarousellite_1.0.1.pack.js"></script>
        <script type="text/javascript" src="js/jquery.lightbox-0.5.js"></script>
        <script type="text/javascript" src="js/jquery.validate.pack.js"></script>        
        <script type="text/javascript" src="js/jquery.example.js"></script>
        <script type="text/javascript" src="js/nivo_init.js"></script>
        <script type="text/javascript" src="js/custom.js"></script>
        <script type="text/javascript" src="js/form_.js"></script>
        <script type="text/javascript" src="js/cufon-yui.js" ></script>
        <script type="text/javascript" src="js/Myriad_Pro_300.font.js"></script>
        <script type="text/javascript">
            Cufon.replace('h1,h2,h3,h4,h5');
        </script>
    </head>

    <body>
        <div class="header">    	
            <div class="wrapper">
                <ul class="page_nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="pages.html">Pages</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="typography.html">Typography</a></li>                  
                    <li><a class="current last" href="contact.php">Contact</a></li>
                </ul> <!-- END PAGE NAV -->
            </div><!-- END WRAPPER --> 
        </div> <!-- END HEADER --> 
        <div class="wrapper ie_zindex">
            <a href="index.html"><img class="logo" src="images/logo.png" alt="logo" /></a>
        </div>        
        <div class="primary"> 
            <div class="wrapper">
                <div class="breadcrumbs"><a href="index.html">Home</a> / Contact</div> 
                <!--[if IE]>
                    <br class="clearf" />
                <![endif]-->                
                <div class="main_content">
                    <h1>Contact Us</h1> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p> 
                    <h3 class="no_hr">Send us a note</h3><br />
                                        <form  action="/themes/maxx/default/contact.php" method="post" id="commentform">
                        <p><input class="" id="cname" name="name" value="" /><label for="cname">Name*</label></p>
                        <p><input id="cemail" name="email" class="" value="" /><label for="cemail">Email*</label></p>
                        <p><input id="curl" name="url" class="" value="" /><label for="curl">URL</label></p>
                        <p><label for="ccomment">Message*</label></p>
                        <p><textarea name="comment" rows="5" cols="8" class="" id="ccomment" ></textarea></p>
                        <p class="submit"><input name="submit" type="submit" id="submit" tabindex="5" value="Send Message" /></p>
                    </form>
                    <div id="mail_success">
                        <h3 class="no_hr">Thank You!</h3>
                        <p>Your message has been sent. We will get back to you very soon</p>
                    </div>  
                </div><!-- END MAIN CONTENT -->
                <div class="sidebar">
                    <h2 class="text_widget">Contact Details</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>  
                    <br class="margin20" />
                    <h2 class="text_widget">Helpline</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>                                
                </div><!-- END SIDEBAR -->
            </div><!-- END WRAPPER -->                       
        </div><!-- END PRIMARY -->       
        <div class="footer">
            <div class="wrapper">
                <div class="footer_nav">
                    <ul>
                        <li class="first"><a href="index.html">Home</a></li>
                        <li><a href="pages.html">Pages</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="typography.html">Typography</a></li>
                        <li class="last"><a href="contact.php" class="current" >Contact</a></li>
                    </ul>
                </div>
                <div class="notes">
                    <ul class="social">
                        <li>Follow Us:</li>
                        <li><a href="#"><img src="images/social/twitter_16.png" alt="twitter" /></a></li>
                        <li><a href="#"><img src="images/social/facebook_16.png" alt="facebook" /></a></li>
                        <li><a href="#"><img src="images/social/yahoo_16.png" alt="yahoo" /></a></li>
                        <li><a href="#"><img src="images/social/delicious_16.png" alt="delicious" /></a></li>                     
                        <li><a href="#"><img src="images/social/technorati_16.png" alt="technorati" /></a></li>
                        <li><a href="#"><img src="images/social/rss_16.png" alt="rss" /></a></li>
                    </ul>
                    <br class="clearf" />
                    <p>&copy; 2010 <a href="index.html">maxX Inc</a>. All rights reserved. | Icons by <a href="http://komodomedia.com">komodomedia.com</a></p>
                </div>            	            
            </div><!-- END WRAPPER -->
        </div><!-- END FOOTER --> 
    </body>
</html>